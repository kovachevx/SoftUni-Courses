function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = {};
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      for (const restInfo of input) {
         let [restName, workerDetails] = restInfo.split(' - ');
         let workers = workerDetails.split(', ');

         for (const workerAndSalary of workers) {
            let [worker, salary] = workerAndSalary.split(' ');
            salary = Number(salary);

            if (!restaurants.hasOwnProperty(restName)) {
               restaurants[restName] = {};
               restaurants[restName]['workers'] = {};
               restaurants[restName]['avgSalary'] = 0;
               restaurants[restName]['bestSalary'] = 0;
            }

            restaurants[restName].workers[worker] = salary;
            restaurants[restName].bestSalary = Number(Object.values(restaurants[restName].workers).reduce((a, b) => a > b ? a : b));
            restaurants[restName].avgSalary = Number(Object.values(restaurants[restName].workers).reduce((a, b) => a + b)) / Object.values(restaurants[restName].workers).length;
         }
      }

      let restArray = Object.keys(restaurants);
      restArray.sort((a, b) => restaurants[b].avgSalary - restaurants[a].avgSalary);

      let bestRestaurant = restArray[0];

      let workerEntries = Object.keys(restaurants[bestRestaurant].workers);
      workerEntries.sort((a, b) => restaurants[bestRestaurant].workers[b] - restaurants[bestRestaurant].workers[a]);

      let output = `Name: ${bestRestaurant} Average Salary: ${restaurants[bestRestaurant].avgSalary.toFixed(2)} Best Salary: ${restaurants[bestRestaurant].bestSalary.toFixed(2)}`
      let output2 = [];

      for (const worker of workerEntries) {
         output2.push(`Name: ${worker} With Salary: ${restaurants[bestRestaurant].workers[worker]}`);
      }

      output2 = output2.join(' ');

      document.querySelector('#bestRestaurant p').textContent = output;
      document.querySelector('#workers p').textContent = output2;
   }
}