function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab contents
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the button that opened it
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[0].click();
});