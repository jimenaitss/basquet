const canvas = document.getElementById('basketballCourt');
const ctx = canvas.getContext('2d');

const playerSize = 30;
const ballSize = 15;

let player1X = canvas.width / 3;
let player1Y = canvas.height / 2;
let player2X = canvas.width * 2 / 3;
let player2Y = canvas.height / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;

function drawCourt() {
    // Fondo de la cancha
    ctx.fillStyle = '#D3D3D3'; // Gris para el área fuera de la cancha
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cancha de baloncesto
    ctx.fillStyle = '#008000'; // Verde oscuro para la cancha
    ctx.fillRect(50, 50, 700, 400);

    // Líneas de la cancha
    ctx.strokeStyle = '#FFFFFF'; // Líneas blancas
    ctx.lineWidth = 4;

    // Línea de medio campo
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.lineTo(400, 450);
    ctx.stroke();

    // Círculo de medio campo
    ctx.beginPath();
    ctx.arc(400, 250, 60, 0, Math.PI * 2);
    ctx.stroke();

    // Área de tiro libre (izquierda)
    ctx.beginPath();
    ctx.rect(50, 150, 190, 200);
    ctx.stroke();

    // Círculo de tiro libre (izquierda)
    ctx.beginPath();
    ctx.arc(145, 250, 60, 0, Math.PI * 2);
    ctx.stroke();

    // Área de tiro libre (derecha)
    ctx.beginPath();
    ctx.rect(560, 150, 190, 200);
    ctx.stroke();

    // Círculo de tiro libre (derecha)
    ctx.beginPath();
    ctx.arc(655, 250, 60, 0, Math.PI * 2);
    ctx.stroke();

    // Zona de tres puntos (izquierda)
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 450);
    ctx.lineTo(240, 450);
    ctx.arc(145, 250, 200, Math.PI / 2, -Math.PI / 2, true);
    ctx.lineTo(50, 50);
    ctx.stroke();

    // Zona de tres puntos (derecha)
    ctx.beginPath();
    ctx.moveTo(750, 50);
    ctx.lineTo(750, 450);
    ctx.lineTo(560, 450);
    ctx.arc(655, 250, 200, -Math.PI / 2, Math.PI / 2, true);
    ctx.lineTo(750, 50);
    ctx.stroke();

    // Líneas de fondo y laterales
    ctx.beginPath();
    ctx.rect(50, 50, 700, 400);
    ctx.stroke();
}

function drawPlayer(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - playerSize / 2, y - playerSize / 2, playerSize, playerSize);
}

function drawBall(x, y) {
    ctx.fillStyle = '#FFD700'; // Dorado para la pelota
    ctx.beginPath();
    ctx.arc(x, y, ballSize, 0, Math.PI * 2);
    ctx.fill();
}

function drawHoop() {
    // Canasta izquierda
    ctx.fillStyle = '#FF4500'; // Rojo para el aro
    ctx.beginPath();
    ctx.arc(70, 250, 15, 0, Math.PI * 2);
    ctx.fill();

    // Poste izquierdo
    ctx.fillStyle = '#8B4513'; // Marrón para el poste
    ctx.fillRect(60, 210, 20, 40);

    // Tablero izquierdo
    ctx.fillStyle = '#FFFFFF'; // Blanco para el tablero
    ctx.fillRect(50, 190, 40, 20);

    // Canasta derecha
    ctx.fillStyle = '#FF4500';
    ctx.beginPath();
    ctx.arc(730, 250, 15, 0, Math.PI * 2);
    ctx.fill();

    // Poste derecho
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(720, 210, 20, 40);

    // Tablero derecho
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(710, 190, 40, 20);
}

function init() {
    drawCourt();
    drawHoop();
    drawPlayer(player1X, player1Y, '#FF0000'); // Rojo para jugador 1
    drawPlayer(player2X, player2Y, '#0000FF'); // Azul para jugador 2
    drawBall(ballX, ballY);
}

init();
