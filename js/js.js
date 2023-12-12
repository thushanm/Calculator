
let number = [];
let operator = "";
let result;

$(".btnNum").click(function () {
    let val = $(this).val();
    let input = $("#result").val();

    if (Number(input) || input === "") {
        $("#result").val($("#result").val() + val);
    } else {
        $("#result").val(val);
    }
});

$(".btnModule").click(function () {

    if (operator === "") {
        let mod = $("#result").val();
        let char = $(this).val();

        if (Number(mod)) {
            number.push(Number(mod));
            $("#result").val(char);
            operator = char;
        } else {
            $("#result").val(char);
            operator = char;
        }
    }
});

$(".btnEqual").click(function () {
    // handle equal button click
    if (operator !== "") {
        let mod1 = $("#result").val();
        number.push(Number(mod1));

        switch (operator) {
            case "+":
                result = number[0] + number[1];
                break;
            case "-":
                result = number[0] - number[1];
                break;
            case "*":
                result = number[0] * number[1];
                break;
            case "/":
                result = number[0] / number[1];
                break;
        }

        $("#result").val(result);

        number = [];
        operator = "";
        result = undefined;
    }
});

$(".btnClear").click(function () {
    $("#result").val("");
    number = [];
    operator = "";
});
