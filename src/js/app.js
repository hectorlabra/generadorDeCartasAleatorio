import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Social media links
  let socialMediaLinks = "";
  if (variables.twitter)
    socialMediaLinks += `<li><a href="https://twitter.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>`;
  if (variables.github)
    socialMediaLinks += `<li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>`;
  if (variables.linkedin)
    socialMediaLinks += `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>`;
  if (variables.instagram)
    socialMediaLinks += `<li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>`;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
                ${cover}
              <img src="${variables.avatarURL}" class="photo" />
              <h1>${variables.name || ""} ${variables.lastName || ""}</h1>
              <h2>${variables.role || ""}</h2>
              <h3>${variables.city || ""}, ${variables.country || ""}</h3>
              <ul class="position-${variables.socialMediaPosition || "right"}">
                ${socialMediaLinks}
              </ul>
            </div>`;
}

// Initial render with default variables
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL:
      "https://storage.googleapis.com/breathecode-asset-images/3c15f2d5e8b14c8b5bc801cf99a02f1c88a450303a550a875e395b9ae099fa54.jpg",
    socialMediaPosition: "right",
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
};

document.querySelectorAll(".picker").forEach(function(elm) {
  elm.addEventListener("change", function(e) {
    // <- add a listener to every input
    const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
    let values = {};
    values[attribute] =
      this.value == "" || this.value == "null"
        ? null
        : this.value == "true"
        ? true
        : this.value == "false"
        ? false
        : this.value;
    render(Object.assign(window.variables, values)); // render again the card with new values
  });
});
