function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle("active");
}
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

function hideContentOnMouseOut(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = 'none';
}
//  department javascript --------------------------------------------------------------------------------------------------------------------

