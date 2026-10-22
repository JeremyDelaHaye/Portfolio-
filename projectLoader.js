document.addEventListener('DOMContentLoaded', function()
{
    const projectCards = document.getElementById('projectCardHolder');

    projects.forEach(function(project)
    {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'projectDiv';

        const nameP = document.createElement('p');
        nameP.className = 'projectName';
        nameP.textContent = project.name;
        projectDiv.appendChild(nameP);

        const imageImg = document.createElement('img');
        imageImg.src = project.image;
        imageImg.alt = project.name;
        projectDiv.appendChild(imageImg);

        const descriptionP = document.createElement('p');
        descriptionP.textContent = project.description;
        projectDiv.appendChild(descriptionP);

        const linkA = document.createElement('a');
        linkA.href = project.link;
        linkA.textContent = 'View project';
        linkA.target = '_blank';
        projectDiv.appendChild(linkA);

        const linkB = document.createElement('b');
        linkB.href = project.linkReport;
        linkB.textContent = 'View project report';
        linkB.target = '_blank';
        projectDiv.appendChild(linkB);

        const skillsUsedP = document.createElement('p')
        skillsUsedP.className = 'projectName';
        skillsUsedP.textContent = project.skills;
        projectDiv.appendChild(skillsUsedP);


        projectCards.appendChild(projectDiv);
    });
});