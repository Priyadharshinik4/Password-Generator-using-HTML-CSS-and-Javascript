function generate() {
    let input = document.getElementById("input");
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    input.value = pass;
    let range = document.getElementById("range");
    let box = document.getElementById("box");
    box.innerText = 8;
    range.value=8;
}




