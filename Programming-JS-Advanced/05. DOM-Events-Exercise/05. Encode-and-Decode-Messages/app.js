function encodeAndDecodeMessages() {
    let encodingBtn = document.querySelectorAll('button')[0];
    let decodingBtn = document.querySelectorAll('button')[1];
    encodingBtn.addEventListener('click', encode);
    decodingBtn.addEventListener('click', decode);

    let textToEncode = document.querySelectorAll('textarea')[0];
    let textToDecode = document.querySelectorAll('textarea')[1];

    function encode() {
        let encodedText = '';
        for (let char of textToEncode.value) {
            encodedText += String.fromCharCode(char.charCodeAt(0) + 1)
        }
        textToDecode.value = encodedText;
        textToEncode.value = '';
    }

    function decode() {
        let decodedText = '';
        for (let char of textToDecode.value) {
            decodedText += String.fromCharCode(char.charCodeAt(0) - 1)
        }
        textToDecode.value = decodedText;
    }
}