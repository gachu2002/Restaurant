const createHome = function() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    home.classList.add("active");
    
    const banner = document.createElement("div");
    banner.classList.add("banner");

    const intro = document.createElement("div");
    intro.classList.add("intro");
    const introHeading = document.createElement("h2");
    introHeading.textContent = "Spaghetti de Paris ~ The best in a while";
    const introText1 = document.createElement("p");
    introText1.textContent = "At Spaghetti de Paris, we’re dedicated to bringing you the finest Italian-inspired dining experience with a touch of Parisian elegance.";
    const introText2 = document.createElement("p");
    introText2.textContent = "1983, our passion for fresh ingredients, authentic recipes, and exceptional flavors has made us a cherished spot for pasta lovers.";
    const introText3 = document.createElement("p");
    introText3.textContent = "Join us and savor the tradition that has made Spaghetti de Paris a staple in fine dining for over four decades.";

    intro.appendChild(introHeading);
    intro.appendChild(introText1);
    intro.appendChild(introText2);
    intro.appendChild(introText3);

    home.appendChild(banner);
    home.appendChild(intro);

    return home;
}

export {createHome};