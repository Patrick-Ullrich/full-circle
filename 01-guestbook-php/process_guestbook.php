<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $message = $_POST["message"];
  $entry = "{$name}|{$message}\n";
  file_put_contents("guestbook_entries.txt", $entry, FILE_APPEND);
  header("Location: guestbook.php");
  exit;
}
?>