const card = document.querySelector(".box");
const container = document.querySelector(".container");

const title = document.querySelector(".info h1");
const branch = document.querySelector(".info h5");
const description = document.querySelector(".info p");
const image = document.querySelector(".profile img");
const links = document.querySelector(".links li");


container.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    console.log(xAxis,yAxis);
    card.style.transform = `rotateY(${xAxis}deg)     rotateX(${yAxis}deg)`;
});
//animate in
container.addEventListener("mouseenter",(e) =>{
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(70px)";
    branch.style.transform = "translateZ(70px)";
    description.style.transform = "translateZ(50px)";
    links.style.transform = "translateZ(50px)";
    image.style.transform = "translateZ(50px)";
});

//animate out
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    branch.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    links.style.transform = "translateZ(0px)";
    image.style.transform = "translateZ(0px)";
});

