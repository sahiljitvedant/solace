<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Canvas Preview Builder</title>

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="style.css">

</head>
<body>

<div id="left">
  <h2>Preview</h2>
  <canvas id="previewCanvas" width="600" height="400"></canvas>
</div>

<div id="right">
  <h2>Controls</h2>

  <label>Enter Width:</label>
  <input type="number" id="inputWidth" value="300"><br><br>

  <label>Enter Height:</label>
  <input type="number" id="inputHeight" value="300"><br><br>
  <button id="updateSizeBtn">Update Size</button>

  <hr>

  <h3>Image Layer</h3>
  <div id="imgList">
    <img src="https://picsum.photos/200/300?random=1" class="img-option">
    <img src="https://picsum.photos/200/300?random=2" class="img-option">
    <img src="https://picsum.photos/200/300?random=3" class="img-option">
  </div>

  <input type="file" id="uploadImg">

  <hr>

  <h3>Frame Layer</h3>
  <div id="frameList">
    <!-- Your local image -->
    <img class="frame-option" src="img/frame1.jpg">
    <img class="frame-option" src="img/frame2.jpg">
    <img class="frame-option" src="img/frame3.jpg">
  </div>

</div>

<!-- JS -->
<script src="index.js"></script>

</body>
</html>
