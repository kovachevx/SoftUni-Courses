function sumTable() {
    const rows = Array.from(document.querySelectorAll("tr")).slice(1, -1);
    let total = 0;
    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        total += value;
    }
    document.getElementById("sum").textContent = total;
}