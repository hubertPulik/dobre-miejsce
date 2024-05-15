const hamburgerIcon = document.querySelector('.hamburger__icon');
    const bar01 = document.querySelector('.bar-1');
    const bar02 = document.querySelector('.bar-2');
    const bar03 = document.querySelector('.bar-3');
    const headerMenu = document.querySelector('.header__menu-mobile');

    const openMenu = () => {
      bar01.classList.toggle('bar-1-open');
      bar02.classList.toggle('bar-2-open');
      bar03.classList.toggle('bar-3-open');
      headerMenu.classList.toggle('header__menu-open');
    }

    hamburgerIcon.addEventListener('click', openMenu);
    headerMenu.addEventListener('click', openMenu);