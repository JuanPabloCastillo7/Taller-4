document.addEventListener('DOMContentLoaded', () => {
    crearEncabezado();
    crearMain();
    crearContenedorDeImagenes(); 
    crearPieDePagina();
});

function crearEncabezado() {
    const header = document.createElement('header');
    header.className = 'header';
    header.style.cssText = 'background-color: white; color: black; padding: 10px; margin-top: 30px; width: 82%; margin-left: auto; margin-right: auto; position: absolute; top: 0; left: 0; right: 0; z-index: 1;';

    const nav = document.createElement('nav');
    nav.style.cssText = 'display: flex; justify-content: space-between; align-items: center; width: 100%;';

    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo1';
    logoDiv.style.cssText = 'font-size: 40px; font-weight: bold; flex-shrink: 0;'; 
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    const logoImg = document.createElement('img');
    logoImg.src = './recursos/imagenes/Logo travel.Png';
    logoImg.alt = '';
    logoImg.style.cssText = 'width: 100px; height: auto;'; 
    logoLink.appendChild(logoImg);
    logoDiv.appendChild(logoLink);
    nav.appendChild(logoDiv);

    const ul = document.createElement('ul');
    ul.className = 'nav-links';
    ul.style.cssText = 'list-style-type: none; margin: 0; padding: 0; display: flex; align-items: center;';

    ['HOME', 'SERVICES', 'EVENTS', 'ABOUT US', 'CONTACT'].forEach(text => {
        const li = document.createElement('li');
        li.style.cssText = 'padding: 10px;';
        const a = document.createElement('a');
        a.href = `./HTML/${text}.html`;
        a.textContent = text;
        a.style.cssText = 'color: black; text-decoration: none;';
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);

    header.appendChild(nav);
    document.body.appendChild(header);
}


function crearMain() {
    const main = document.createElement('main');

    const heroSection = document.createElement('section');
    heroSection.className = 'hero';
    heroSection.style.cssText = 'background-image: url("./Recursos/imagenes/Logo paisaje principal.png"); background-size: cover; height: calc(100vh - 30px); display: flex; justify-content: center; align-items: center; text-align: center; color: white; margin-bottom: 0;';
    main.appendChild(heroSection);

    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';
    heroContent.style.cssText = 'width: 390px; height: 320px; background-color: white; margin-left: -57%;';
    heroSection.appendChild(heroContent);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = '$8,450';
    price.style.cssText = 'background-color: red; width: 150px; font-size: 36px; margin-bottom: 40px; text-align: center;';
    heroContent.appendChild(price);

    const title = document.createElement('h1');
    title.textContent = 'Venice, Italy';
    title.style.cssText = 'color: black; font-size: 48px; margin-bottom: 20px;';
    heroContent.appendChild(title);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Travel is free responsive template by templatemo. All images used in this template are from ';
    const link = document.createElement('a');
    link.href = './index.html';
    link.textContent = 'Unsplash';
    paragraph.appendChild(link);
    paragraph.style.cssText = 'color: black; margin-left: 25px; margin-right: 25px; text-align: justify;';
    heroContent.appendChild(paragraph);

    const bookingButton = document.createElement('button');
    bookingButton.textContent = 'PRE-BOOKING';
    bookingButton.style.cssText = 'background-color: #4caf50; color: white; padding: 10px 20px; border: none; cursor: pointer; width: 55%;';
    heroContent.appendChild(bookingButton);

    const destinationsSection = document.createElement('section');
    destinationsSection.className = 'destinations';
    destinationsSection.style.cssText = 'display: flex; justify-content: space-around; margin-top: 0;';
    main.appendChild(destinationsSection);

    ['ITALY', 'FRANCE', 'GERMANY', 'SPAIN'].forEach(country => {
        const destination = document.createElement('div');
        destination.className = 'destination';
        destination.style.cssText = 'width: 275px; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.1);';

        const destinationInfo = document.createElement('div');
        destinationInfo.className = 'destination-info';

        const countryH3 = document.createElement('h3');
        countryH3.textContent = country;
        countryH3.style.cssText = 'background-color: #4caf50; color: white; padding: 10px 0;';

        const countryImg = document.createElement('img');
countryImg.src = `./RECURSOS/imagenes${country.toLowerCase()}.png`;
countryImg.alt = country;

countryImg.style.cssText = 'width: 275px; height: 190px; object-fit: cover;';

        destinationInfo.appendChild(countryH3);
        destinationInfo.appendChild(countryImg);
        destination.appendChild(destinationInfo);

        const p1 = document.createElement('p');
        p1.className = 'description-P1';
        p1.textContent = 'Rome, Milan, Naples'; 
        p1.style.cssText = 'color: green; margin: 10px 0;';

        const p2 = document.createElement('p');
        p2.className = 'description-P2';
        p2.textContent = 'SILVER HOTEL, 4 NIGHTS, 5 STARS'; 
        p2.style.cssText = 'color: red; margin: 0;';

        const bookButton = document.createElement('button');
        bookButton.className = 'reserva';
        bookButton.textContent = '$1,800 BOOK NOW'; 
        bookButton.style.cssText = 'background-color: #4caf50; color: white; width: 100%; padding: 10px 0; margin-top: 10px; cursor: pointer;';

        destination.appendChild(p1);
        destination.appendChild(p2);
        destination.appendChild(bookButton);

        destinationsSection.appendChild(destination);
    });

    document.body.appendChild(main);

}
function crearContenedorDeImagenes() {
    const flexContainer = document.createElement('div');
    flexContainer.style.cssText = 'display: flex; justify-content: space-around; align-items: center; width: 100%; padding: 40px 0; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc;';

    const imagePaths = [
        './Recursos/imagenes/Logo 1.png',
        './Recursos/imagenes/Logo 2.png',
        './Recursos/imagenes/Logo 3.png',
        './Recursos/imagenes/Logo 1.png',
        './Recursos/imagenes/Logo 2.png',
        './Recursos/imagenes/Logo 3.png'
    ];

    imagePaths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Description';  
        img.style.cssText = 'width: 50px; height: auto;';  
        flexContainer.appendChild(img);
    });

    const main = document.querySelector('main');
    main.appendChild(flexContainer);
}

function crearPieDePagina() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.style.cssText = 'background-color: white; color: green; padding: 20px 0;';
    document.body.appendChild(footer);

    const container = document.createElement('div');
    container.className = 'container';
    container.style.cssText = 'max-width: 1000px; margin: 0 auto;';
    footer.appendChild(container);

    const row = document.createElement('div');
    row.className = 'row';
    row.style.cssText = 'display: flex; flex-wrap: wrap;';
    container.appendChild(row);

    const col1 = document.createElement('div');
col1.className = 'col-md-4';
col1.style.cssText = 'width: 33.33%; text-align: center;';
const logo = document.createElement('img');
logo.src = './Recursos/imagenes/Logo travel.png';
logo.alt = 'Logo travel';

logo.style.width = '150px';
logo.style.height = 'auto';  
col1.appendChild(logo);
row.appendChild(col1);

    const col2 = document.createElement('div');
    col2.className = 'col-md-4';
    col2.style.cssText = 'width: 33.33%; text-align: center;';
    const copyText = document.createElement('p');
    copyText.innerHTML = '&copy; 2024 VIAJES POR COLOMBIA';
    col2.appendChild(copyText);
    row.appendChild(col2);

    const col3 = document.createElement('div');
    col3.className = 'col-md-4';
    col3.style.cssText = 'width: 33.33%; text-align: center;';
    const socialUl = document.createElement('ul');
    socialUl.className = 'social';
    socialUl.style.cssText = 'margin-top: 0; display: flex; justify-content: center; margin-bottom: 30px;';
    ['https://es-la.facebook.com/', 'https://twitter.com/x', 'https://www.instagram.com/', 'https://co.pinterest.com/'].forEach((url, index) => {
        const li = document.createElement('li');
        li.style.cssText = 'margin-right: 25px;';
        const a = document.createElement('a');
        a.href = url;
        const i = document.createElement('i');
        i.className = 'fab ' + ['fa-facebook-f', 'fa-times', 'fa-instagram', 'fa-pinterest'][index];
        i.style.cssText = 'font-size: 20px; margin-top: 5px;';
        a.appendChild(i);
        li.appendChild(a);
        socialUl.appendChild(li);
    });
    col3.appendChild(socialUl);
    row.appendChild(col3);
}