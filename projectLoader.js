document.addEventListener('DOMContentLoaded', function()
{
    const projectCards = document.getElementById('projectCardHolder');

    projects.forEach(function(project)
    {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'projectDiv glass';

        // Name
        const nameP = document.createElement('p');
        nameP.className = 'projectName';
        nameP.textContent = project.name;
        projectDiv.appendChild(nameP);

        // Image slider
        const slider = document.createElement('div');
        slider.className = 'slider';

        const imageImg = document.createElement('img');
        imageImg.alt = project.name;
        slider.appendChild(imageImg);

        let currentImage = 0;

        function showImage(index)
        {
            // wraps around, so going past the last image returns to the first
            currentImage = (index + project.images.length) % project.images.length;
            imageImg.src = project.images[currentImage];
        }

        if (project.images.length > 1)
        {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'sliderBtn prev';
            prevBtn.textContent = '‹';
            prevBtn.addEventListener('click', function() { showImage(currentImage - 1); });
            slider.appendChild(prevBtn);

            const nextBtn = document.createElement('button');
            nextBtn.className = 'sliderBtn next';
            nextBtn.textContent = '›';
            nextBtn.addEventListener('click', function() { showImage(currentImage + 1); });
            slider.appendChild(nextBtn);
        }

        projectDiv.appendChild(slider);
        showImage(0);

        // Description
        const descriptionP = document.createElement('p');
        descriptionP.textContent = project.description;
        projectDiv.appendChild(descriptionP);

        // Links
        const linkA = document.createElement('a');
        linkA.href = project.link;
        linkA.textContent = 'View project';
        linkA.target = '_blank';
        projectDiv.appendChild(linkA);

        const linkB = document.createElement('a');
        linkB.href = project.linkReport;
        linkB.textContent = 'View project report';
        linkB.target = '_blank';
        projectDiv.appendChild(linkB);

        // Skills
        const skillsUsedP = document.createElement('p');
        skillsUsedP.className = 'projectName';
        skillsUsedP.textContent = project.skills;
        projectDiv.appendChild(skillsUsedP);

        projectCards.appendChild(projectDiv);
    });
});