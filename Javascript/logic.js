// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  return blogPosts;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// newEntry is a parameter - placeholder (cake)
// we do need an array
function storeLocalStorage(newEntry){
  // get existing blog posts
  const blogPosts = readLocalStorage()
  // add the new blog posts
  blogPosts.push(newEntry);
  // save all of the blog posts
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

console.log("New entry from user!", newEntry);

};

