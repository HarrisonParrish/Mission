const themeSelector = document.getElementById("Light/Dark").addEventListener("change", changeTheme)
console.log(themeSelector)

function changeTheme(){

    if ("Light/Dark" == "Dark")
        document.body.classlist.add("Dark");
        console.log("Dark theme selected");
        document.logo.classlist.add("Dark");

    if ("Light/Dark" == "Light")
            document.body.classlist.remove("Dark");
            console.log("Light theme selected");
            document.logo.classlist.remove("Dark");
        
}