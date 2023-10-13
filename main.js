const body = document.querySelector("body");
const checkbox1 = document.querySelector("#checkbox1");
const root = document.querySelector(":root");

const themes = {
  default: {
    "--bg-color": "#191919",
    "--bg-color-pj": "#363636",
    "--border-color": "#191919",
    "--h1-color": "#666666",
    "--bg-name-pj": "#CCC",
    "--color-contact": "#CCC",

    "--block-color": "#fff",
    "--text-color": "#0b1f3b",
    "--checkbox1-color": "#263ce7",
    "--label-color": "#d1d7fa",
  },
  dark: {
    "--bg-color": "#ffffff",
    "--bg-color-pj": "#ffffff",
    "--border-color": "#eee",
    "--h1-color": "#42446E",
    "--bg-name-pj": "#000",
    "--color-contact": "#1E0E62",

    "--block-color": "#161e2b",
    "--text-color": "#fff",
    "--checkbox1-color": "#263ce7",
    "--label-color": "#253044",
  },
};

// Проверяем наличие переменной в local storage
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", false);
}

// Считываем данные с local storage
let isDarkTheme = JSON.parse(localStorage.getItem("theme"));

// Устанавливаем текущую тему
changeTheme(isDarkTheme);

checkbox1.addEventListener("click", checkbox1Handler);

// Функция для обработки нажатия кнопки
function checkbox1Handler(e) {
  e.preventDefault;
  isDarkTheme = !isDarkTheme;
  localStorage.setItem("theme", isDarkTheme);
  changeTheme(isDarkTheme);
}

// Функция для смены темы
function changeTheme(isDarkTheme) {
  const theme = isDarkTheme ? "dark" : "default";
  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}