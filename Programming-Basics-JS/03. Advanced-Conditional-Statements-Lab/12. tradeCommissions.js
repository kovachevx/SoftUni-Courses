function tradeCommissions(input) {

    let city = input[0];
    let volumeSales = Number(input[1]);

    if (volumeSales >= 0 && volumeSales <= 500) {
        switch (city) {
            case 'Sofia': console.log((volumeSales * 0.05).toFixed(2)); break;
            case 'Varna': console.log((volumeSales * 0.045).toFixed(2)); break;
            case 'Plovdiv': console.log((volumeSales * 0.055).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (volumeSales > 500 && volumeSales <= 1000) {
        switch (city) {
            case 'Sofia': console.log((volumeSales * 0.07).toFixed(2)); break;
            case 'Varna': console.log((volumeSales * 0.075).toFixed(2)); break;
            case 'Plovdiv': console.log((volumeSales * 0.08).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (volumeSales > 1000 && volumeSales <= 10000) {
        switch (city) {
            case 'Sofia': console.log((volumeSales * 0.08).toFixed(2)); break;
            case 'Varna': console.log((volumeSales * 0.10).toFixed(2)); break;
            case 'Plovdiv': console.log((volumeSales * 0.12).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else if (volumeSales > 10000) {
        switch (city) {
            case 'Sofia': console.log((volumeSales * 0.12).toFixed(2)); break;
            case 'Varna': console.log((volumeSales * 0.13).toFixed(2)); break;
            case 'Plovdiv': console.log((volumeSales * 0.145).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error');
    }
}
tradeCommissions(['Varna', 20]);