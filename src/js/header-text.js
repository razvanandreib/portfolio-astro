let greeting = [
    'hello',
    'bonjour',
    'guten tag',
    'namaste',
    'olá. hyālō',
    'nǐ hǎo'
]

let i = 0;

let intervalHeading = setInterval(() => {
    document.getElementById('ch-heading').innerHTML = greeting[i];
    if (i == (greeting.length - 1)) {
        i = 0;
    }
    else {
        i++;
    }
}, 3000);