
document.addEventListener("DOMContentLoaded", function() {
    var profilePicture = document.getElementById("openProfile");
    var profile = document.getElementById("profile");

    profilePicture.addEventListener("click", function() {
        if (profile.style.display == "none" || profile.style.display == "") {
            profile.style.display = "block";
            var profilePicRect = profilePicture.getBoundingClientRect();
            profile.style.top = profilePicRect.bottom + "px";
            profile.style.left = profilePicRect.left - profile.offsetWidth + profilePicture.offsetWidth + "px";
        } else {
            profile.style.display = "none";
        }
    });
});