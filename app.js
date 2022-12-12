const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


//Build the navigation menu
const BuildTheNavigationMenu = () => {
  let navUI = ``
  for (int i = 0; i < sections.length; i++) {

    const sectionID = sections[i].getAttribute('id');
    const sectionDataNav = sections[i].dataset.nav;
    const navUI = `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    nav.innerHTML += navUI;
  }
  // classlist method
  nav.children[0].children[0].classList.add('active')
}

BuildTheNavigationMenu();


document.getElementById("myAnchor").addEventListener("click", function (event) {
  event.preventDefault()
});

//check if section in view portt/closest to the top
function sectionINViewPort(element) {
  let sectionPosition = element.getBoundingClientRect();
  return (sectionPosition.top >= 0);

}
//ditinguished viewd section from the other sections.
function toggleActiveClass() {
  for (section of sections) {
    if (sectionINViewPort(section)) {
      if (!section.classList.contains('your-active-class')) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: green";
      }
    }
    else {
      section.classList.remove('your-active-class');
      section.style.cssText = "background-color: blue";
    }
  }
}

document.addEventListener('scroll', toggleActiveClass)
