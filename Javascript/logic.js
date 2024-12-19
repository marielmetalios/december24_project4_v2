// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(newBlogPosts);
  if (blogPosts='') {
    console.log ('');
  }
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(){
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
console.log("New entry from user!", newBlogPosts);
};



