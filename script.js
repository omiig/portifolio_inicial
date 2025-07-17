// Simula a tela de boot
window.onload = () => {
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("desktop").classList.remove("hidden");
  }, 3000); // 3 segundos de "inicialização"
};

// Abrir e fechar janelas
function openWindow(id) {
  document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}

// Relógio da barra de tarefas
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateClock, 1000);
updateClock();
