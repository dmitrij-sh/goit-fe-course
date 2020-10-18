const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switchBtn: document.querySelector('#theme-switch-toggle'),
};

refs.switchBtn.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    setThemeDark();
  } else {
    setThemeLight();
  }
}

function setThemeLight() {
  refs.switchBtn.checked = false;
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

function setThemeDark() {
  refs.switchBtn.checked = true;
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function getPageLoad() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setThemeDark();
  } else {
    setThemeLight();
  }
}

getPageLoad();
