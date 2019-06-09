const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.src = "img/header-img.png"

let midImg = document.getElementById("middle-img")
midImg.src = "img/mid-page-accent.jpg"

let navigation = document.getElementsByTagName("a")

for(let i = 0; i < navigation.length; i++){
  navigation[i].textContent = (siteContent.nav[`nav-item-${i+1}`])
  navigation[i].style.color = "green"
}

let ctaText = document.querySelector(".cta-text h1")
ctaText.textContent = siteContent.cta.h1

let ctaBtn = document.querySelector(".cta-text button")
ctaBtn.textContent = siteContent.cta.button

let headers = document.querySelectorAll(".text-content h4")
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent["main-content"]["about-h4"]
headers[2].textContent = siteContent["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent["main-content"]["vision-h4"]

let textContent = document.querySelectorAll(".text-content p")
textContent[0].textContent = siteContent["main-content"]["features-content"]
textContent[1].textContent = siteContent["main-content"]["about-content"]
textContent[2].textContent = siteContent["main-content"]["services-content"]
textContent[3].textContent = siteContent["main-content"]["product-content"]
textContent[4].textContent = siteContent["main-content"]["vision-content"]

let contact = document.querySelectorAll(".contact h4, .contact p")
contact[0].textContent = siteContent["contact"]["contact-h4"]
contact[1].textContent = siteContent["contact"]["address"]
contact[2].textContent = siteContent["contact"]["phone"]
contact[3].textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]

let newImg = document.createElement("img")
newImg.src = "https://i.kym-cdn.com/entries/icons/mobile/000/025/923/1504551931722.jpg"
newImg.style.height = "250px"
ctaText.prepend(newImg)

let navContainer = document.querySelector("nav")

let newNav = document.createElement("img")
newNav.src = "https://orig00.deviantart.net/cca9/f/2018/192/d/0/one_very_sad_cat_by_heatherandstuff-dcgx2q4.png"
newNav.style.height = "40px"
navContainer.prepend(newNav)

let newNav2 = document.createElement("img")
newNav2.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/384/535/295.jpg"
newNav2.style.height = "40px"
navContainer.appendChild(newNav2)