const { Html5QrcodeScanner } = require("html5-qrcode");
const result = document.getElementById("result");
function onScanSuccess(decodedText, decodedResult) {
  // Affiche le texte scanné
  result.classList.remove('hidden');
  result.classList.add('spin-horizontal');
  window.setTimeout(() => {
    result.classList.add('hidden');
  }, 13000);
  result.innerText = `${decodedText}`;

}

function onScanFailure(error) {
  // Optionnel : affiche les erreurs de scan (utile en debug)
  // console.warn(`Échec du scan: ${error}`);
}

const scanner = new Html5QrcodeScanner(
  "reader", 
  {
    fps: 15,
    qrbox: 250,
    rememberLastUsedCamera: false,
    showTorchButtonIfSupported: true,
  },
  /* verbose= */ false
);

// Lance le scanner
scanner.render(onScanSuccess, onScanFailure);