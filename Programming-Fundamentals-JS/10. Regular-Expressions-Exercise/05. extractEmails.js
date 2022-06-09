function extractEmails(input) {
    let regex = /(?<!\S)([a-z]+)[\.\-_]*([a-z]+)*@([a-z]+)([\.\-\w])*\.[a-z]+\b/g;
    let match = input.match(regex);
    for (let line of match) {
        console.log(line);
    }
}
extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')