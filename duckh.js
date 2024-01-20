document.getElementById("logoText").innerHTML = logoText;
document.getElementById("logoText").href = bestLink;
var adsterralElements = document.getElementsByClassName("adsterral");
for (var i = 0; i < adsterralElements.length; i++) {
    adsterralElements[i].href = bestLink;
}
var sitenameElements = document.getElementsByClassName("sitename");
for (var i = 0; i < sitenameElements.length; i++) {
    sitenameElements[i].textContent = siteName;
}