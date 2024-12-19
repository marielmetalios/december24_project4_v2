// TODO: Create a variable that selects the form element
const form = document.getElementById('form');
const userNameSubmitted = document.getElementById('username');
const titleSubmitted = document.getElementById('title');
const contentSubmitted = document.getElementById('content');
const submitButton = document.getElementById('button');
const errorMessage = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission() {
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const redirectURL1 = 'http://127.0.0.1:5500/blog.html';
        location.assign(redirectURL1);


// for error message to trigger if any of the entries are blank:   
    if (!userNameSubmitted.value.trim() || !titleSubmitted.value.trim() || !contentSubmitted.value.trim())
        { errorMessage.textContent = "Please complete the form!";
            return;    
        }
// we want to clear the error message once they fix their submission...
    errorMessage.textContent = "";

// store entries as an object without spaces before/after:
    const newBlogPost = {
        userName: userNameSubmitted.value.trim(),
        title: titleSubmitted.value.trim(),
        content: contentSubmitted.value.trim(),
    };

    })};
 
    function clearOutForm() {
        userNameSubmitted.value ="";
        titleSubmitted.value ="";
        contentSubmitted.value ="";
    };

formSubmission();
   
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
clearOutForm();

