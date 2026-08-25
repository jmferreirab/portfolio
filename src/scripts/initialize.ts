import { initDarkMode } from './dark-mode';
import { initLangSwitch } from './lang-switch';

window.addEventListener('load', () => {
  initDarkMode();
  initLangSwitch();
});
