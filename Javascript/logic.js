// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById('toggle');
const mode = 'mode';
// const lightMode = document.getElementById('light');
// const darkMode = document.getElementById ('dark');

// when the light mode/dark mode toggle is clicked:
// The styles of the page change to match the mode. (10 pts)
// The --circle-color attribute changes to match the mode. (10 pts)
// classes in CSS and light and dark

if (localStorage.getItem(mode) === 'light'){
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  toggle.checked = true;
} else {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  toggle.checked = false;
}

toggle.addEventListener('change', function(event) {
  // event.preventDefault();
  if (toggle.checked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem(mode, 'dark');
    console.log ('toggle checked')
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem(mode, 'light');

}});





// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  return blogPosts;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// newEntry is a parameter - placeholder (my cake)
// we do need an array
function storeLocalStorage(newEntry){
  // get existing blog posts by calling function
  const blogPosts = readLocalStorage()
  // add the new blog posts
  blogPosts.push(newEntry);
  // save all of the blog posts
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

console.log("New entry from user!", newEntry);

};

