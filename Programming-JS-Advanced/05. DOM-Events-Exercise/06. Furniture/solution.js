function solve() {

  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(x => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = x.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(x.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(x.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      td5.appendChild(checkbox);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    })
  }

  function buy(ev) {
    let boughtFurniture = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let decFactorCounter = 0;
    let marked = document.querySelectorAll('input');
    for (let x of marked) {
      if (x.checked) {
        let product = x.parentElement.parentElement;
        let productName = product.children[1].firstChild.textContent;
        boughtFurniture.push(productName);
        let price = product.children[2].firstChild.textContent;
        let decFactor = product.children[3].firstChild.textContent;
        avgDecFactor += Number(decFactor);
        decFactorCounter++;
        totalPrice += Number(price);
      }
    }
    avgDecFactor = avgDecFactor / decFactorCounter;
    let output = document.querySelectorAll('textarea')[1];
    output.value = `Bought furniture: ${boughtFurniture.join(', ')}\r\n`
    output.value += `Total price: ${totalPrice.toFixed(2)}\r\n`
    output.value += `Average decoration factor: ${avgDecFactor}`
  }
}

Unexpected error: Output textarea is different: expected 
'Bought furniture: Tablet, Vase.\nTotal price: 2015.00\nAverage decoration factor: 7.6' to equal 
'Bought furniture: Tablet, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6'
