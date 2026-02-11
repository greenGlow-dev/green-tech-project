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
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },
    { img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjh3VyKm2s062XIHoBcOLBE3YJABlFd4vbw&s`, name: "Abdullo", email: "abdullo@gmail.com" },

]
// function newAdd() {
//     for (let i = 0; i < baza.length; i++) {
//         let card = document.createElement("div");
//         let head_card = document.createElement("div");
//         let img = document.createElement("img");
//         let heading = document.createElement("h2");
//         let p = document.createElement("p");

//         img.src = baza[i].img;
//         heading.innerHTML = baza[i].name;
//         p.innerHTML = baza[i].email;

//         card.appendChild(img);
//         head_card.appendChild(heading);
//         head_card.appendChild(p);
//         card.appendChild(head_card);
//         card.classList.add("card");
//         head_card.classList.add("head_card");

//         // head_card.style.border = "1px solid red"
//         // card.style.border = "1px solid red";
//         // card.style.margin = "10px";

//         wrap.appendChild(card);
//         console.log("ishladi");
//     }
// }




// newAdd();    
// let id = document.getElementById("site_bar_id");
// let id = document.getElementById("header")
// function loadComponent(id, file) {
//   fetch(file)
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// loadComponent("header", "./components/header.html");
// loadComponent("sidebar", "components/sidebar.html");
// loadComponent("footer", "components/footer.html");



// Funksiya faqat o'ziga kelgan argumentlar bilan ishlaydi
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(htmlContent => {
            const container = document.getElementById(elementId);
            if (container) {
                container.innerHTML = htmlContent;
            }
        })
        .catch(error => console.error("Xatolik yuz berdi:", error));
}

// Chaqirish (global o'zgaruvchilarsiz)
loadComponent("header", "./components/header.html");
// loadComponent("sidebar", "./components/sidebar.html");
// loadComponent("footer", "./components/footer.html");