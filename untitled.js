/*
let demo1= document.querySelector(".service1")
let demo2= document.querySelector(".service2")
let demo3= document.querySelector(".service3")
let demo4= document.querySelector(".service4")
let demo5= document.querySelector(".service5")
let demo6= document.querySelector(".service6")

let card1 = document.querySelector(".card-1")
let card2 = document.querySelector(".card-2")
let card3 = document.querySelector(".card-3")
let card4 = document.querySelector(".card-4")
let card5 = document.querySelector(".card-5")
let card6 = document.querySelector(".card-6")

demo1.addEventListener("click", demo1Function);

function demo1Function() {
  card1.style.display="block"
}

demo2.addEventListener("click", demo2Function);

function demo2Function() {
  card2.style.display="block"
}
demo3.addEventListener("click", demo3Function);

function demo3Function() {
  card3.style.display="block"
}
demo4.addEventListener("click", demo4Function);

function demo4Function() {
  card4.style.display="block"
}
demo5.addEventListener("click", demo5Function);

function demo5Function() {
  card5.style.display="block"
}
demo6.addEventListener("click", demo6Function);

function demo6Function() {
  card6.style.display="block"
}*/

/*
// Select all elements with class "demo"
const demos = document.querySelectorAll(".demo");

// Select all elements with class "card" and the corresponding index
const cards = Array.from({ length: demos.length }, (_, index) =>
  document.querySelector(`.card-${index + 1}`)
);

// Add event listeners to all demos
demos.forEach((demo, index) => {
  demo.addEventListener("click", function () {
    // Hide all cards
    cards.forEach(card => (card.style.display = "none"));

    // Display the corresponding card
    cards[index].style.display = "block";
  });
});
*/
/*
// Select all elements with class "demo"
const demos = document.querySelectorAll(".demo");
const card1 = document.querySelector(".card-1")


// Select all elements with class "card" and the corresponding index
const cards = Array.from({ length: demos.length }, (_, index) =>
  document.querySelector(`.card-${index + 1}`)
);

let currentCardIndex = 1; // Track the currently displayed card

// Add event listeners to all demos
demos.forEach((demo, index) => {
  demo.addEventListener("click", function () {
    // Hide the currently displayed card
    cards[currentCardIndex].style.display = "none";

    // Update the currently displayed card index
    currentCardIndex = index;

    // Display the corresponding card
    cards[index].style.display = "block";
  });
});
*/

/*
// Select all elements with class "demo"
const demos = document.querySelectorAll(".demo");

// Select all elements with class "card" and the corresponding index
const cards = Array.from({ length: demos.length }, (_, index) =>
  document.querySelector(`.card-${index + 1}`)
);

let currentCardIndex = 0; // Track the currently displayed card

// Display the default card
cards[currentCardIndex].style.display = "block";

// Add event listeners to all demos
demos.forEach((demo, index) => {
  demo.addEventListener("click", function () {
    // Hide the currently displayed card
    cards[currentCardIndex].style.display = "none";

    // Update the currently displayed card index
    currentCardIndex = index;

    // Display the corresponding card
    cards[index].style.display = "block";
  });
});


// Select all elements with class "demo"
const demos = document.querySelectorAll(".demo");
const defaultCard =document.querySelector(".default")

// Select all elements with class "card" and the corresponding index
const cards = Array.from({ length: demos.length }, (_, index) =>
  document.querySelector(`.card-${index + 1}`)
);

let currentCardIndex = 0; // Track the currently displayed card

// Display the default card
cards[currentCardIndex].style.display = "block";

// Add event listeners to all demos
demos.forEach((demo, index) => {
  demo.addEventListener("click", function () {
    // Hide the default card if it's not the one being clicked
    if (currentCardIndex !== index) {
      cards[currentCardIndex].style.display = "none";
    }

    // Update the currently displayed card index
    currentCardIndex = index;

    // Display the corresponding card
    cards[index].style.display = "block";
    defaultCard.style.display="none"
  });

});
*/

// Select all elements with class "demo"
const demos = document.querySelectorAll(".demo");

// Select all elements with class "card" and the corresponding index
const cards = Array.from({ length: demos.length }, (_, index) =>
  document.querySelector(`.card-${index + 1}`)
);

let currentCardIndex = null; // Track the currently displayed card, initially set to null

// Add event listeners to all demos
demos.forEach((demo, index) => {
  demo.addEventListener("click", function () {
    // Hide the currently displayed card if there is one
    if (currentCardIndex !== null) {
      cards[currentCardIndex].style.display = "none";
    }

    // Update the currently displayed card index
    currentCardIndex = index;

    // Display the corresponding card
    cards[index].style.display = "block";
  });
});
/**
 * <div class="container mt-5">
        <h2 class="text-center mb-4 fw-bold fs-3 i-green">Our Services</h2>
        <p class="text-center lato">
          I-World Networks with its resilient, nationwide IP-MPLS, Metro Fiber and Wireless Infrastructure in major Nigerian cities,  enable us to provide  suites of flexible, scalable and high-quality communications and cloud solutions that enable business growth
        </p>
        <div class="container mt-5">
            <div class="row align-items-stretch">
                <!-- Column 1 -->
                <div class="col-md-4">
                    <div class="card d-flex flex-column">
                        <img src="./Assets/icons/home-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Home Internet</h5>
                            <p class="card-text lato text-end">Our Home Internet plans are premium home internet plan with high-speed, unlimited data, and reliable connectivity, along with additional benefits such as a free first month and 24/7 customer support.</p>
                            <a href="./internet_for_home.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
                
                <!-- Column 2 -->
                <div class="col-md-4">
                    <div class="card d-flex flex-column">
                        <img src="./Assets/icons/business-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Small Business Internet</h5>
                            <p class="card-text lato text-end">Small business internet are dedicated internet services tailored to meet the connectivity needs of small businesses. These plans offer reliable and high-speed internet access, essential for various online operations, communication, and data-related tasks.</p>
                            <a href="./Internet_for_business.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
                
                <!-- Column 3 -->
                <div class="col-md-4">
                    <div class="card d-flex flex-column">
                        <img src="./Assets/icons/network-enterprise-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Enterprise Internet</h5>
                            <p class="card-text lato text-end">
                                Elevate your business connectivity to new heights with I-World Enterprise Internet. Our robust and reliable enterprise-grade solutions are designed to meet the diverse and demanding connectivity needs of modern businesses.
                            </p>
                            <a href="./enterprise_internet.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row align-items-stretch">
                <!-- Column 4 -->
                <div class="col-md-4">
                    <div class="card d-flex flex-column">
                        <img src="./Assets/icons/network.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Managed Service Provider</h5>
                            <p class="card-text lato text-end">
                                I-World Networks is here to revolutionize the way you handle your IT infrastructure. As your trusted Managed Service Provider, we offer top-notch IT solutions designed to optimize your operations, enhance security, and minimize costs. With our expertise, you can shift your focus to what truly matters - the growth and success of your business.
                            </p>
                            <a href="./smb_msp.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
        
                <!-- Column 5 -->
                <div class="col-md-4">
                    <div class="card d-flex flex-column">
                        <img src="./Assets/icons/service-fabric.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Multi-Label Protocol Switching (MPLS)</h5>
                            <p class="card-text lato text-end">
                                I-World Networks introduces a cutting-edge solution with Multi-Label Protocol Switching (MLPS) to revolutionize data routing for businesses and allows for the simultaneous handling of multiple data labels, optimizing network efficiency and enhancing overall performance.
                            </p>
                            <a href="./mpls.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
        
                <!-- Column 6 -->
                <div class="col-md-4">
                    <div class="card text-black d-flex flex-column">
                        <img src="./Assets/icons/google-cloud.svg" alt="" class="card-img-top service-icon mt-2 mx-5 px-2">
                        <div class="card-body px-5 flex-grow-1">
                            <h5 class="card-title text-end">Google Cloud Services</h5>
                            <p class="card-text lato text-end">
                                At I-world Networks, we are Making cloud-first tech choices to benefit the planet, your people, and your profitability to give you a competitive edge — now and into the future.
                            </p>
                            <a href="./Google_Workspace.html" class="btn btn-success">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- <div class="scrollable-container">
              <div class="card">
                  <img src="./Assets/icons/home-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                <div class="card-body px-5">
                  <h5 class="card-title text-end">Home Internet</h5>
                  <p class="card-text lato text-end">Our Home Internet plans are premium home internet plan with high-speed, unlimited data, and reliable connectivity, along with additional benefits such as a free first month and 24/7 customer support.</p>
                  <a href="./internet_for_home.html" class="btn btn-success">Subscribe</a>
                </div>
              </div>
              
              <div class="card">
                  <img src="./Assets/icons/business-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                <div class="card-body px-5">
                  <h5 class="card-title text-end">Small Business Internet</h5>
                  <p class="card-text lato text-end">Small business internet are dedicated internet services tailored to meet the connectivity needs of small businesses. These plans offer reliable and high-speed internet access, essential for various online operations, communication, and data-related tasks..</p>
                  <a href="./Internet_for_business.html" class="btn btn-success">Subscribe</a>
                </div>
              </div>
              
              <div class="card">
                  <img src="./Assets/icons/network-enterprise-icon.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                <div class="card-body px-5">
                  <h5 class="card-title text-end">Enterprise Internet</h5>
                  <p class="card-text lato text-end">
                      Elevate your business connectivity to new heights with I-World Enterprise Internet. Our robust and reliable enterprise-grade solutions are designed to meet the diverse and demanding connectivity needs of modern businesses.
                  </p>
                  <a href="./enterprise_internet.html" class="btn btn-success">Subscribe</a>
                </div>
              </div>
              
              <div class="card">
                  <img src="./Assets/icons/network.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                <div class="card-body px-5">
                  <h5 class="card-title text-end">Managed Service Provider</h5>
                  <p class="card-text lato text-end">
                      I-World Networks is here to revolutionize the way you handle your IT infrastructure. As your trusted Managed Service Provider, we offer top-notch IT solutions designed to optimize your operations, enhance security, and minimize costs. With our expertise, you can shift your focus to what truly matters - the growth and success of your business.
                  </p>
                  <a href="./smb_msp.html" class="btn btn-success">Subscribe</a>
                </div>
              </div>
          
                <div class="card">
                      <img src="./Assets/icons/service-fabric.svg" alt="" class="service-icon mt-2 mx-5 px-2 card-img-top">
                      <div class="card-body px-5">
                          <!-- <img src="./Assets/icons/mits-icon.svg" alt="" class="card-img-top">
                        <h5 class="card-title text-end">Multi-Label Protocol Switching (MPLS)</h5>
                        <p class="card-text lato text-end">
                          I-World Networks introduces a cutting-edge solution with Multi-Label Protocol Switching (MLPS) to revolutionize data routing for businesses and allows for the simultaneous handling of multiple data labels, optimizing network efficiency and enhancing overall performance.
                      </p>
                      <a href="./mpls.html" class="btn btn-success">Subscribe</a>
                      </div>
                </div>
          
              <div class="card text-black">
                  <img src="./Assets/icons/google-cloud.svg" alt="" class="card-img-top service-icon mt-2 mx-5 px-2">
                  <div class="card-body px-5">
                    <h5 class="card-title text-end">Google Cloud Services</h5>
                    <p class="card-text lato text-end">
                          At I-world Networks, we are Making   cloud-first tech choices to benefit the planet, your people, and your profitability to give you a competitive edge — now and into the future
                      </p>
                      <a href="./Google_Workspace.html" class="btn btn-success">Subscribe</a>
                  </div>
            </div>    
            </div> -->
          </div>
        </div>
 * 
 * 
 */