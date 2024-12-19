// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.getElementById('main');
const backButton =  document.querySelector('.back');
const blogPosts = readLocalStorage();

// TODO: Create a function that builds an element and appends it to the DOM
// pulls in object from form.js page and creates articles
// mar had to Xpert the entry parameter in following line -- TODO: get extra help on this!
function buildingElement() {
    blogPosts.forEach(entry => {
    const newArticle = document.createElement('article');
        newArticle.innerHTML = `
        <h2>${entry.title}</h2>
        <p>${entry.userName}</p>
        <p>${entry.content}</p> `;
    mainElement.appendChild(newArticle);
    console.log("New article to be appended to DOM");
})};

// mar get extra help on forEach!!


// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogsToDisplay() {
    if (newBlogPost == ""){
    const noPosts = document.createElement("p");
    noPosts.textContent = "No blogs to display, go back and add one!";
    mainElement.appendChild(noPosts);
    console.log("No blog posts to add")
}};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (blogPosts.length > 0) {
        buildingElement();
    } else {
    noBlogsToDisplay();
    }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL2 = './index.html';
const redirect = document.getElementById('back');
backButton.addEventListener('click', function (event) {
    location.assign(redirectURL2);
});