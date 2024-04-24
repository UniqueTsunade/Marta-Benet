import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tlHeader,tlArtifactsTitle, tlArtifactsGallery, tlProducts, tlLatestProjects, tlServices; 

function animateOnLargeScreens() {

if (document.body.clientWidth > 999) {

// error handling
function animateWithGSAP(timeline, target, properties, options, method = 'to') {
  let animation;
  if (method === 'to') {
      animation = timeline.to(target, properties, options);
  } else if (method === 'from') {
      animation = timeline.from(target, properties, options);
  } else if (method === 'fromTo') {
      animation = timeline.fromTo(target, properties.from, properties.to, options);
  } else {
      throw new Error('Invalid animation method specified');
  }

  animation.eventCallback('onError', function(e) {
      console.error('GSAP animation error:', e);
  });
}


// header block animation
const headerTitleTrigger = document.querySelector(".header__title");
const headerFirstWordTrigger = document.querySelector(".header__first-word");
const headerSecondWordTrigger = document.querySelector(".header__second-word");
const headerDelimiterTrigger = document.querySelector(".header__delimiter");


if (headerTitleTrigger) {
    tlHeader = gsap.timeline({
    scrollTrigger: {
        trigger: headerTitleTrigger,
        start: "center 100px", 
        end: "+=200px",
        scrub: 2,
        pin: true,
        ease: "circ.inOut",
    },
})

  if (headerFirstWordTrigger) {
    animateWithGSAP(tlHeader, headerFirstWordTrigger, { x: -270 }, { immediateRender: false });
  } else {
    console.error("Элемент '.header__first-word' не найден в документе.");
  }

  if (headerSecondWordTrigger) {
    animateWithGSAP(tlHeader, headerSecondWordTrigger, { x: 270 }, { immediateRender: false });
  } else {
    console.error("Элемент '.header__second-word' не найден в документе.");
  }

  if (headerDelimiterTrigger) {
    animateWithGSAP(tlHeader, headerDelimiterTrigger, { opacity: 0 }, { immediateRender: false });        
  } else {
    console.error("Элемент '.header__second-word' не найден в документе.");
  }

  } else {
    console.error("Элемент '.header__delimiter' не найден в документе.");
  }

// artifacts block animation

const artifactsTitleTrigger = document.querySelector(".artifacts__title");
const artifactsGalleryTrigger = document.querySelector(".artifacts__gallery");
const artifactsPictures = document.querySelectorAll(".artifacts__picture");


if (artifactsTitleTrigger) {
    tlArtifactsTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".artifacts__title",
      start: "top +=300px",
      end: "bottom bottom",
      pin: true,
      duration: 3,
      scrub: 2,
      ease: "circ.inOut",
    }
  });

  animateWithGSAP(tlArtifactsTitle, ".artifacts__title", { x: 20, yPercent: 25 }, { immediateRender: false });         
} else {
  console.error("Элемент '.artifacts__title' не найден в документе.");
}

  

if (artifactsGalleryTrigger) {
    tlArtifactsGallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".artifacts__gallery",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse", 
    }
  });
  if (artifactsPictures.length > 0) {
  // define staggered animations with a consistent timing for the elements
  artifactsPictures.forEach((element, index) => {
    animateWithGSAP(
      tlArtifactsGallery,
      element, 
      {
        from: {opacity: 0, x: 20 },
        to: { opacity: 1, x: 0 }
      },
      { ease: "power2.out" }, 
      "fromTo",
      index * 0.2 // each element begins animation 0.2 seconds after the previous one      
    );
  });
  } else {
    console.error("Элемент '.artifacts__picture' не найден в документе.");
  }

} else {
  console.error("Элемент '.artifacts__gallery' не найден в документе.");
}






// products block animation
const productsImgLeftTrigger = document.querySelector(".products__img-left");
const productsImgRightTrigger = document.querySelector(".products__img-right");
const productsLinks = document.querySelectorAll(".products-link");

tlProducts = gsap.timeline({ defaults: { duration: 3 } });


// create an animation for the left image
if (productsImgLeftTrigger) {
const leftImageProperties = {
  from: { yPercent: 90 },
  to: { yPercent: 0, ease: "circ.inOut", repeat: -1, yoyo: true }
};

animateWithGSAP(tlProducts, productsImgLeftTrigger, leftImageProperties, {}, 'fromTo');
} else {
  console.error("Элемент '.products__img-left' не найден в документе.");
}



// create an animation for the right image
if (productsImgRightTrigger) {
const rightImageProperties = {
  from: { yPercent: -90 },
  to: { yPercent: 0, ease: "circ.inOut", repeat: -1, yoyo: true }
};

animateWithGSAP(tlProducts, productsImgRightTrigger, rightImageProperties, {}, 'fromTo');
} else {
  console.error("Элемент '.products__img-right' не найден в документе.");
}




// create animation for individual links in the list
if (productsLinks.length > 0) {
productsLinks.forEach((link) => {
  ScrollTrigger.create({
    trigger: link,
    start: "top 80%", 
    end: "bottom 20%",
    toggleActions: "play reverse play reverse", 
    onEnter: () => {
      const tlProductsLink = gsap.timeline();
      animateWithGSAP(
        tlProductsLink,
        link,
        { opacity: 0.2 },
        { duration: 1, ease: "power2.out" },
        "from"
      );
    }
  });
});
} else {
  console.error("Элемент '.products-link' не найден в документе.");
}


// latest-projects block animation
const latestProjectsTrigger = document.querySelector(".latest-projects");
const latestProjectsContentTrigger = document.querySelectorAll(".latest-projects__content");


if (latestProjectsTrigger) {
    tlLatestProjects = gsap.timeline({
    scrollTrigger: {
      trigger: latestProjectsTrigger,
      start: "top 80%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse",
    }
  });
  
  if (latestProjectsContentTrigger.length > 0) {
  latestProjectsContentTrigger.forEach((element, index) => {
    animateWithGSAP(
      tlLatestProjects, 
      element, 
      {
        from: { x: -90 },
        to: { x: 0 }
      }, 
      { duration: 1, ease: "power2.out" },
      "fromTo",
      index * 0.2 // each element begins animation 0.2 seconds after the previous one
    );
  });
  } else {
    console.error("Элемент '.latest-projects__content' не найден в документе.");
  }
} else {
  console.error("Элемент '.latest-projects' не найден в документе.");
}





// services block animation
const servicesGridTrigger = document.querySelector(".services-grid");
const containerGridTitleTrigger = document.querySelectorAll(".container-grid__title");
const containerGridDescTrigger = document.querySelectorAll(".container-grid__desc");
const servicesInfoTrigger = document.querySelector(".services_info");
const servicesBtnTrigger = document.querySelector("#services-btn")


if (servicesGridTrigger) {
    tlServices = gsap.timeline({
    scrollTrigger: {
      trigger: servicesGridTrigger,
      start: "top +=500px",
      end: "bottom +=400px",
      ease: "circ.inOut",
      toggleActions: "play reverse play reverse",
      duration: 2,
    },

  });

  if (containerGridTitleTrigger.length > 0) {
    containerGridTitleTrigger.forEach((element, index) => {
      animateWithGSAP(
        tlServices, 
        element, 
        {
          from: {x: -100},
          to: {x: 0}
        },
        { ease: "power2.out" }, 
        "fromTo",
        index * 0.2 // each element begins animation 0.2 seconds after the previous one
      );
  })
  } else {
    console.error("Элемент '.container-grid__title' не найден в документе.");
  }


  if (containerGridDescTrigger.length > 0) {
    containerGridDescTrigger.forEach((element, index) => {
      animateWithGSAP(
        tlServices, 
        element, 
        {
          from: {x: 100},
          to: {x: 0}
        },
        { ease: "power2.out" }, 
        "fromTo",
        index * 0.2 // each element begins animation 0.2 seconds after the previous one
      )
  })
  } else {
    console.error("Элемент '.container-grid__desc' не найден в документе.");
  }


  if (servicesInfoTrigger) {
    animateWithGSAP(tlServices, servicesInfoTrigger, { from: {y: 115,  opacity: 0.5}, to : {y:  0, opacity: 1} }, { ease: "circ.out" }, "fromTo");
  } else {
     console.error("Элемент '.services_info' не найден в документе.");
  }

  if (servicesBtnTrigger) {
    animateWithGSAP(tlServices, servicesBtnTrigger, { from: {scale: 1.2}, to : {scale: 1, repeat: -1, } }, { yoyo: true, ease: "power4.inOut" }, "fromTo");
  } else {
    console.error("Элемент '#services-btn' не найден в документе.");
  }

} else {
  console.error("Элемент '.services-grid' не найден в документе.");
}}}

animateOnLargeScreens();

export { tlHeader, tlArtifactsTitle, tlArtifactsGallery, tlProducts, tlLatestProjects, tlServices };

