const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

const url_dogs = "https://random.dog/woof.json";
const url_cats = "https://aws.random.cat/meow";

function getRandomCat() {
  axios.get(url_cats)
  .then(response => {
    const data = response.data
    cat_result.innerHTML = `<img src=${data.file} alt="cat"/>`
  })
  .catch(error => console.log(error));
}

function getRandomDog() {
  axios.get(url_dogs)
  .then(response => {
    const data = response.data
    if(data.url.includes('.mp4')) {
      getRandomDog();
    }
    else {
      dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
    }
  })
  .catch(error => console.log(error));
}