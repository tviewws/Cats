document.addEventListener('DOMContentLoaded', ()=> {    
    addCats()
  })


  const addCats = () => {
    let form = document.getElementById('form');
    let name = document.getElementById('catName');
    let image = document.getElementById('catImage');
    let color = document.getElementById('catColor');
    let breed = document.getElementById('catBreed');
    let age = document.getElementById('catAge');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const catData = {
        name: name.value,
        breed: breed.value,
        age: age.value,
        color: color.value,
        image: image.value,
      };
  
      const postCat = {
        method: "POST",
        body: JSON.stringify(catData),
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      fetch('http://localhost:3000/cats', postCat)
        .then(() => {
          // Redirect to the first page after adding a cat
          window.location.href = 'cat.html';
        })
        .catch((error) => {
          console.error('Error adding cat:', error);
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', addCats);
  
   
