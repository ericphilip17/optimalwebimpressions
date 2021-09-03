document.querySelector(".page1").classList.add("activePageStyles");
document.querySelector(".page2").addEventListener('click', function(){
    document.querySelector(".page-2").style.display = "flex";
    document.querySelector(".page2").classList.add("activePageStyles");
    document.querySelector(".page1").classList.remove("activePageStyles");
    document.querySelector(".page-1").style.display = "none";
});

document.querySelector(".page4").addEventListener('click', function(){
    document.querySelector(".page-2").style.display = "flex";
    document.querySelector(".page4").classList.add("activePageStyles");
    // document.querySelector(".page4").classList.remove("activePageStyles");
    document.querySelector(".page-1").style.display = "none";
});

document.querySelector(".page1").addEventListener('click', function(){
    document.querySelector(".page-1").style.display = "flex";
    document.querySelector(".page1").classList.add("activePageStyles");
    document.querySelector(".page2").classList.remove("activePageStyles");
    document.querySelector(".page4").classList.remove("activePageStyles");
    document.querySelector(".page-2").style.display = "none";
});

