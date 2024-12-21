$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();

        // Validate passwords match
        if (password !== confirm_password) {
            alert("Passwords do not match!");
            return false;
        }

        // Display success message with user info
        $('#registrationForm').hide();
        $('#successMessage').show();
        $('#userInfo').html(`
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
        `);

        // Optionally, send form data via AJAX to PHP backend
        $.ajax({
            url: 'submit.php',  // We'll point this to the PHP backend
            method: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                console.log(response);
            }
        });
    });
});
