document.addEventListener('DOMContentLoaded', function()
{
    let projects = 
    [
        {name: 'Project 1', image: 'image', description: 'Project 1 description', link: 'link'}
    ];

    const projectCards = document.getElementById('projectCards')

    projects.forEach(function(projects)
    {
        const projectsDiv = document.createElement('div')
        projectsDiv.className = 'projectDiv';

        const nameP = document.createElement('p')
        nameP.textContent = `${projects.name}`;
        projectsDiv.appendChild(nameP);

        const imageImg = document.createElement('img')
        imageImg.textContent = `${projects.image}`;
        projectsDiv.appendChild(imageImg);

        const descriptionP = document.createElement('p')
        descriptionP.textContent = `${projeects.description}`;
        projectsDiv.appendChild(nameP)
        
        const linkP = document.createElement('p')
        linkP.textContent = `${projeects.link}`;
        projectsDiv.appendChild(linkP)
    })
});
 