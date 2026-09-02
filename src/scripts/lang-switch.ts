export const initLangSwitch = () => {
  const switchers = document.querySelectorAll('[data-lang-switcher]');
  switchers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      sessionStorage.setItem('scrollY', window.scrollY.toString());
    });
  });
};

