let wrap = document.getElementById("card_wrapper");
let baza = [
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Bekzod", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
]
function newAdd() {
    for (let i = 0; i < baza.length; i++) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let heading = document.createElement("h2");
        let p = document.createElement("p");
       
        img.src = baza[i].img;
        heading.innerHTML = baza[i].name;
        p.innerHTML = baza[i].email;
        
        card.appendChild(img);
        card.appendChild(heading);
        card.appendChild(p);
        card.style.border = "1px solid red";
        card.style.margin = "10px";
       
        wrap.appendChild(card);
        console.log("ishladi");
    }
}

newAdd();