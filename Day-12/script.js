class DogImageService {                 //service class
    static async fetchRandomDogImage() {             //static method
      const response = await fetch("https://dog.ceo/api/breeds/image/random");  //makes http request to dog api to get random image
      const data = await response.json();  //It returns the image URL from the API response
      return data.message;
    }
}
//html keys
const mainImage = document.getElementById("main-image");
const historyContainer = document.getElementById("history");
const fetchBtn = document.getElementById("fetch-btn");

const history = [];  //Stores the URLs of the last 5 images,build the thumbnail gallery

function updateHistory(newUrl) {
  history.unshift(newUrl); //add to start(begining)
  if (history.length > 5) history.pop(); //keep max of 5 imgs

  historyContainer.innerHTML = "";  // clear the old thumbnails

  history.forEach((url) => {
      const wrapper = document.createElement("div"); //wrapper class to fix the thumbnail ratio
      wrapper.className = "w-48 h-48 overflow-hidden rounded shadow cursor-pointer hover:scale-105 transition";
  
      const img = document.createElement("img"); //each new thumbnail as img element
      img.src = url;
      img.className = "w-full h-full object-cover";
      img.onclick = () => {   // update thumbnail to main image
        mainImage.src = url;
      };
  
      wrapper.appendChild(img);
      historyContainer.appendChild(wrapper);
  });
}

fetchBtn.addEventListener("click", async () => {
  const url = await DogImageService.fetchRandomDogImage();  //Calls the API to fetch a new dog image
  mainImage.src = url;    //Sets the main image to the new image
  updateHistory(url);     //Updates the history and thumbnails
});
  