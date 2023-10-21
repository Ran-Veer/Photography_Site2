const list = document.querySelectorAll(".list");
// console.log(list)
list.forEach(element => {
    element.addEventListener("click",function(){
        list.forEach(e => e.classList.remove("active"))
        this.classList.add("active");
    })
})