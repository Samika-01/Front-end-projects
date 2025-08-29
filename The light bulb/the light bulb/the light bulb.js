
const bulb = document.getElementById("myimage2");
const btnon = document.getElementById("btnon");
const btnoff = document.getElementById("btnoff");

btnon.onclick = function() {
    bulb.src = "thelightonbulb.gif";

};

btnoff.onclick = function() {
    bulb.src = "thelightoffbulb.png";
};