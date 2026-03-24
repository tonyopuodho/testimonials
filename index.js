const testimonialElement = document.querySelector(".testimonials")
const dotElement = document.querySelector(".dot")
const nextButton = document.querySelector(".nextBtn")
const prevButton = document.querySelector(".prevBtn")

const testimonials = [
    {
        id:1,
        name:"John Doe",
        img:"",
        testimonial:"My stay at the hotel was absolutely wonderful. The rooms were spotless, the staff was incredibly friendly, and the service exceeded my expectations. I will definitely be coming back!"
    },{
        id:2,
        name:"Angelina",
        img:"",
        testimonial:"This hotel offers the perfect blend of comfort and luxury. The beds were so comfortable, and the amenities were top-notch. It truly felt like a home away from home"
    },
    {
        id:3,
        name:"Mercy Andrea",
        img:"",
        testimonial:"I was impressed by the attention to detail and professionalism of the staff. The food was delicious, and the atmosphere was relaxing. Highly recommend for both business and leisure stays."
    },{
        id:4,
        name:"Tony Ochieng",
        img:"",
        testimonial:"From check-in to check-out, everything was seamless. The location is perfect, the views are stunning, and the overall experience was unforgettable. Five-star service all the way!"
    },
]

let current = 0

//display testimonials
function loadTestimonial(current){
    const name = testimonials[current].name
    const test = testimonials[current].testimonial
    testimonialElement.innerHTML = ` 
      <h2>${name}</h2>
      <p>${test}</p>
    `
}

loadTestimonial(current)

nextButton.addEventListener('click',() => {
    if (0 < testimonials.length - 1) {
        current += 1
    }
    if (current === testimonials.length) {
        current = 0
    }

    loadTestimonial(current)
})

prevButton.addEventListener('click', () => {
    if (current < testimonials.length) {
        current -= 1
    } 
    
    if (current < 0) {
        current = testimonials.length - 1
    }

    loadTestimonial(current)
})