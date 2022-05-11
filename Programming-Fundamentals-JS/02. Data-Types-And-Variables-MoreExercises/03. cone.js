function cone(radius, height) {

    let b = Math.PI * (radius * radius);
    let volume = (b * height) / 3;

    console.log(`volume = ${volume.toFixed(4)}`);

    let lPow = radius * radius + height * height;
    let l = Math.sqrt(lPow);
    let area = Math.PI * radius * (radius + l);

    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);