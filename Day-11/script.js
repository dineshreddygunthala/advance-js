//cavas elements
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
// input elements
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const clearBtn = document.getElementById('clearBtn');

let isDrawing = false;

// Load saved drawing if available
const savedImage = localStorage.getItem('drawing');
if (savedImage) {
  const img = new Image();
  img.src = savedImage;
  img.onload = () => ctx.drawImage(img, 0, 0);
}
//mouse event listeners
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
  saveDrawing();
});
canvas.addEventListener('mousemove', draw);
// clear button and remove from the local storage
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  localStorage.removeItem('drawing');
});
// draw function with es6
function draw(e, color = colorPicker.value, size = sizePicker.value) {
  if (!isDrawing) return;

  const { offsetX: x, offsetY: y } = e;
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function saveDrawing() {
  localStorage.setItem('drawing', canvas.toDataURL());
}
