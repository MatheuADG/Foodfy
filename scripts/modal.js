//Pegando os elementos
const modalOverlay = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

//Abrindo a classe active
for(let card of cards){
    

    card.addEventListener("click", function(){
        modalOverlay.querySelector('.modal-content').innerHTML = card.innerHTML;
        modalOverlay.classList.add('active');
        
    })
}

//Fechando a classe Active

document.querySelector(".modal-closed").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
})

