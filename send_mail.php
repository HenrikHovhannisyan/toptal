<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'mail.toptal.ai';
        $mail->SMTPAuth = true;
        $mail->Username = 'support@toptal.ai';
        $mail->Password = 'txZm35e2fW5LL1Ls';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Hostname = 'toptal.ai';

        $mail->setFrom('support@toptal.ai', 'Toptal Support');
        $mail->addAddress('support@toptal.ai', 'Support');

        $mail->Subject = 'New Message from Contact Form';
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        if ($mail->send()) {
            echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Message failed to send.']);
        }
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
}
?>
