function extractText() {
    const listedItems = document.getElementById("items").textContent;
    const result = document.getElementById("result");
    result.textContent = listedItems;
    return result;
}