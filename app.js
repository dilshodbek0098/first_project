function solve() {
    let number1 = parseFloat(document.querySelector('#number_1').value);
    let number2 = parseFloat(document.querySelector('#number_2').value);
    let operationType = document.querySelector('#operation_type').selectedIndex;

    if(number1 != '' && number2 != '') {
        switch(operationType) {
            case 0:
                document.querySelector('#result').innerHTML = `${number1} + ${number2} = ${number1 + number2}`
                break;
            case 1:
                document.querySelector('#result').innerHTML = `${number1} - ${number2} = ${number1 - number2}`
                break;
            case 2:
                document.querySelector('#result').innerHTML = `${number1} * ${number2} = ${number1 * number2}`
                break;
            case 3:
                document.querySelector('#result').innerHTML = `${number1} / ${number2} = ${Math.round(number1 / number2)}`
                break;
        }
    }   
}