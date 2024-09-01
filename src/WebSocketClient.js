// Reemplaza 'ws://localhost:3000/socket' con la URL de tu servidor WebSocket
let url = "fluorescent-hurricane-paw.glitch.me";
//const socket = new WebSocket('ws://childlike-flicker-hubcap.glitch.me/socket'); original
const socket = new WebSocket('ws://fluorescent-hurricane-paw.glitch.me/socket');

// Evento que se dispara cuando la conexión se abre
socket.onopen = (event) => {
  console.log('Conectado al servidor WebSocket');
  // Puedes enviar un mensaje al servidor una vez que esté conectado
  socket.send('Hola, servidor WebSocket');
};

// Evento que se dispara cuando se recibe un mensaje del servidor
socket.onmessage = (event) => {
  console.log('Mensaje recibido del servidor:', event.data);

  let textAreaChat = document.getElementById("chat");
  textAreaChat.value = event.data;
};

// Evento que se dispara cuando la conexión se cierra
socket.onclose = (event) => {
  if (event.wasClean) {
    console.log('Conexión cerrada de manera limpia');
  } else {
    console.error('Conexión cerrada de manera abrupta');
  }
  console.log('Código de cierre:', event.code, 'Motivo:', event.reason);
};

// Evento que se dispara en caso de errores
socket.onerror = (error) => {
  console.error('Error de conexión:', error);
};

// Puedes enviar mensajes al servidor en cualquier momento
function enviarMensajeAlServidor() {
  
  let mensaje = document.getElementById("chat").value;
  socket.send(mensaje);
  borrarTexto();
  
  
}

function borrarTexto() {
    document.getElementById("chat").value = " ";
}
