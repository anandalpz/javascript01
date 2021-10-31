var str = "";
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3 - i; j++) {
        str += " ";

    }
    for (let k = 0; k < ((2 * i) - 1); k++) {
        if (i === 1 || i === 3) {
            str += "*";
        }
        else {
            if ((k === 0) || (k === ((2 * i) - 2))) {
                str += "*";
            }
            else {
                str += " ";

            }
        }

    }
    // str+="*";
    str += "\n";
}
console.log(str);