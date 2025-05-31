// // Box ko get karo HTML se
// const box = document.querySelector(".box");

// // Jab mouse box ke upar ho, ye function chalega
// box.addEventListener('mousemove', function (event) {
//     // Box ki position aur size le lo Jaise: box kahan se start ho raha hai (top, left, width, height, etc.).
//     //ek object return karta hai jisme yeh sab details hoti hain.
//     const boxPosition = box.getBoundingClientRect();

//     //Yeh lines calculate karti hain ke mouse pointer box ke andar kis position par hai:
//     const mouseX = event.clientX - boxPosition.left;
//     const mouseY = event.clientY - boxPosition.top;

//     //Yeh lines box ke center ka point nikaal rahi hain (X aur Y axis dono par).
//     const centerX = boxPosition.width / 2;
//     const centerY = boxPosition.height / 2;

//     //Yeh lines calculate karti hain ke box ko kitna move karna chahiye, based on mouse ki position aur box ke center ke darmiyan ka farq.
//     const moveX = (mouseX - centerX) / 50;
//     const moveY = (mouseY - centerY) / 50;


//     //Yeh line box ko translate (move) karti hai X aur Y direction mein.
//     box.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// box.addEventListener('mouseleave', function (event) {
//     box.style.transform = 'translate(0px, 0px)';
// });


// const box = document.querySelector('.box');

// document.addEventListener('mousemove', function (event) {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   // Box ko mouse position par move karo
//   box.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px)`;
// });



const box = document.querySelector('.box');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Box par click karne par drag start karo
box.addEventListener('mousedown', function (e) {
  isDragging = true;

  // Mouse ki position aur box ki current position ka difference
  const rect = box.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  box.style.cursor = 'grabbing';
});

// Mouse chhorte hi drag band karo
document.addEventListener('mouseup', function () {
  isDragging = false;
  box.style.cursor = 'grab';
});

// Mouse move par agar dragging ho rahi ho to box move karo
document.addEventListener('mousemove', function (e) {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  }
});

