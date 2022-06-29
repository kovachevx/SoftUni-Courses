function solve() {
  let text = document.getElementById("input").value;
  let sentences = text.split('.').filter(s => s.length !== 0);
  let output = document.getElementById("output");

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphText = '';
    paragraphText += sentences[i] + '.';
    if (sentences[i + 1]) {
      paragraphText += ' ' + sentences[i + 1] + '.';
    }
    if (sentences[i + 2]) {
      paragraphText += ' ' + sentences[i + 2] + '.';
    }

    let p = document.createElement('p');
    p.textContent = paragraphText;
    output.appendChild(p);
  }
}