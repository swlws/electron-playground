const information = document.getElementById("info");

let versionString = "";
Object.keys(window.__context_bridge__.version).forEach((key) => {
  versionString += `${key}: ${window.__context_bridge__.version[key]}\n`;
});
information.innerText = versionString;
