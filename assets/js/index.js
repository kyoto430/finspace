console.log('kyoto430 template js running...');

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__burger');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();

function showAllCards() {
  var dots = document.getElementById('dots-1');
  var moreBlocks = document.getElementById('more-blocks');
  var btnBlocks = document.getElementById('btnMoreBlocks');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnBlocks.innerHTML = 'Показать все услуги';
    moreBlocks.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnBlocks.innerHTML = 'Скрыть услуги';
    moreBlocks.style.display = 'flex';
  }
}

function showAllText() {
  var dots = document.getElementById('dots-2');
  var moreText = document.getElementById('more-text');
  var btnText = document.getElementById('btnMoreText');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Раскрыть текст';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Скрыть текст';
    moreText.style.display = 'flex';
  }
}

function showAllAccords() {
  var dots = document.getElementById('dots-3');
  var moreAccords = document.getElementById('more-accords');
  var btnAccords = document.getElementById('btnMoreAccords');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnAccords.innerHTML = 'Показать все вопросы';
    moreAccords.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnAccords.innerHTML = 'Скрыть вопросы';
    moreAccords.style.display = 'flex';
  }
}
