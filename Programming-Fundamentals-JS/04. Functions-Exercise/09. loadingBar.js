function loadingBar(percentage) {

    function barCreation(percentage) {
        let bar = [];
        for (let i = 1; i <= 10; i++) {
            bar.push('.');
        }
        return bar;
    }

    function loadedPercentage(percentage) {
        let num = percentage / 10;
        let modifiedBar = barCreation(percentage);
        for (let i = 0; i < num; i++) {
            modifiedBar.splice(i, 1, '%');
        }
        let finalRes = modifiedBar.join('')
        return `[${finalRes}]`;
    }

    if (percentage < 100) {
        console.log(`${percentage}% ${loadedPercentage(percentage)}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(loadedPercentage(percentage));
    }

}
loadingBar(10);
loadingBar(30);
loadingBar(50);
loadingBar(100);
