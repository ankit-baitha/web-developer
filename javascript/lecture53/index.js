
//  browser Events 
// .1 event
// 2. respond
// 3. data stored
// 4. stop
// 5.lifecycle



// monitorEvent(document) isn’t a standard JavaScript method—you won’t find it in the DOM API.
// But it looks like you’re trying to monitor or log all events on the document object.

// Browser events are actions or occurrences that happen in the browser, often triggered by users or the browser itself. JavaScript can “listen” for these events and run code in response.

// Element
// 1.addEventListener()
// 2.removeEventListener()




// function changetaxt() {
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "hello ankit "


// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changetaxt);
// fpara.removeEventListener('click', changetaxt);





//  phase of event
// 1.capturing phase ->The event travels from the root (window/document) down through the DOM tree towards the target.
// 2.At taget phase ->he event has reached the target element (the one that was actually clicked or interacted with).
// 3.bubbling phase ->The event then bubbles up the DOM tree back toward the root.







// default action  
//preventDefault() is a JavaScript method that stops the browser’s default action for an event.
// let anchorElement = document.getElementById("fanchor");
// function anchorfunction(event) {
//     event.preventDefault();
//     anchorElement.textContent = "click done bhai"
// };
// anchorElement.addEventListener('click', anchorfunction);





// avioding too many listener:-
// let paras = document.querySelectorAll('p');

// function alertpara(event) {
//     alert("You have clicked on para: " + event.target.textContent);
// }

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
// }



// function alertpara(event) {
//     alert("You have clicked on para: " + event.target.textContent);
// }
// let mydiv= document.getElementById('wrppper');
// document.addEventListener('click',alertpara)


function alertpara(event) {
    if (event.target.nodeName==="SPAN"){
        alert("You have clicked on para: " + event.target.textContent);
    }
    
}
let mydiv= document.getElementById('wrppper');
document.addEventListener('click',alertpara)



