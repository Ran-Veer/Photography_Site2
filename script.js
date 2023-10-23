
const list = document.querySelectorAll(".list");
// console.log(list)
list.forEach(element => {
    element.addEventListener("click",function(){
        list.forEach(e => e.classList.remove("active"))
        this.classList.add("active");
    })
})

// ------------- Typing Text Effect --------------
var typed = new Typed(".typing_text" ,{
    strings:["Photographer","Videographer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
