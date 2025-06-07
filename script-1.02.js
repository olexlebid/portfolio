// Redirection to Notion Portfolio
window.location.href = "https://olexlebid.notion.site/20bb752b68aa811fa347fb17cd72f662?v=20bb752b68aa8124bf11000c8561ff7c";

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
