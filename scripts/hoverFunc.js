const hamburgerContainer = document.querySelector('#hamburger-menu-div');
const hamburgerIcon = document.querySelector('#hamburger-icon');

hamburgerContainer.addEventListener('mouseover', () => {
    hamburgerIcon.setAttribute('src', './quantum-screen-assets/icons/hamburger-menuActive.svg');
});
hamburgerContainer.addEventListener('mouseout', () => {
    hamburgerIcon.setAttribute('src', './quantum-screen-assets/icons/hamburger-menu.svg');
});

let fixedNavItems = document.getElementsByClassName("fixed-nav-item");
// console.log(fixedNavItems[0].children[0]);

for(let i = 0; i < fixedNavItems.length - 1; i++) {
    fixedNavItems[i].addEventListener('mouseover', function() {
        let img = this.children[0].children[0];
        let span = this.children[0].children[1];
        let imgSrc = img.getAttribute('src').replace('.svg','Active.svg');
        img.setAttribute('src', imgSrc);
        span.style.opacity = 0;
    });

    fixedNavItems[i].addEventListener('mouseout', function() {
        let img = this.children[0].children[0];
        let span = this.children[0].children[1];
        let imgSrc = img.getAttribute('src').replace('Active.svg','.svg');
        img.setAttribute('src', imgSrc);
        span.style.opacity = 1;
    });
}

const appendSpan = (ele) => {
    let dropdownIcon = document.createElement('span');
    dropdownIcon.classList.add('material-icons','dropdown-btn-icon');
    dropdownIcon.innerHTML = `&#xE5CF;`;
    ele.appendChild(dropdownIcon);
}

function closeOpenedSubmenu(current) {
    const opened = document.querySelector('.opened-submenu');
    if(opened && opened != current) {
        opened.parentElement.firstElementChild.childNodes[1].innerHTML = '&#xE5CF;';
        opened.classList.toggle('opened-submenu');
    }
}

let dropdownBtns = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdownBtns.length; i++) {
    appendSpan(dropdownBtns[i]);
    dropdownBtns[i].addEventListener("click", function () {
        let dropdownContent = this.nextElementSibling;
        closeOpenedSubmenu(dropdownContent);
        dropdownContent.classList.toggle('opened-submenu');
        this.childNodes[1].innerHTML = dropdownContent.classList.contains('opened-submenu') ? '&#xE5CE;' : '&#xE5CF;' ;
    });
}