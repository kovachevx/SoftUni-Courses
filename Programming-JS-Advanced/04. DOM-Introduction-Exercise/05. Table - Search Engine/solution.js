function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let soughtText = document.getElementById("searchField").value;
      let students = document.querySelectorAll("tbody tr");
      for (let student of students) {
         student.classList.remove('select');
         if (student.textContent.includes(soughtText)) {
            student.className = 'select';
         }
      }
   }
}