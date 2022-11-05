const themeSelector = document.getElementById("Light/Dark")
console.log(themeSelector)


function changeTheme() {
    if ("Light/Dark" === "Dark")
        var dark = document.getElementById("body")
        body.classlist.add += "Dark"
        logo.classlist.add +=  "Dark"
        console.log("Dark theme selected");


    if ("Light/Dark" === "Light")
        var light = document.getElementById("body")
        body.classlist.remove += "Dark"
        logo.classlist.remove += "Dark"
        console.log("Light theme selected");
}
themeSelector.addEventListener("change", changeTheme);