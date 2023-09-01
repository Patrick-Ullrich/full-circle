<?php
$entries = file("guestbook_entries.txt", FILE_IGNORE_NEW_LINES);
if ($entries) {
  foreach ($entries as $entry) {
    list($name, $message) = explode("|", $entry);
    echo "<div class='entry'><strong>{$name}:</strong> {$message}</div>";
  }
} else {
  echo "<p>No entries yet.</p>";
}
?>