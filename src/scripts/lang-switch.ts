export const initLangSwitch = () => {
  const switchBtn = document.getElementById('lang-switcher');
  switchBtn?.addEventListener('click', (e) => {
    sessionStorage.setItem('scrollY', window.scrollY.toString());
  });
};

