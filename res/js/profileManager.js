
document.addEventListener("DOMContentLoaded", function() {
    var profilePicture = document.getElementById("openProfile");
    var profile = document.getElementById("profile");

    profilePicture.addEventListener("click", function(e) {
        e.stopPropagation();
        openProfile();
    });

    document.body.addEventListener("click", function() {
        if (profile.style.display === "block") {
            openProfile();
        }
    });

    function openProfile() {
        if (profile.style.display == "none" || profile.style.display == "") {
            profile.style.display = "block";
            var profilePicRect = profilePicture.getBoundingClientRect();
            profile.style.top = profilePicRect.bottom + "px";
            if (window.innerWidth > 1000) {
                profile.style.left = profilePicRect.left - profile.offsetWidth + profilePicture.offsetWidth + "px";
                profile.style.transformOrigin = "top right";
            } else {
                profile.style.left = profilePicRect.left - profile.offsetWidth/2 + profilePicture.offsetWidth/2 + "px";
                profile.style.transformOrigin = "top";
            }
            profile.style.transform = "scale(1)";
        } else {
            profile.style.transform = "scale(0)";
            setTimeout(function() {
                profile.style.display = "none";
            }, 300);
        }
    }
});