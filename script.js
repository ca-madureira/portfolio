const categories = [
  {
    id:'html',
    title: 'Projetos HTML e CSS',
    projects:[
      {
        
        name:'Piano Arte - Landing Page',
        description:'Landing Page para a escola ficticia de piano Piano Arte, criada com o objetivo de praticar HTML, CSS',
        image:'assets/piano.png',
        link:'https://github.com/ca-madureira/landing-page-escola-piano',
        tecnologies:['html', 'css']
      },
     
    ]

  },
  {
    id:'mern',
    title:'Projetos MERN Stack',
    projects:[
      {
        name:'E-commerce de Roupas',
        description:'Projeto de e-commerce de roupas desenvolvido em React, Typescript, Node.js, Express, Mongoose e TailwindCSS',
        image:'assets/ecommerce.png',
        link:'https://github.com/ca-madureira/ecommerce-mern',
        tecnologies:['react','typescript', 'node', 'express', 'mongoose', 'tailwind']
      },
      {
        name:'Floricultura Flores de Papel',
        description:'Projeto Flores de Papel, uma aplicação de e-commerce para uma floricultura online.',
        image:'assets/floricultura.png',
        link:'https://github.com/ca-madureira/floricultura-mern-stack',
        tecnologies:['mongoDB', 'express', 'react', 'node']
      },
      {
        name:'AmizApp',
        description:'É uma rede social, desenvolvida com a stack MERN, com comunicação em tempo real via Socket.IO.',
        image:'assets/social.png',
        link:'https://github.com/ca-madureira/social-media-mern',
        tecnologies:['mongoDB', 'express', 'react', 'node', 'socket.io']
      }
    ]
  }
]

const changeTecnology = (tecnology) => {
  const category = categories.find((cat) => cat.id === tecnology);
  const contentSection = document.querySelector('.content');

  if (category) {
    document.getElementById('section-title').textContent = category.title;

    const existingCards = contentSection.querySelectorAll('.card');
    existingCards.forEach((card) => card.remove());

    
    const existingCardLinks = contentSection.querySelectorAll('.card-link');
    existingCardLinks.forEach((cardLink)=> cardLink.remove())

    category.projects.forEach((project) => {
    
      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.classList.add('card-link');

      
      const article = document.createElement('article');
      article.classList.add('card');
      
      const image = document.createElement('img');
      image.src = project.image;

      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('card-description');

      const title = document.createElement('h4');
      title.textContent = project.name;

      const desc = document.createElement('p');
      desc.textContent = project.description;

      const techList = document.createElement('div');
      project.tecnologies.forEach((tech) => {
        const span = document.createElement('span');
        span.textContent = tech;
        techList.appendChild(span);
      });

      descriptionDiv.appendChild(title);
      descriptionDiv.appendChild(desc);
      descriptionDiv.appendChild(techList);

      article.appendChild(image);
      article.appendChild(descriptionDiv);

      link.appendChild(article);

      contentSection.appendChild(link);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  changeTecnology('mern'); 
});
