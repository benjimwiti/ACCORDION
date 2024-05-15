//VARIABLES
const accordionElements = document.getElementsByClassName('content-container')
console.log(accordionElements[0].children[1])
 for(let i=0 ; i < accordionElements.length ; i++) {
    accordionElements[i].addEventListener('click', () => {
        accordionElements[i].children[1].classList.toggle('active')
        accordionElements[i].children[1].classList.toggle('smooth')
        console.log(accordionElements[0].children[1])
})
 }
console.log(accordionElements[0].children[1])
setTimeout(() => {
    for (let i=0; i < accordionElements.length; i++){
        accordionElements[i].children[1].classList.add('active')
    }

}, 1000);