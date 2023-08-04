const AA = document.querySelector(".AA");
const RR = document.querySelector(".RR");
const TT = document.querySelector(".TT");
const one = document.querySelector(".one");
const too = document.querySelector(".too");
const thre = document.querySelector(".thre");
const quatre = document.querySelector(".quatre");
const five = document.querySelector(".five");


one.addEventListener("click", () =>{
    RR.style.display = "flex";
    AA.style.display = "none";
    TT.style.display = "none";
})

thre.addEventListener("click", () =>{
    AA.style.display = "none";
    TT.style.display = "flex";
   
    // console.log("fghjklkgg")
    RR.style.display = "none";
 })
 too.addEventListener("click", () =>{
    TT.style.display = "none";
    AA.style.display = "flex";
    RR.style.display = "none";
 })



    quatre.addEventListener("click" ,() =>{
        TT.style.display = "none";
        AA.style.display = "none";
        RR.style.display = "flex";
})