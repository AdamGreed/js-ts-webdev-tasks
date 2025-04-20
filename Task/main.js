document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h2');
    title.textContent = 'Last works';
    header.appendChild(title);

    const exploreButton = document.createElement('button');
    exploreButton.textContent = 'Explore Showcase';
    header.appendChild(exploreButton);

    root.appendChild(header);

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    const projectsData = [
        {
            title: 'Startup Framework',
            content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
            buttonText: 'Explore',
            styleClass: ''
        },
        {
            title: 'Web Generator',
            content: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
            buttonText: 'Explore',
            styleClass: 'blank'
        },
        {
            title: 'Slides 4',
            content: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
            buttonText: 'Explore',
            styleClass: 'blue'
        },
        {
            title: 'Postcards',
            content: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
            buttonText: 'Explore',
            styleClass: 'image',
            imagePath: './assets/Ship.jpg'
        }
    ];

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        if (project.styleClass) {
            card.classList.add(project.styleClass);
        }
        if (project.styleClass === 'image' && project.imagePath) {
            card.style.backgroundImage = `url('${project.imagePath}')`;
        }

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = project.title;
        card.appendChild(cardTitle);

        const cardContent = document.createElement('p');
        cardContent.textContent = project.content;
        card.appendChild(cardContent);

        const cardButton = document.createElement('button');
        cardButton.textContent = project.buttonText;
        card.appendChild(cardButton);

        gridContainer.appendChild(card);
    });

    root.appendChild(gridContainer);
});