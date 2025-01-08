const testimonials = [
    {
        name:"Alex Carter",
        position:"Business Consultant",
        image:"./image/icon-5359553_1280.png",
        testimonial:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam doloribus ratione commodi soluta, illo itaque aliquam et! Tenetur, distinctio quisquam. Aut minima perspiciatis odit. Nihil consequuntur ducimus pariatur optio delectus.`
    },

    {
        name:"Jane Harper",
        position:"Creative Director",
        image:"./image/icon-5359554_1280.webp",
        testimonial:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam doloribus ratione commodi soluta, illo itaque aliquam et! Tenetur, distinctio quisquam. Aut minima perspiciatis odit. Nihil consequuntur ducimus pariatur optio delectus.`
    },

    {
        name:"Ethan Brooks",
        position:"Customer Success Manager",
        image:"./image/icon-5359553_1280.png",
        testimonial:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam doloribus ratione commodi soluta, illo itaque aliquam et! Tenetur, distinctio quisquam. Aut minima perspiciatis odit. Nihil consequuntur ducimus pariatur optio delectus.`
    }
];

const testimonialContainer = document.getElementById("_testimonial-container");

const prevButton = document.getElementById("prev");

const nextButton = document.getElementById("next");

let currentIndex = 0;

function showTestimonial(){
    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
    <img src="${testimonial.image}"/>
    <h3>${testimonial.name}</h3>
    <h6>${testimonial.position}</h6>
    <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction){
    currentIndex += direction;
    if(currentIndex < 0){
        currentIndex = testimonials.length -1;
    }else if(currentIndex>= testimonials.length){
        currentIndex =0;
    }

    showTestimonial();
}

prevButton.addEventListener("click",() => changeTestimonial(-1));
nextButton.addEventListener("click",() => changeTestimonial(1));

showTestimonial();


