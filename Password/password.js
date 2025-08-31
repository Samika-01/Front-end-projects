
let input = document.getElementById("input");
let eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function()
{
    if (input.type === "password"){
        input.type = "text";
        eyeIcon.textContent = "🫣 ";
    }
    else{
        input.type = "password";
        eyeIcon.textContent = " 👁️";
    }
})