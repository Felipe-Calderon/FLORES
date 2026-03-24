// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Pensaba que contigo iba a envejecer", time: 2 },
{ text: "En otra vida, en otro mundo, podrá ser", time: 5 },
{ text: "En esta, solo queda irme un día", time: 8 },
{ text: "Y solamente verte en el atardecer", time: 11 },
{ text: "Si me ven solo y triste, no me hablen", time: 15 },
{ text: "Si me ven solo y triste, soy culpable", time: 18 },
{ text: "La vida es una fiesta que un día termina", time: 21 },
{ text: "Y fuiste tú mi baile inolvidable", time: 24 },
{ text: "Y fuiste tú mi baile inolvidable", time: 28 },
{ text: "Eh-eh, eh-eh", time: 31 },
{ text: "Eh-eh, eh-eh", time: 34 },
{ text: "(Mientras uno está vivo)", time: 38 },
{ text: "(Uno debe amar lo más que pueda)", time: 41 },
{ text: "Pensaba que contigo iba a envejecer", time: 45 },
{ text: "En otra vida, en otro mundo, podrá ser", time: 48 },
{ text: "En esta, solo queda irme un día", time: 51 },
{ text: "Y ver pa'l cielo a ver si te veo caer", time: 54 },
{ text: "Si me ven solo y triste, no me hablen", time: 58 },
{ text: "Si me ven solo y triste, soy culpable", time: 61 },
{ text: "La vida es una fiesta que un día termina", time: 64 },
{ text: "Y fuiste tú mi baile inolvidable", time: 68 },
{ text: "No, no te puedo olvidar", time: 71 },
{ text: "No, no te puedo borrar", time: 74 },
{ text: "Tú me enseñaste a querer", time: 77 },
{ text: "Me enseñaste a bailar", time: 80 },
{ text: "No, no te puedo olvidar", time: 84 },
{ text: "No, no te puedo borrar", time: 87 },
{ text: "Tú me enseñaste a querer", time: 90 },
{ text: "Me enseñaste a bailar", time: 94 },
{ text: "Yeah-yeah-yeah-yeah, ey", time: 97 },
{ text: "Dime cómo le hago pa' olvidarte", time: 100 },
{ text: "Hay un paso nuevo que quiero enseñarte", time: 103 },
{ text: "En las noche', ya ni puedo dormir", time: 106 },
{ text: "Lo que hago es soñarte", time: 110 },
{ text: "No, no te puedo olvidar", time: 114 },
{ text: "No, no te puedo borrar", time: 117 },
{ text: "Tú me enseñaste a querer", time: 120 },
{ text: "Me enseñaste a bailar", time: 124 },
{ text: "Como tú me besabas", time: 127 },
{ text: "Como yo te lo hacía", time: 130 },
{ text: "Como tú me mirabas", time: 133 },
{ text: "Bellaquito, me ponía", time: 137 },
{ text: "Se siente feo no tenerte cerquita", time: 140 },
{ text: "La nueva mama bien, pero no es tu boquita", time: 144 },
{ text: "Mi diabla, mi ángel, mi loquita", time: 147 },
{ text: "Mi diabla, mi ángel, mi loquita, ey", time: 151 },
{ text: "Esto suena cabrón", time: 154 },
{ text: "Vamo' a hacerlo otra ve'", time: 156 },
{ text: "Como anoche, como anoche", time: 158 },
{ text: "Tan-tan, ta-na-na, ta-na-na", time: 161 },
{ text: "Aprieta, chamaquito, aprieta", time: 164 },
{ text: "(¡Ahí, ahí, ahí, vamo' allá!)", time: 167 },
{ text: "No, no te puedo olvidar", time: 171 },
{ text: "No, no te puedo borrar", time: 174 },
{ text: "Tú me enseñaste a querer", time: 177 },
{ text: "Me enseñaste a bailar", time: 181 },
{ text: "Ay, yo con cualquiera me puedo acostar", time: 184 },
{ text: "Pero no con cualquiera quiero despertar", time: 187 },
{ text: "Solo con usted, con usted", time: 190 },
{ text: "Yo bailo con usted, na' más con usted", time: 194 },
{ text: "Un beso donde estés, donde estés, bebé", time: 197 },
{ text: "No, no te puedo olvidar", time: 201 },
{ text: "No, no te puedo borrar", time: 204 },
{ text: "Tú me enseñaste a querer", time: 207 },
{ text: "Me enseñaste a bailar", time: 211 },
{ text: "Y yo tenía muchas novia'", time: 214 },
{ text: "Pero como tú, ninguna", time: 217 },
{ text: "Ya no tengo mi Sol, me paso en la Luna", time: 220 },
{ text: "Si te pienso, me tiro de una", time: 224 },
{ text: "Eh-eh, mi diabla, mi ángel, mi loquita", time: 227 },
{ text: "Mi diabla, mi ángel, mi loquita, eh-eh", time: 231 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 5000);