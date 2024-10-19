
const myobserver = new IntersectionObserver((entreis) =>{
    entreis.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
            console.log(entreis)
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hidden = document.querySelectorAll('.hidden')
    
hidden.forEach( (element) => myobserver.observe(element))
var div = document.querySelectorAll('.rede')
function clicar(){

    div.forEach( (element) => {
        if (element.classList.contains('esconde') == true){
            element.classList.add('mostra')
            element.classList.remove('esconde')
        } else {
            element.classList.add('esconde')
            element.classList.remove('mostra')
        }
        
    }) 
}


