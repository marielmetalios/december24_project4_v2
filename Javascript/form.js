// TODO: Create a variable that selects the form element
const form = document.getElementById('form');
const userName = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('button');
const errorMessage = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
form.addEventListener('submit', function formSubmission(event) {
    event.preventDefault();
    const redirectURL = './blog.html';
    
    // store keys or properties in the object without spaces before/after:
    const newBlogPost = {
        userName: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };
    // for error message to trigger if any of the entries are blank:   
    if (!newBlogPost.userName || !newBlogPost.title || !newBlogPost.content) {
        errorMessage.textContent = "Please complete the form!";
        return;
    };
    // we want to clear the error message once they fix their submission...
    errorMessage.textContent = "";

    // now we're passing in the argument - is our actual object
    storeLocalStorage(newBlogPost);
    location.assign(redirectURL);

});

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

// form.reset(); method for reset happens of form element