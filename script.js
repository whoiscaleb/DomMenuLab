
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'let(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>' 

let topMenuEl = document.querySelector('#top-menu')

document.getElementById("#top-menu").style.height = "100px";

topMenuEl.style.backgroundColor = 'let(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

const links = menuLinks.map(link => `<a href='${link.href}'>${link.text}</a>`);

topMenuEl.setAttribute

