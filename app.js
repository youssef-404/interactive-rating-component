const rats =document.querySelectorAll('.cercle');
const button =document.querySelector('input');
const page1 =document.querySelector('#page1');
const page2 =document.querySelector('#page2');
const score = document.querySelector('.score')
let rating ;
function removeRating(rats) {
    rats.forEach(i=>i.classList.remove('cercleOnclick'))
}

rats.forEach(rat => rat.addEventListener('click',(e)=>{
    removeRating(rats);
    rat.classList.add('cercleOnclick')
    rating=e.target.id;
    
}));


button.addEventListener('click',(e)=>{
    if(rating){
        page1.style.display='none';
        score.innerHTML=rating
        page2.style.display='block';
    }
})

