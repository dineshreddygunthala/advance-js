// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Debounced event handler
  const logSearch = debounce((event) => {
    console.log("Search query:", event.target.value);
  }, 500);
  
  // Attach event listener
  document.getElementById("search").addEventListener("keyup", logSearch);
  