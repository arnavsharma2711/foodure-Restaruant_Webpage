//Active Navbar
let nav = document.querySelector(".navigation-wrap");
let navImage = document.getElementById("brandImage");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on");
        navImage.style.width = "50%";
    }
    else
    {
        nav.classList.remove("scroll-on");
        navImage.style.width = "65%";
    }
}

//Nav Hid
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
})

//Counter Design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current+=increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",300,833,3000);
    counter("count2",100,528,3000);
    counter("count3",0,17,3000);
    counter("count4",0,83,3000);
});