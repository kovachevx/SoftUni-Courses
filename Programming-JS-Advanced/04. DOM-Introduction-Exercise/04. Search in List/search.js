function search() {
   let matches = 0;
   let towns = document.querySelectorAll('ul li');
   let input = document.getElementById("searchText").value;
   let result = document.getElementById('result');

   for (let town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';
   }

   for (let town of towns) {
      if (town.textContent.includes(input)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`;
}