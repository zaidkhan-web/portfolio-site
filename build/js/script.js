// navbar
let toggleBtn = document.getElementById("humbargar");
let crossBtn = document.getElementById("cross");
let navBar = document.getElementById("nav-bar");

toggleBtn.addEventListener("click", () => {
  navBar.classList.add("left-1");
});

crossBtn.addEventListener("click", () => {
  navBar.classList.remove("left-1");
  navBar.style.height = "100vh";
});

// Header JS
let header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  let scrolly = window.scrollY;
  let pixes = "60";
  if (scrolly > pixes) {
    header.style.width = "100%";
    header.style.backgroundColor = "rgba(33,36,40,0.6)";
    header.style.boxShadow = "0px 3px 6px 1px rgba(0,0,0,0.4)";
    header.style.backdropFilter = "blur(8px)";
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.zIndex = "10";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.position = "static";
    header.style.boxShadow = "none";
  }
});

// animated text JS
var typed = new Typed("#text-animated", {
  strings: ["Flutter Developer", "Android Developer", "iOS Developer", "UI/UX Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});

// Professional Skills
let education = document.getElementById("education");
let skils = document.getElementById("professtional-skills");
let experience = document.getElementById("experience");
let interview = document.getElementById("interview");
let view = document.getElementById("view");
let list = document.querySelectorAll(".resume-bts li");

list.forEach((e) => {
  e.addEventListener("click", () => {
    list.forEach((item) => {
      item.classList.remove("shadow-primary-shadow");
      item.classList.remove("text-subtitle-red");
    });
    e.classList.add("shadow-primary-shadow");
    e.classList.add("text-subtitle-red");
  });
});

education.addEventListener("click", () => {
  view.innerHTML = `
      <div class="contents-boxs grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- left box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            <!-- right box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            </div>
    `;
});

skils.addEventListener("click", () => {
  view.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        <div class="design-skill">
            <div class="text-sm text-[rgb(248,20,48)] uppercase">Features</div>
            <h2>Design Skill</h2>
            <div class="skills-line">
                <!-- photoshop -->
                <div class="photoshop my-5">
                    <p class="my-3">PHOTOSHOP</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[80%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['80%'] after:absolute after:right-0 after:-top-6 relative animate-linear-photoshop"></div>
     </div>
                </div>
                <!-- figma -->
                <div class="photoshop my-5">
                    <p class="my-3">FIGMA</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[100%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl overflow-visible after:content-['100%'] after:absolute after:right-0 after:-top-6 relative animate-linear-figma"></div>
     </div>
                </div>
                <!-- adobe illustrator -->
                <div class="photoshop my-5">
                    <p class="my-3">ADOBE ILLUSTRATOR</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[85%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['85%'] after:absolute after:right-0 after:-top-6 relative animate-linear-adobe"></div>
     </div>
                </div>
                <!-- design -->
                <div class="photoshop my-5">
                    <p class="my-3">DESIGN</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[90%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['90%'] after:absolute after:right-0 after:-top-6 relative animate-linear-design"></div>
     </div>
                </div>
            </div>
        </div>
        <!-- right -->
        <div class="design-skill">
            <div class="text-sm text-[rgb(248,20,48)] uppercase">Features</div>
            <h2>Design Skill</h2>
            <div class="skills-line">
                <!-- photoshop -->
                <div class="photoshop my-5">
                    <p class="my-3">PHOTOSHOP</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[80%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['80%'] after:absolute after:right-0 after:-top-6 relative animate-linear-photoshop"></div>
     </div>
                </div>
                <!-- figma -->
                <div class="photoshop my-5">
                    <p class="my-3">FIGMA</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[100%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl overflow-visible after:content-['100%'] after:absolute after:right-0 after:-top-6 relative animate-linear-figma"></div>
     </div>
                </div>
                <!-- adobe illustrator -->
                <div class="photoshop my-5">
                    <p class="my-3">ADOBE ILLUSTRATOR</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[85%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['85%'] after:absolute after:right-0 after:-top-6 relative animate-linear-adobe"></div>
     </div>
                </div>
                <!-- design -->
                <div class="photoshop my-5">
                    <p class="my-3">DESIGN</p>
                     <!-- skill slider -->
     <div class="h-2 bg-white rounded-xl">
        <div class="h-full w-[90%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['90%'] after:absolute after:right-0 after:-top-6 relative animate-linear-design"></div>
     </div>
                </div>
            </div>
        </div>
     </div>
    `;
});

experience.addEventListener("click", () => {
  view.innerHTML = `
      <div class="contents-boxs grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- left box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            <!-- right box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            </div>
    `;
});

interview.addEventListener("click", () => {
  view.innerHTML = `
      <div class="contents-boxs grid grid-cols-1 lg:grid-cols-2 gap-10">
                <!-- left box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            <!-- right box -->
                <div class="content-box text-left">
                    <div>
                    <div class="text-sm text-subtitle-red uppercase">2007 - 2010</div>
                    <h2 class="my-3">Education Quality</h2>
                </div>
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-8 mt-16">
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                    <div class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20">
                        <div class="flex justify-between items-center">
                            <div>
                                <h3 class="text-white">Personal Portfolio April Fools</h3>
                                <div class="text-sm">University of DVI (1997 - 2001)</div>
                            </div>
                            <div class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center">
                               <span> 4.3/5 </span>
                            </div>
                        </div>
                         <!-- line -->
      <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                        <p class="">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                    </div>
                </div>
            </div>
            </div>
    `;
});

// Clients Section
let clientList = document.querySelectorAll("#client-list li");
clientList.forEach((e) => {
  e.addEventListener("click", () => {
    clientList.forEach((item) => {
      item.classList.remove("shadow-primary-shadow");
      item.classList.remove("text-subtitle-red");
      item.classList.add("font-semibold");
    });
    e.classList.add("shadow-primary-shadow");
    e.classList.add("text-subtitle-red");
    e.classList.remove("font-semibold");
  });
});

// AOS JS Library
AOS.init();

// Swiper JS
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
