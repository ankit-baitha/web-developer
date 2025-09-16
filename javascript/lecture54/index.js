// performance improvement
// 1.measure?
// 2. efficiant/good practice

// code 1
// add 100 paragraph
// const t1 = performance.now()//

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i
//     document.body.appendChild(para)
// }
// const t2 = performance.now()
// console.log("total time by code 1: ", (t2 - t1))



// // code 2
// const t3 = performance.now()
// let mydiv = document.createElement('div');

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i;
//     mydiv.appendChild(para);

// }
// document.body.appendChild(mydiv)
// const t4 = performance.now()
// console.log("total time by code 2: ", (t4 - t3))



// reflow and repaint

// What it is:
// The process by which the browser calculates the layout of the page — positions, sizes, geometry of elements, etc.

// When it happens:
// When you change the structure or layout of the DOM.

// Examples:

// Adding/removing elements from the DOM.

// Changing element size (width/height).

// Changing fonts or content that affects layout.

// Resizing the browser window.

// Cost:
// Expensive, because the browser has to recalculate positions and sizes of many elements.







// Repaint

// What it is:
// The process of redrawing elements on the screen after changes that don’t affect layout, only visuals (color, background, visibility).

// When it happens:
// When you change appearance but not geometry.

// Examples:

// Changing color, background-color, or visibility.

// Applying box-shadow or other styles that don’t change size or position.

// Cost:
// Cheaper than reflow, because layout calculations are not needed — only pixels are updated.



//best code
// document tragment



let fragment = document.createDocumentFragment();
for (let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para " + i;
    // NO REFLOW AND NO REPAINT FOR THE BELOW LINE
    fragment.appendChild(para);

}

//  the below line takes 1 reflow and 1 repaint 
document.body.appendChild(fragment)