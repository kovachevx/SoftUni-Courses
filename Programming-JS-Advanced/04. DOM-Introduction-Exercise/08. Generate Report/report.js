function generateReport() {
    let checkboxes = document.querySelectorAll("thead tr th input");
    let selectedCols = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedCols.push(i);
        }
    }

    let result = [];
    let data = document.querySelectorAll("tbody tr");

    for (let i = 0; i < data.length; i++) {
        let row = data[i].children;
        let items = {};
        for (let j = 0; j < row.length; j++) {
            if (selectedCols.includes(j)) {
                let label = checkboxes[j].name;
                items[label] = row[j].textContent;
            }
        }
        result.push(items);
    }

    result = JSON.stringify(result);
    let output = document.getElementById('output');
    output.value = result;
}