
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('simple-form');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    // Sending the form data using the Fetch API
    fetch('https://script.google.com/macros/s/AKfycbwUuZ80iQyx24SGmX6VYzUZkWBCmmvqWETdQx83WXAMwiEpZX6gWGwG0IuUF74FtWXGZw/exec', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json()) // Handle JSON response if necessary
      .then(data => {
        // Display success message
        alert("Congrats , your details have been sent to our team")

        form.reset();
        
      })
      .catch(error => {
        // Handle error
        alert("Error, please try again")
        
      });
  });
});
