// // let h2 = document.querySelector("h2");
// //  h2.innerHTML = "<i>Hello  Javascript</i>";
// //  console.dir(h2);

// // let a =  document.querySelector("a");
// // a.href = "https://www.google.com";
// // a.setAttribute("href", "https://www.google.com");

let img = document.querySelector("img");
 img.setAttribute("src", "https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8");
 img.setAttribute("height", "200px");

let a = document.querySelector("a");
a.removeAttribute("href");
console.log(a.getAttribute("href")
);
let h1 = document.createElement("h1");
h1.textContent = "hello kaise ho";
// document.body.appendChild(h1);
// console.log(h1);
// document.querySelector("body").appendChild(h1);

let p = document.querySelector("p");
p.style.color = "#86d2f7";
p.style.fontSize = "30px";
p.style.backgroundColor = "crimson";
p.style.fontFamily = "Arial";
p.style.textTransform = "capitalize";
console.dir(p);

let p = document.querySelector("p");
p.addEventListener("click", function () {
    p.style.color = "yellow";
});
p.addEventListener("dblclick", function () {
    p.style.backgroundColor = "pink";
});
p.style.fontSize = "30px";
p.style.border = "2px solid black";

let inp = document.querySelector("input");
inp.addEventListener("input", function (dets) {
    if (dets.data !== "null") {
        console.log(dets.data);
    }
});

let sel = document.querySelector("select");
 sel.addEventListener("change", function(dets){
     console.log(dets.target.value);
 });
 let device = document.querySelector("#device");
 sel.addEventListener("change", function(dets){
     device.textContent = `${dets.target.value} Device Selected`;
 });


let h5 = document.querySelector("h5");
window.addEventListener("keydown", function (dets) {
    h5.textContent = "dets.key";
});


