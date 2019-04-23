const carouselImageCollection = document.querySelector('.carousel_image_collection')
const carouselImageItem = document.querySelectorAll('.carousel_image_item')
const prevButton = document.querySelector('.left_arrow');
const nextButton = document.querySelector('.right_arrow')
const dots = document.querySelector('.carousel_dots');
const dot = document.querySelectorAll('.dots_item');

const slideWidth = carouselImageItem[0].getBoundingClientRect().width

carouselImageItem.forEach((item, index)=> {
    item.style.left = slideWidth * index + 'px' 
});

nextButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left; 
    carouselImageCollection.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current_slide');
    nextSlide.classList.add('current_slide');

    const currentDot = document.querySelector('.current_dot')
    currentDot.classList.remove('current_dot');
    currentDot.nextElementSibling.classList.add('current_dot')

    const slideCollection = document.querySelector('.carousel_image_collection')
    const nextIndex = Array.from(slideCollection.children).findIndex(item=>item===nextSlide);
    if (nextIndex === 0) {
        prevButton.classList.add('isHidden');
        nextButton.classList.remove('isHidden')
    }else if(nextIndex === carouselImageItem.length - 1){
        prevButton.classList.remove('isHidden');
        nextButton.classList.add('isHidden');
    }else{
        prevButton.classList.remove('isHidden');
        nextButton.classList.remove('isHidden');
    }
})

prevButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current_slide');
    const nextSlide = currentSlide.previousElementSibling;
    const amountToMove = nextSlide.style.left; 
    carouselImageCollection.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current_slide');
    nextSlide.classList.add('current_slide');

    const currentDot = document.querySelector('.current_dot')
    currentDot.classList.remove('current_dot');
    currentDot.previousElementSibling.classList.add('current_dot')

    const slideCollection = document.querySelector('.carousel_image_collection')
    const prevIndex = Array.from(slideCollection.children).findIndex(item=>item===nextSlide);
    if (prevIndex === 0) {
        prevButton.classList.add('isHidden');
        nextButton.classList.remove('isHidden')
    }else if(prevIndex === carouselImageItem.length - 1){
        prevButton.classList.remove('isHidden');
        nextButton.classList.add('isHidden');
    }else{
        prevButton.classList.remove('isHidden');
        nextButton.classList.remove('isHidden');
    }
    
})
dot.forEach(item => item.addEventListener('click', e => {
    
    const dotsCollection = document.querySelector('.dots_collection')
    const targetDot = Array.from(dotsCollection.children);
    const targetIndex = targetDot.findIndex(item => item === e.target)
    
    const currentSlide = document.querySelector('.current_slide');
    
    const targetSlide = carouselImageItem[targetIndex]
    
    const amountToMove = targetSlide.style.left; 
    carouselImageCollection.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide')
    
    const currentDot = document.querySelector('.current_dot')
    currentDot.classList.remove('current_dot');
    e.target.classList.add('current_dot')
    
    if (targetIndex === 0) {
        prevButton.classList.add('isHidden');
        nextButton.classList.remove('isHidden')
    }else if(targetIndex === carouselImageItem.length - 1){
        prevButton.classList.remove('isHidden');
        nextButton.classList.add('isHidden');
    }else{
        prevButton.classList.remove('isHidden');
        nextButton.classList.remove('isHidden');
    }

}))
