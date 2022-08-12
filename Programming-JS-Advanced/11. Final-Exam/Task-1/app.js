window.addEventListener("load", solve);

function solve() {

  let makeEl = document.getElementById('make');
  let modelEl = document.getElementById('model');
  let yearEl = document.getElementById('year');
  let fuelEl = document.getElementById('fuel');
  let originalCostEl = document.getElementById('original-cost');
  let sellingPriceEl = document.getElementById('selling-price');

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublish)

  let totalProfit = 0;

  function onPublish(ev) {
    ev.preventDefault();
    let make = makeEl.value;
    let model = modelEl.value;
    let year = yearEl.value;
    let fuel = fuelEl.value;
    let originalCost = originalCostEl.value;
    let sellingPrice = sellingPriceEl.value;

    if (!make || !model || !year || !fuel || !originalCost || !sellingPrice || originalCost > sellingPrice) {
      return;
    }

    makeEl.value = '';
    modelEl.value = '';
    yearEl.value = '';
    fuelEl.value = '';
    originalCostEl.value = '';
    sellingPriceEl.value = '';

    let tbody = document.getElementById('table-body');
    let tr = document.createElement('tr');
    tr.classList.add("row");
    let td1 = document.createElement('td');
    td1.textContent = make;
    let td2 = document.createElement('td');
    td2.textContent = model;
    let td3 = document.createElement('td');
    td3.textContent = year;
    let td4 = document.createElement('td');
    td4.textContent = fuel;
    let td5 = document.createElement('td');
    td5.textContent = originalCost;
    let td6 = document.createElement('td');
    td6.textContent = sellingPrice;

    let td7 = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', onEdit);
    td7.appendChild(editBtn);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', onSell);
    td7.appendChild(sellBtn)

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tbody.appendChild(tr);


    function onEdit() {

      makeEl.value = make;
      modelEl.value = model;
      yearEl.value = year;
      fuelEl.value = fuel;
      originalCostEl.value = originalCost;
      sellingPriceEl.value = sellingPrice;

      tr.remove();

    }

    function onSell() {
      let profit = sellingPrice - originalCost;

      totalProfit += Number(profit);

      let carsList = document.getElementById('cars-list');
      let li = document.createElement('li');
      li.classList.add("each-list");
      let span1 = document.createElement('span');
      span1.textContent = `${make} ${model}`
      let span2 = document.createElement('span');
      span2.textContent = year;
      let span3 = document.createElement('span');
      span3.textContent = profit;

      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);

      carsList.appendChild(li);
      tr.remove();

      let profitElement = document.getElementById('profit');
      profitElement.textContent = totalProfit.toFixed(2);

    }
  }
}
