const init = () => {
    const form=document.querySelector('form');
form.addEventListener('submit', (e)=>{
    const inputForm=document.getElementById('searchByID');


e.preventDefault()

    fetch(`http://localhost:3000/movies/${inputForm.value}`)
    .then((res)=>res.json())
    .then((data)=>displayData(data))
})
}

function displayData(movies){
   /* movies.forEach(movie =>{*/      //for each canot be used bcz we returning only 1 single object
   const mHeader=document.querySelector('section#movieDetails h4');
const Mtitle=document.querySelector('section#movieDetails p');
   /*if(status===404){
    mHeader.textContent=status;
    Mtitle.textContent='movie not found'
   }*/
   if(movies && movies.title && movies.summary){
    mHeader.textContent=movies.title;
    Mtitle.textContent=movies.summary;
    mHeader.style.color='green'
   }
   else{
    mHeader.style.color='red'
    mHeader.textContent='404';
    Mtitle.textContent='movie not found'

   }



   // })

}

document.addEventListener('DOMContentLoaded', init);