function areaAndVolumeCalculator(area, vol, input) {
    const data = JSON.parse(input);
    let result = data.map(cube => {
        let cubeData = {
            area: area.call(cube),
            volume: vol.call(cube)
        }
        return cubeData;
    });
    return result;
}

// (area, vol, input) => JSON.parse(input).map(cube => ({
//     area: area.call(cube),
//      volume: vol.call(cube)
//  }));


areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};