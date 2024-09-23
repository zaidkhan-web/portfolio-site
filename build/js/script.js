// AOS Library
AOS.init();

// navbar
let toggleBtn = document.getElementById("humbargar");
let crossBtn = document.getElementById("cross");
let navBar = document.getElementById("nav-bar");

toggleBtn.addEventListener("click", () => {
  navBar.classList.add("left-1");
});

crossBtn.addEventListener("click", () => {
  navBar.classList.remove("left-1");
});

let navItems = document.querySelectorAll('#nav-items li')
navItems.forEach((e)=>{
  e.addEventListener('click', ()=>{
    navBar.classList.remove('left-1')
  })
})

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
    header.style.backdropFilter = "blur(0px)";
  }
});

// animated text JS
var typed = new Typed("#text-animated", {
  strings: [
    "Flutter Developer",
    "Android Developer",
    "iOS Developer",
    "UI/UX Designer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});

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

// Experience
let exper = document.getElementById("exper");
let myDate = new Date();
let year = myDate.getFullYear();
exper.innerHTML = `${year - 2022}+`;


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
       <div class="contents-boxs grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
              <!-- left box -->
              <div class="content-box text-left">
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-3 lg:pl-8 mt-16">
                  <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                    <div class="flex justify-between items-center">
                      <div>
                        <h3 class="text-white">BS Computer Science</h3>
                        <div class="text-sm">
                          University of Malakand (2007 - 2011)
                        </div>
                      </div>
                      <div
                        class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center"
                      >
                        <span> 76% </span>
                      </div>
                    </div>
                    <!-- line -->
                    <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                    <p class="">
                      Completed a 4-year degree, gaining a strong foundation in
                      the fundamentals of computer science, including
                      programming, data structures, algorithms, and computer
                      systems. This education laid the groundwork for advanced
                      learning and a career in software development.
                    </p>
                  </div>
                  <!-- <div
                    class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20"
                  >
                    <div class="flex justify-between items-center">
                      <div>
                        <h3 class="text-white">
                          Personal Portfolio April Fools
                        </h3>
                        <div class="text-sm">
                          University of DVI (1997 - 2001)
                        </div>
                      </div>
                      <div
                        class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center"
                      >
                        <span> 4.3/5 </span>
                      </div>
                    </div>
                    
                    <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                    <p class="">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div> -->
                </div>
              </div>
              <!-- right box -->
              <div class="content-box text-left">
                <div class="border-l-[5px] border-[rgb(23,25,28)] pl-3 lg:pl-8 mt-16">
                  <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
                    <div class="flex justify-between items-center">
                      <div>
                        <h3 class="text-white">MS Computer Science</h3>
                        <div class="text-sm">
                          Virtual University of Pakistan (2019)
                        </div>
                      </div>
                      <div
                        class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center"
                      >
                        <span> 80.33% </span>
                      </div>
                    </div>
                    <!-- line -->
                    <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                    <p class="">
                      Earned a Master's degree with a focus on advanced topics
                      in computer science, including software engineering,
                      machine learning, and system architecture. This program
                      deepened my expertise and further refined my skills in
                      developing scalable, efficient software solutions.
                    </p>
                  </div>
                  <!-- <div
                    class="card shadow-primary-shadow px-5 py-12 rounded-xl mt-20"
                  >
                    <div class="flex justify-between items-center">
                      <div>
                        <h3 class="text-white">
                          Personal Portfolio April Fools
                        </h3>
                        <div class="text-sm">
                          University of DVI (1997 - 2001)
                        </div>
                      </div>
                      <div
                        class="shadow-primary-shadow text-subtitle-red px-5 h-9 rounded-lg flex justify-center items-center"
                      >
                        <span> 4.3/5 </span>
                      </div>
                    </div>
                    
                    <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
                    <p class="">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div> -->
                </div>
              </div>
            </div>
    `;
});

skils.addEventListener("click", () => {
  view.innerHTML = `
   <div class="grid place-items-center">
<div class="w-full lg:w-1/2">
  <div class="design-skill">
      <div class="skills-line">
          <!-- Effective Communication -->
          <div class="photoshop my-5">
              <p class="my-3">Effective Communication</p>
               <!-- skill slider -->
<div class="h-2 bg-white rounded-xl">
  <div class="h-full w-[100%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['100%'] after:absolute after:right-0 after:-top-6 relative animate-linear-photoshop"></div>
</div>
          </div>
          <!-- Flutter and Dart  -->
          <div class="photoshop my-5">
              <p class="my-3">Flutter and Dart </p>
               <!-- skill slider -->
<div class="h-2 bg-white rounded-xl">
  <div class="h-full w-[95%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl overflow-visible after:content-['95%'] after:absolute after:right-0 after:-top-6 relative animate-linear-figma"></div>
</div>
          </div>
          <!-- UX/UI Designing  -->
          <div class="photoshop my-5">
              <p class="my-3">UX/UI Designing </p>
               <!-- skill slider -->
<div class="h-2 bg-white rounded-xl">
  <div class="h-full w-[90%] bg-gradient-to-r from-red-600 to-lime-500 rounded-xl after:content-['90%'] after:absolute after:right-0 after:-top-6 relative animate-linear-adobe"></div>
</div>
          </div>
      </div>
  </div>
</div>
</div>
    `;
});

experience.addEventListener("click", () => {
  view.innerHTML = `
      <div class="contents-boxs grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
  <!-- left box -->
  <div class="content-box text-left">
    <div class="border-l-[5px] border-[rgb(23,25,28)] pl-3 lg:pl-8 mt-16">
      <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-white">Junior Flutter Developer</h3>
            <div class="text-sm">
              CircleX Pvt Ltd
            </div>
          </div>
          <div
            class="shadow-primary-shadow text-subtitle-red lg:px-5 h-9 text-xs lg:text-lg rounded-lg text-center"
          >
             Jan 2022 - May 2024 
          </div>
        </div>
        <!-- line -->
        <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
        <p class="">
          Worked on various Flutter projects, solving different challenges. Worked on apps like gaming, fitness, quotes, islamic prayer times and other proprietary apps for a large company based in Australia.
        </p>
      </div>
    </div>
  </div>
  <!-- right box -->
  <div class="content-box text-left">
    <div class="border-l-[5px] border-[rgb(23,25,28)] pl-3 lg:pl-8 mt-16">
      <div class="card shadow-primary-shadow px-5 py-12 rounded-xl">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-white">Flutter Developer</h3>
            <div class="text-sm">
              Trellis Digital Agency
            </div>
          </div>
          <div
            class="shadow-primary-shadow text-subtitle-red lg:px-5 h-9 text-xs lg:text-lg rounded-lg text-center"
          >
             Jun 2024 - Till present 
          </div>
        </div>
        <!-- line -->
        <div class="line w-full h-[1px] bg-black mt-14 mb-6"></div>
        <p class="">
         Currently working on multiple flutter projects to mention a few: Fast Delivery Service, a trusted delivery service in the town. CV Builder App, which will allow layman users to build state of the art CVs at the tip of their fingers.
        </p>
      </div>
    </div>
  </div>
</div>
    `;
});

// Pricing Section
let pricingList = document.querySelectorAll(".pricing-bts li");

pricingList.forEach((e) => {
  e.addEventListener("click", () => {
    pricingList.forEach((item) => {
      item.classList.remove("shadow-primary-shadow");
      item.classList.remove("text-subtitle-red");
    });
    e.classList.add("shadow-primary-shadow");
    e.classList.add("text-subtitle-red");
  });
});

let pricing = document.getElementById('pricing-card')
let basic = document.getElementById('basic')
let standard = document.getElementById('standard')
let premium = document.getElementById('premium')

basic.addEventListener('click', ()=>{
  pricing.innerHTML = `
     <!-- Pricing Head -->
              <div
                class="pricing-head flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center"
              >
                <div class="left">
                  <h3 class="font-bold text-white">Basic</h3>
                </div>
                <div class="right">
                  <div
                    class="bg shadow-primary-shadow p-4 w-40 lg:w-auto rounded-xl"
                  >
                    <h2 class="text-subtitle-red">$1053</h2>
                  </div>
                </div>
              </div>
              <!-- Pricing Body -->
              <div class="pricing-body">
                <p class="pt-10 w-[90%]">
                  Small scale apps with 2-4 screens.
                </p>
                <div
                class="time-line py-3 text-white flex gap-4 flex-col lg:flex-row"
              >
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>14-day delivery</span>
                </div>
                <div class="single-cmt flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-activity"
                  >
                    <polyline
                      points="22 12 18 12 15 21 9 3 6 12 2 12"
                    ></polyline>
                  </svg>
                  <span>1 Revision</span>
                </div>
              </div>
                <!-- Pricing List -->
                <div
                  class="pricing-list flex flex-col lg:flex-row lg:justify-between gap-2"
                >
                  <!-- left area -->
                  <div class="left-area flex flex-col gap-2">
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Function Android app</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Functional IOS App</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-gray-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App Submission</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-gray-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App icon</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Splash screen</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-gray-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Ad network integration</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Source code</p>
                    </div>
                  </div>
                
                </div>
                <!-- Pricing Footer -->
                <div class="pricing-footer group text-center mt-10 lg:mt-20 hover- relative hover:-translate-y-1 duration-300">
                  <a
                    class="block shadow-primary-shadow w-full py-6 rounded-xl uppercase text-subtitle-red"
                    href="#"
                    >Continue</a
                  >
                  <svg class="group-hover:opacity-100 opacity-0 duration-300 absolute right-5 top-6" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#FF014F"></path> </g></svg>
                 
                </div>
              </div>
  `
})

standard.addEventListener('click', () => {
  pricing.innerHTML = `
     <!-- Pricing Head -->
              <div
                class="pricing-head flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center"
              >
                <div class="left">
                  <h3 class="font-bold text-white">Standard</h3>
                </div>
                <div class="right">
                  <div
                    class="bg shadow-primary-shadow p-4 w-40 lg:w-auto rounded-xl"
                  >
                    <h2 class="text-subtitle-red">$4212</h2>
                  </div>
                </div>
              </div>
              <!-- Pricing Body -->
              <div class="pricing-body">
                <p class="pt-10 w-[90%]">
                  Medium scale apps with 6-8 screens with Authentication, Firebase Integration and Analytics.
                </p>
                <div
                class="time-line py-3 text-white flex gap-4 flex-col lg:flex-row"
              >
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>21-day delivery</span>
                </div>
                <div class="single-cmt flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-activity"
                  >
                    <polyline
                      points="22 12 18 12 15 21 9 3 6 12 2 12"
                    ></polyline>
                  </svg>
                  <span>2 Revisions</span>
                </div>
              </div>
                <!-- Pricing List -->
                <div
                  class="pricing-list flex flex-col lg:flex-row lg:justify-between gap-2"
                >
                  <!-- left area -->
                  <div class="left-area flex flex-col gap-2">
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Function Android app</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Functional IOS App</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App Submission</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-gray-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App icon</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Splash screen</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Ad network integration</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Source code</p>
                    </div>
                  </div>
                
                </div>
                <!-- Pricing Footer -->
                <div class="pricing-footer group text-center mt-10 lg:mt-20 hover- relative hover:-translate-y-1 duration-300">
                  <a
                    class="block shadow-primary-shadow w-full py-6 rounded-xl uppercase text-subtitle-red"
                    href="#"
                    >Continue</a
                  >
                  <svg class="group-hover:opacity-100 opacity-0 duration-300 absolute right-5 top-6" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#FF014F"></path> </g></svg>
                 
                </div>
              </div>
  `
})

premium.addEventListener('click', () => {
  pricing.innerHTML = `
     <!-- Pricing Head -->
              <div
                class="pricing-head flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between lg:items-center"
              >
                <div class="left">
                  <h3 class="font-bold text-white">Premium</h3>
                </div>
                <div class="right">
                  <div
                    class="bg shadow-primary-shadow p-4 w-40 lg:w-auto rounded-xl"
                  >
                    <h2 class="text-subtitle-red">$7372</h2>
                  </div>
                </div>
              </div>
              <!-- Pricing Body -->
              <div class="pricing-body">
                <p class="pt-10 w-[90%]">
                  Large scale scalable apps with payment integration, firebase integration, analytics & more.
                </p>
                <div
                class="time-line py-3 text-white flex gap-4 flex-col lg:flex-row"
              >
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-clock"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>30-day delivery</span>
                </div>
                <div class="single-cmt flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-activity"
                  >
                    <polyline
                      points="22 12 18 12 15 21 9 3 6 12 2 12"
                    ></polyline>
                  </svg>
                  <span>3 Revisions</span>
                </div>
              </div>
                <!-- Pricing List -->
                <div
                  class="pricing-list flex flex-col lg:flex-row lg:justify-between gap-2"
                >
                  <!-- left area -->
                  <div class="left-area flex flex-col gap-2">
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Function Android app</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Functional IOS App</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App Submission</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>App icon</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Splash screen</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Ad network integration</p>
                    </div>
                    <div class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-check text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p>Source code</p>
                    </div>
                  </div>
                
                </div>
                <!-- Pricing Footer -->
                <div class="pricing-footer group text-center mt-10 lg:mt-20 hover- relative hover:-translate-y-1 duration-300">
                  <a
                    class="block shadow-primary-shadow w-full py-6 rounded-xl uppercase text-subtitle-red"
                    href="#"
                    >Continue</a
                  >
                  <svg class="group-hover:opacity-100 opacity-0 duration-300 absolute right-5 top-6" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#FF014F"></path> </g></svg>
                 
                </div>
              </div>
  `
})



// Form Section
let form = document.querySelector('form')
let name = document.getElementById('name')
let number = document.getElementById('number')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let msg = document.getElementById('msg')

function sendEmail(){

  const bodyMessage = `Name: ${name.value} <br> Phone Number: ${number.value} <br> Email: ${email.value} <br> Message: ${msg.value}`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "zaidkhan545.kz@gmail.com",
    Password : "BBC489E601A35B5CE3B3E61F01E82247E2E5",
    To : 'zaidkhan545.kz@gmail.com',
    From : 'zaidkhan545.kz@gmail.com',
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {if (message == 'OK'){
    Swal.fire({
      title: "Success!",
      text: "Message Sent Successfully!",
      icon: "success"
    });
  }
  else{
    Swal.fire({
      title: "Oops...!",
      text: "Something went wrong!",
      icon: "error"
    });
  }
}
);
}
form.addEventListener('submit', (e)=>{
  e.preventDefault()

  sendEmail()
})