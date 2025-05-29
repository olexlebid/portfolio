// Redirection to Notion Portfolio
window.location.href = "https://olexlebid.notion.site/53ec8551aecb49f7b20a744b8383653f?v=6f3ad41d279a4a00bb54ab9acc1e6374";


document.addEventListener('DOMContentLoaded', function(){

// Auto external links with nofollow
document.addEventListener('DOMContentLoaded', function () {
var allowedHostnames = [
'olexlebid.webflow.io',
];
var links = document.getElementsByTagName("a");
var i;
for (i = 0; i < links.length; i++) {
var currentHostname = links[i].hostname;
if (allowedHostnames.indexOf(currentHostname) === -1) {
links[i].rel = "nofollow noopener noreferrer";
links[i].target = "_blank";
}
}
});

});
