<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    
    // Here you could save the data to a database (MySQL) or send a confirmation email
    
    // Respond with success message
    echo json_encode([
        'status' => 'success',
        'message' => 'Form submitted successfully!',
        'data' => [
            'name' => $name,
            'email' => $email
        ]
    ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
?>
