function typeText(element, text, speed,keepCursor)
{
    let i = 0;

    function addLetter()
    {
        if (i < text.length)
        {
            element.textContent += text[i];
            i++;
            setTimeout(addLetter, speed);
        }
        
        else if (!keepCursor)
        {
            element.classList.add('done');
        }
    }
    addLetter();
}
const aboutMeText =
    'Second-year BSc Interactive Media student at the University of York with a strong interest in software ' +
    'development and interactive technologies. Experienced in developing practical projects that combine ' +
    'multiple technologies, including a p5.js shooter game with a custom level editor and a full-stack ' +
    'GymTracker website built using PHP and MySQL. Currently seeking a 12-month placement starting ' +
    'in September 2027, ideally within software development or another area of the technology industry, to ' +
    'further develop technical skills and gain valuable professional experience.';

const skillsText =
    'Programming\n' +
    '• JavaScript (p5.js), C#, HTML, CSS, PHP\n\n' +
    'Tools & Platforms\n' +
    '• Git/GitHub, Microsoft Azure, local hosting and server setup\n' +
    '• Device configuration and network troubleshooting\n\n' +
    'Creative Software\n' +
    '• 3D modelling and animation in Blender\n' +
    '• Photo editing in Photoshop\n' +
    '• Video editing in Premiere Pro and animation in After Effects';

const heroText = 'Interactive Media student · seeking a software development placement from Sept 2027';


typeText(document.getElementById('name'), 'Jeremy De la Haye', 10,true)
typeText(document.getElementById('aboutMe'), 'About me:', 10,false);
typeText(document.getElementById('heroStatement'), heroText, 10,false);
typeText(document.getElementById('aboutMeContent'), aboutMeText, 10,false);
typeText(document.getElementById('skills'),'Skills:',10,false);
typeText(document.getElementById('skillsContent'),skillsText,10,false);