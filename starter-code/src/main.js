function draw() {
  const canvas = document.getElementById('court');
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'darkorange';
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  
  
//   left side
  ctx.fillRect(0, 110, 100, 80)
  
  ctx.beginPath();
  ctx.moveTo(0, 110);
  ctx.lineTo(100, 110);
  ctx.lineTo(100, 190);
  ctx.lineTo(0, 190);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 200);
  ctx.lineTo(0, 200);
  ctx.stroke();
  
  ctx.setLineDash([3, 3])
  ctx.beginPath();
  ctx.arc(100, 150, 40, Math.PI / 2, 3 * Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  
  ctx.setLineDash([])
  ctx.beginPath();
  ctx.arc(100, 150, 40, 3 * Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.arc(30, 150, 110, 3 * Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(0, 40);
  ctx.lineTo(30, 40);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(0, 260);
  ctx.lineTo(30, 260);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(20, 135);
  ctx.lineTo(20, 165);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(20, 150);
  ctx.lineTo(25, 150);
  ctx.stroke();
  
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(28, 150, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = 'darkorange';
  
//   right side
  
  ctx.fillRect(500, 110, 100, 80)
  
  ctx.beginPath();
  ctx.moveTo(600, 110);
  ctx.lineTo(500, 110);
  ctx.lineTo(500, 190);
  ctx.lineTo(600, 190);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(600, 100);
  ctx.lineTo(500, 100);
  ctx.lineTo(500, 200);
  ctx.lineTo(600, 200);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(500, 150, 40, Math.PI / 2, 3 * Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  
  ctx.setLineDash([3, 3])
  ctx.beginPath();
  ctx.arc(500, 150, 40, 3 * Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  ctx.setLineDash([])
  
  ctx.beginPath();
  ctx.arc(570, 150, 110, Math.PI / 2, 3 * Math.PI / 2);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(570, 40);
  ctx.lineTo(600, 40);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(570, 260);
  ctx.lineTo(600, 260);
  ctx.stroke();
  
//   cest
  ctx.beginPath();
  ctx.moveTo(580, 135);
  ctx.lineTo(580, 165);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(580, 150);
  ctx.lineTo(575, 150);
  ctx.stroke();
  
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(572, 150, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = 'darkorange';
  
//   center
  ctx.beginPath();
  ctx.arc(300, 150, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.arc(300, 150, 40, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 300);
  ctx.stroke();
}

draw()