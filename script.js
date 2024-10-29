let scrollContainer = document.querySelector('.Slide-items');
let LeftBtn = document.getElementById("LeftBtn");
let RightBtn = document.getElementById("RightBtn");

scrollContainer.addEventListener('wheel', (e) => {
    e.defaultPrevented();
    scrollContainer.scrollLeft += e.deltaY;
})

RightBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 1800
})

LeftBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 1800
})