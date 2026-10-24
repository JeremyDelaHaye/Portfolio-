const canvas = document.getElementById('blobCanvas');
const ctx = canvas.getContext('2d');

const SCALE = 3;        // render at 1/3 resolution; lower = sharper grain, slower
const GRAIN = 0;     // noise strength
const MAX_F = 2;        // field value that maps to the end of the palette
const PALETTE_SIZE = 512;

let w, h, imageData;
let blobs = [];
let mouseX = -1000, mouseY = -1000;   // start off-screen

function rand(min, max) { return Math.random() * (max - min) + min; }

// Colour stops: [field value, [r, g, b]]
const stops =
[
    [0.00, [10, 10, 10]],
    [0.35, [20, 20, 20]],
    [0.58, [45, 45, 45]],
    [0.66, [90, 90, 90]],
    [1.10, [110, 110, 110]],
    [1.60, [170, 170, 170]],
    [2.00, [170, 170, 170]]
];

// Precompute a colour lookup table
const palette = new Uint8Array(PALETTE_SIZE * 3);
for (let i = 0; i < PALETTE_SIZE; i++)
{
    const f = (i / (PALETTE_SIZE - 1)) * MAX_F;
    let s = 0;
    while (s < stops.length - 2 && f > stops[s + 1][0]) s++;
    const [f0, c0] = stops[s];
    const [f1, c1] = stops[s + 1];
    const t = Math.min(1, Math.max(0, (f - f0) / (f1 - f0)));
    for (let c = 0; c < 3; c++) palette[i * 3 + c] = c0[c] + (c1[c] - c0[c]) * t;
}

function resize()
{
    w = Math.ceil(window.innerWidth / SCALE);
    h = Math.ceil(window.innerHeight / SCALE);
    canvas.width = w;
    canvas.height = h;
    imageData = ctx.createImageData(w, h);
}

function createBlob()
{
    return {
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.3, 0.3),
        vy: rand(-0.3, 0.3),
        rFrac: rand(0.06, 0.16),       // size relative to screen
        phase: rand(0, Math.PI * 2),   // for size pulsing
        pulseSpeed: rand(0.005, 0.02),
        followMouse: false,
        r2: 0
    };
}

function update()
{
    const minDim = Math.min(w, h);

    for (const b of blobs)
    {
        if (b.followMouse)
        {
            // Ease towards the cursor; lower = smoother/laggier
            b.x += (mouseX - b.x) * 0.08;
            b.y += (mouseY - b.y) * 0.08;
        }
        else
        {
            // Random wandering
            b.vx += rand(-0.02, 0.02);
            b.vy += rand(-0.02, 0.02);

            const speed = Math.hypot(b.vx, b.vy);
            const maxSpeed = 0.45;
            if (speed > maxSpeed)
            {
                b.vx *= maxSpeed / speed;
                b.vy *= maxSpeed / speed;
            }

            b.x += b.vx;
            b.y += b.vy;

            // Bounce off edges
            if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx); }
            if (b.x > w) { b.x = w; b.vx = -Math.abs(b.vx); }
            if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy); }
            if (b.y > h) { b.y = h; b.vy = -Math.abs(b.vy); }
        }

        // Gently pulse size so shapes morph
        b.phase += b.pulseSpeed;
        const r = b.rFrac * minDim * (1 + 0.15 * Math.sin(b.phase));
        b.r2 = r * r;
    }
}

function draw()
{
    const data = imageData.data;
    let i = 0;

    for (let y = 0; y < h; y++)
    {
        for (let x = 0; x < w; x++)
        {
            let f = 0;
            for (const b of blobs)
            {
                const dx = x - b.x;
                const dy = y - b.y;
                f += b.r2 / (dx * dx + dy * dy + 1);
            }

            f += (Math.random() - 0.5) * GRAIN;

            let idx = (f / MAX_F * PALETTE_SIZE) | 0;
            if (idx < 0) idx = 0;
            if (idx >= PALETTE_SIZE) idx = PALETTE_SIZE - 1;

            const p = idx * 3;
            data[i]     = palette[p];
            data[i + 1] = palette[p + 1];
            data[i + 2] = palette[p + 2];
            data[i + 3] = 255;
            i += 4;
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

function loop()
{
    update();
    draw();
    requestAnimationFrame(loop);
}

window.addEventListener('mousemove', function(e)
{
    mouseX = e.clientX / SCALE;   // match the low-res canvas
    mouseY = e.clientY / SCALE;
});

window.addEventListener('resize', resize);

resize();

const count = Math.floor(rand(5, 9));   // random number of blobs
for (let n = 0; n < count; n++) blobs.push(createBlob());

const mouseBlob = createBlob();
mouseBlob.followMouse = true;
mouseBlob.rFrac = 0.07;   // fixed size for the cursor blob
blobs.push(mouseBlob);

loop();