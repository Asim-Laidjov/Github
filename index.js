let proyektSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
   // pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
  //  },

    navigation: {
        nextEl: ".sonra",
        prevEl: ".evvel",
      },
    
  });

 

  // bloglar 

  window.addEventListener("DOMContentLoaded",getMelumatlariGetir) 

  const bloqlarinYerleseceyiDiv = document.querySelector(".blog-right-side")
  console.log(bloqlarinYerleseceyiDiv)
  window.addEventListener("DOMContentLoaded", getMelumatlariGetir)

  async function getMelumatlariGetir(){
    const unvan = "https://jsonplaceholder.typicode.com/posts"



    try {
      const gelenCavab= await fetch(unvan)
      const melumatlar=await gelenCavab.json()

      console.table(melumatlar)

    
  
  for(let i = 0; i < melumatlar.length; i++) {
    bloqlarinYerleseceyiDiv.innerHTML+= ` <div class="blog py-3">
    <span><span id="date">April 16, 2021 </span><span id="time"> 6 mins</span></span>
    <h2>${melumatlar[i].title}</h2>
    <a href="" class="text-white">Read the article <img src="./assets/images/blog.svg" alt=""></a>
  </div> `

  }
}
 catch (err) {
  
 }
}


const swiper = new Swiper(".test-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

  },

    pagination: {
    el: ".swiper-pagination",
    clickable: true,
 },
  navigation: {
    nextEl: ".nextButton",
    prevEl: ".prevButton",
  }
});

// OOP
new Accordion('.accordion-container');
new Accordion('.accordion-container-2');

