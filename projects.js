document.addEventListener('DOMContentLoaded', function()
{
    console.log('l')
    let projects = 
    [
        {name: 'Project 1', image: 'image', description: 'Project 1 description', link: 'link'},
        {name: 'Project 1', image: 'image', description: 'Project 1 description', link: 'link'}
    ];

    const projectCards = document.getElementById('projectCardHolder')

    projects.forEach(function(projects)
    {
        const projectsDiv = document.createElement('div')
        projectsDiv.id = 'projectCards'
        projectsDiv.className = 'projectDiv';

        const nameP = document.createElement('p')
        nameP.textContent = `${projects.name}`;
        projectsDiv.appendChild(nameP);

        const imageImg = document.createElement('img')
        imageImg.textContent = `${projects.image}`;
        projectsDiv.appendChild(imageImg);

        const descriptionP = document.createElement('p')
        descriptionP.textContent = `${projects.description}`;
        projectsDiv.appendChild(nameP)
        
        const linkP = document.createElement('p')
        linkP.textContent = `${projects.link}`;
        projectsDiv.appendChild(linkP)

        projectCards.appendChild(projectsDiv);
    })
});
 