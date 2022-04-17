function hospital(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        let patientsADay = Number(input[index]);
        index++
        if ((i % 3 === 0 && untreatedPatients > treatedPatients)) {
            doctors++;
        }
        if (doctors >= patientsADay) {
            treatedPatients += patientsADay
        } else {
            treatedPatients += doctors;
            untreatedPatients += patientsADay - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([6, 25, 25, 25, 25, 25, 2]);