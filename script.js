function getHistory() {
  return document.querySelector(".history-value").innerText;
}

function printHistory(num) {
  return (document.querySelector(".history-value").innerText = num);
}

function getOutput() {
  return document.querySelector(".output-value").innerText;
}

function printOutput(num) {
  return (document.querySelector(".output-value").innerText = num);
}

const operator = document.querySelectorAll(".operator");
for (const ops of operator) {
  ops.addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      let output = getOutput();
      output = output.slice(0, -1);
      printOutput(output);
    } else {
      let output = getOutput();
      let history = getHistory();

      if (output == "" && history != "") {
        // removing last operator
        if (isNaN(history[history.length - 1])) {
          history = history.slice(0, -1);
        }
      }

      if (output != "" || history != "" || this.id == "-") {
        history = history + output;
        if (this.id == "%") {
          let percent = output / 100;
          printOutput(percent);
        } else if (this.id == "=") {
          // calculating value and clear the history
          let result = eval(history);
          printHistory("");
          printOutput(result);
          //printOutput("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

const number = document.querySelectorAll(".number");
for (const item of number) {
  item.addEventListener("click", function () {
    let output = getOutput();
    output = output + this.id;
    printOutput(output);
    console.log(getOutput());
  });
}
