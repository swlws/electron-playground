const information = document.getElementById("info");

let versionString = "";
Object.keys(window.versions).forEach((key) => {
  versionString += `${key}: ${window.versions[key]}\n`;
});
information.innerText = versionString;
