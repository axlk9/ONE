document.getElementById('encrypt-button').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const encryptedText = encrypt(text);
    displayResult(encryptedText);
});

document.getElementById('decrypt-button').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const decryptedText = decrypt(text);
    displayResult(decryptedText);
});

document.getElementById('copy-button').addEventListener('click', () => {
    const resultMessage = document.getElementById('result-message');
    copyToClipboard(resultMessage.textContent);
});

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function displayResult(result) {
    const outputSection = document.querySelector('.output-section');
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = result || 'Ningún mensaje fue encontrado';
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles');
}

document.getElementById('copy-button').addEventListener('click', function() {
    var resultMessage = document.getElementById('result-message').innerText;
    navigator.clipboard.writeText(resultMessage).then(function() {
        alert('Texto copiado al portapapeles');
    }, function() {
        alert('Error al copiar el texto');
    });
});
