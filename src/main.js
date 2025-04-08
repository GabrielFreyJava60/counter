import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <input id="time-field" type="text" readonly />
    </div>
    <p class="read-the-docs">
      Current time updates every second
    </p>
  </div>
`;

const timeField = document.getElementById("time-field");

function updateTime() {
  const now = new Date();
  timeField.value = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);


