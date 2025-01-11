$(document).on("buttonPressed", function(e) {
    const buttonID = e.originalEvent.detail;
    calculate(buttonID);
});

let math = "0";

const itemID = {
    "#btn-1": "1",
    "#btn-2": "2",
    "#btn-3": "3",
    "#btn-4": "4",
    "#btn-5": "5",
    "#btn-6": "6",
    "#btn-7": "7",
    "#btn-8": "8",
    "#btn-9": "9",
    "#btn-0": "0",
    "#btn-plus": "+",
    "#btn-minus":  "-",
    "#btn-multiply": "*",
    "#btn-devide": "/",
    "#btn-modulo": "%",
    "#btn-dot": "."
}

function calculate (buttonID) {
    if (Object.hasOwn(itemID, buttonID)) {
        if (math !== "0") {
            const operators = /[-+*%/]$/;
            if (math.match(operators) && itemID[buttonID].match(operators)) {
                math = math.slice(0, -1) + itemID[buttonID];
            } else if (math.match(/[.]/) && itemID[buttonID].match(/[.]$/)) {

            } else {
                math += itemID[buttonID];
            }
        } else {
            if (itemID[buttonID].match(/[-+*/%]/)) {
                math = "0";
            } else if (itemID[buttonID] === "0") {
                math = "0";
            } else if (itemID[buttonID] === ".") {
                math = "0.";
            } else {
                math = "";
                math += itemID[buttonID];
            }
        }
    } else {
        if (math !== "0") {
            if (buttonID === "#btn-ac") {
                if (math.length > 1) {
                    math = math.slice(0, -1);
                } else {
                    math = "0";
                }
            } else if (buttonID === "#btn-sign") {
                math = addSign(math);
            } else if (buttonID === "#btn-equal") {
                math = eval(math).toString();
            } else {
                
            }
        }
    }
    $("#output > p").text(math);
}

function addSign(math) {
    return math
}
