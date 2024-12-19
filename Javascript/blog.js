// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.getElementById('main');
const backButton =  document.querySelector('.back');

// TODO: Create a function that builds an element and appends it to the DOM
// pulls in object from form.js page and creates articles
// mar had to Xpert the entry parameter in following line -- TODO: get extra help on this!
function buildingElement(entry){
    const addingBlog = document.createElement("article");
    addingBlog.innerHTML = `
        <h2>${entry.title}</h2>
        <p>${entry.userName}</p>
        <p>${entry.content}</p> `;
    mainElement.appendChild(addingBlog);
    console.log("New article to be appended to DOM");
};

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogsToDisplay(){
    if (newBlogPost == ""){
    const noPosts = document.createElement("p");
    noPosts.textContent = "No blogs to display, go back and add one!";
    mainElement.appendChild(noPosts);
    console.log("No blog posts to add")
}};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    // TODO: Mar get help on what the rendering does??
    if (blogPosts.length > 0) {
    } else {
    noBlogsToDisplay();
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL1 = 'http://127.0.0.1:5500/index.html';
const redirect = document.getElementById('back');
backButton.addEventListener('click', function (event) {
    event.preventDefault ();
    location.assign(redirectURL1);
});