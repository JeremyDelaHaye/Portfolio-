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