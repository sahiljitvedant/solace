const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');

let imgLayer = null;
let framePiece = null;
let rectW = 300;
let rectH = 300;

function drawAll() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "black";
  ctx.strokeRect(20, 20, rectW, rectH);

  if(imgLayer) ctx.drawImage(imgLayer, 20, 20, rectW, rectH);

  if(framePiece) {
    const pattern = ctx.createPattern(framePiece, 'repeat');
    ctx.strokeStyle = pattern;
    ctx.lineWidth = 40;
    ctx.strokeRect(20, 20, rectW, rectH);
  }
}

drawAll();

/* jQuery Events */

// Update size
$("#updateSizeBtn").click(function() {
  rectW = parseInt($("#inputWidth").val());
  rectH = parseInt($("#inputHeight").val());
  drawAll();
});

// select image
$(".img-option").click(function() {
  let src = $(this).attr("src");
  imgLayer = new Image();
  imgLayer.onload = drawAll;
  imgLayer.src = src;
});

// upload image
$("#uploadImg").change(function(e) {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function(evt) {
    imgLayer = new Image();
    imgLayer.onload = drawAll;
    imgLayer.src = evt.target.result;
  };
  reader.readAsDataURL(file);
});

// select frame
$(".frame-option").click(function() {
  let src = $(this).attr("src");
  framePiece = new Image();
  framePiece.onload = drawAll;
  framePiece.src = src;
});
