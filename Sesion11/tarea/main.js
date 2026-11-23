// capturamos el dom

const formPassword = document.querySelector("#formPassword");
const password = document.querySelector("#password");
const confirmar = document.querySelector("#confirmar");
const mensajeCoincidencia = document.querySelector("#mensajeCoincidencia");
const barraProgreso = document.querySelector("#barraProgreso");
const textoFortaleza = document.querySelector("#textoFortaleza");
const btnGuardar = document.querySelector("#btnGuardar");

// requisitos

const reqLongitud = document.querySelector("#req-longitud");
const reqMayuscula = document.querySelector("#req-mayuscula");
const reqMinuscula = document.querySelector("#req-minuscula");
const reqNumero = document.querySelector("#req-numero");
const reqSimbolo = document.querySelector("#req-simbolo");

// Funcion evaluar contraseña

function evaluarPassword(pass) {
  return {
    longitud: pass.length >= 8,
    mayuscula: /[A-Z]/.test(pass),
    minuscula: /[a-z]/.test(pass),
    numero: /\d/.test(pass),
    simbolo: /[^A-Za-z0-9]/.test(pass),
  };
}

function actualisarRequisito(elementoLi, seCumple, textoBase) {
  if (seCumple) {
    elementoLi.textContent = "✅ " + textoBase;
    elementoLi.classList.add("cumplido");
  } else {
    elementoLi.textContent = "❌ " + textoBase;
    elementoLi.classList.remove("cumplido");
  }
}
function actualizarFortaleza(pass, cumplidos) {
  barraProgreso.classList.remove("debil", "media", "fuerte");

  if (pass.length === 0) {
    textoFortaleza.textContent = "Fortaleza: Débil";
    return;
  }
  if (cumplidos <= 2) {
    barraProgreso.classList.add("debil");
    textoFortaleza.textContent = "Fortaleza: Débil";
  } else if (cumplidos <= 4) {
    barraProgreso.classList.add("media");
    textoFortaleza.textContent = "Fortaleza: Media";
  } else {
    barraProgreso.classList.add("fuerte");
    textoFortaleza.textContent = "Fortaleza: Fuerte";
  }
}

function verificarCoincidencia(pass, passConfirmar) {
  if (passConfirmar === "") {
    mensajeCoincidencia.textContent = "";
    mensajeCoincidencia.classList.remove("error", "ok");
    return false;
  }
  if (pass === passConfirmar) {
    mensajeCoincidencia.textContent = "✅ Las contraseñas coinciden";
    mensajeCoincidencia.classList.remove("error");
    mensajeCoincidencia.classList.add("ok");
    return true;
  } else {
    mensajeCoincidencia.textContent = "Las contraseñas no coinciden";
    mensajeCoincidencia.classList.remove("ok");
    mensajeCoincidencia.classList.add("error");
    return false;
  }
}

function evaluarFormulario() {
  const pass = password.value;
  const passConfirmar = confirmar.value;

  const resultado = evaluarPassword(pass);

  actualisarRequisito(reqLongitud, resultado.longitud, "Al menos 8 caracteres");

  actualisarRequisito(
    reqMayuscula,
    resultado.mayuscula,
    "Al menos una mayúscula (A-Z)",
  );

  actualisarRequisito(
    reqMinuscula,
    resultado.minuscula,
    "Al menos una minúscula (a-z)",
  );

  actualisarRequisito(reqNumero, resultado.numero, "Al menos un número (0-9)");

  actualisarRequisito(
    reqSimbolo,
    resultado.simbolo,
    "Al menos un símbolo (!#$)",
  );

  const cumplidos = Object.values(resultado).filter(Boolean).length;

  actualizarFortaleza(pass, cumplidos);
  const coinciden = verificarCoincidencia(pass, passConfirmar);

  btnGuardar.disabled = !(cumplidos === 5 && coinciden);
}

password.addEventListener("input", evaluarFormulario);
confirmar.addEventListener("input", evaluarFormulario);
formPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Contraseña guardada con exito");
  formPassword.reset();
  evaluarFormulario();
});
