document.addEventListener('DOMContentLoaded', function()
{
    const projectCards = document.getElementById('projectCardHolder');

    projects.forEach(function(project)
    {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'projectDiv glass';


        //makes div for title and image hover over 
        const titleImageDiv = document.createElement('div')
        titleImageDiv.className = 'titleImageDiv';

        // Name
        const nameP = document.createElement('p');
        nameP.className = 'projectName';
        nameP.textContent = project.name;


        //puts name into titleImageDiv
        titleImageDiv.appendChild(nameP)

        //preview elemt
        const preview = document.createElement('div')
        preview.className = 'preview '

        //creates icon and adds to preview div
        const icon = document.createElement('i');
        icon.className = 'hn hn-image';
        icon.setAttribute('aria-label', 'Show screenshots');
        icon.addEventListener('click', function() { preview.classList.toggle('open'); });
        preview.appendChild(icon)

        //adds preview to titleImageDiv
        titleImageDiv.appendChild(preview)
        projectDiv.appendChild(titleImageDiv)

        const popup = document.createElement('div')
        popup.className = 'previewPopup glass';

        const slider = document.createElement('div')
        slider.classname = 'slider';

        const img = document.createElement('img')
        img.alt = project.name;
        slider.appendChild(img);

        let current = 0; 

        function showImage(index)
        {
            current = (index + project.images.length) % project.images.length;
            img.src = project.images[current]
        }

        if (project.images.length > 1)
        {
            const prev = document.createElement('button');
            prev.className = 'sliderBtn prev';
            prev.innerHTML = '<i class="hn hn-angle-left"></i>';
            prev.addEventListener('click', function() { showImage(current - 1); });
            slider.appendChild(prev);

            const next = document.createElement('button');
            next.className = 'sliderBtn next';
            next.innerHTML = '<i class="hn hn-angle-right"></i>';
            next.addEventListener('click', function() { showImage(current + 1); });
            slider.appendChild(next);
        }

        popup.appendChild(slider);
        preview.appendChild(popup);

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

        // Skills
        const skillsUsedP = document.createElement('p');
        skillsUsedP.className = 'projectName';
        skillsUsedP.textContent = project.skills;
        projectDiv.appendChild(skillsUsedP);

        projectCards.appendChild(projectDiv);
    });
});