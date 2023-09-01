<!DOCTYPE html>
<html>
<head>
  <title>Welcome to My Retro PHP Homepage</title>
  <style>
    body {
      background-color: #000000;
      color: #ffffff;
      font-family: 'Comic Sans', sans-serif;
      margin: 0;
      padding: 0;
      background: url('https://www.spacejam.com/1996/img/bg_stars.gif');
    }
    #guestbook {
      width: 80%;
      margin: 20px auto;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid #ffffff;
    }
  </style>
</head>
<body>
    <h1 style="text-align: center;">Hello to my homepage!</h1>
  <div id="guestbook">
    <h1>Welcome to My Guestbook</h1>
    <p>Feel free to leave your comments and memories!</p>
    <form action="process_guestbook.php" method="post">
      <label for="name">Name:</label>
      <input type="text" name="name" required><br>
      <label for="message">Message:</label><br>
      <textarea name="message" rows="4" cols="50" required></textarea><br>
      <input type="submit" value="Submit">
    </form>
    <h2>Guestbook Entries:</h2>
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
  </div>
</body>
</html>