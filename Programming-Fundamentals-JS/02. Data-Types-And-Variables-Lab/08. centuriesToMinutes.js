function centuriesToMinutes(centuries) {

        let yearsPerCentury = centuries * 100;
        let daysPerCentury = Math.trunc(yearsPerCentury * 365.2422);
        let hoursPerCentury = daysPerCentury * 24;
        let minutesPerCentury = hoursPerCentury * 60;

        console.log(
                `${centuries} centuries = ${yearsPerCentury} years = ${daysPerCentury} days = ${hoursPerCentury} hours = ${minutesPerCentury} minutes`
        );
}
centuriesToMinutes(1);
centuriesToMinutes(5);