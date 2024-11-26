const buttonTheme = document.getElementById("theme-button");

buttonTheme.addEventListener("click", changeTheme);

var themeDark = false;

function changeTheme() {
    if (!themeDark) {
        document.body.classList.add("body-dark");
    } else {
        document.body.classList.remove("body-dark");
    }

    themeDark = !themeDark;
}