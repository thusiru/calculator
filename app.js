$(document).on("buttonPressed", function (e) {
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
  "#btn-minus": "-",
  "#btn-multiply": "*",
  "#btn-devide": "/",
  "#btn-modulo": "%",
  "#btn-dot": ".",
};

function calculate(buttonID) {
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
        // Handle expressions with parentheses before evaluation
        let evalExpression = math.replace(/\(-(\d+\.?\d*)\)/g, '-$1');
        math = eval(evalExpression).toString();
      } else {
      }
    }
  }
  $("#output > p").text(math);
}

function addSign(expression) {
  if (!expression) return '0';
  
  // If the expression is already a negative number in parentheses
  if (expression.match(/^\(-\d+\.?\d*\)$/)) {
    // Remove the parentheses and negative sign
    return expression.slice(2, -1);
  }
  
  // If it's just a regular number (positive or with operators)
  if (expression.match(/^\d+\.?\d*$/)) {
    // Add parentheses and negative sign
    return `(-${expression})`;
  }
  
  // For expressions with operators, handle the last number
  const parts = expression.split(/([+\-*/%])/);
  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1];
    
    // If the last part is a negative number in parentheses
    if (lastPart.match(/^\(-\d+\.?\d*\)$/)) {
      parts[parts.length - 1] = lastPart.slice(2, -1);
    } else if (lastPart.match(/^\d+\.?\d*$/)) {
      parts[parts.length - 1] = `(-${lastPart})`;
    }
    
    return parts.join('');
  }
  
  return expression;
}