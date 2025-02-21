let memory = 0;
        function appendValue(value) {
            let display = document.getElementById("display");
            if (display.innerText === "0") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
        function clearDisplay() {
            document.getElementById("display").innerText = "0";
        }
        function calculate() {
            let expression = document.getElementById("display").innerText;
            if (expression.includes("√")) {
                expression = expression.replace("√", "Math.sqrt(") + ")";
            }
            document.getElementById("display").innerText = eval(expression);
        }
        function memoryAdd() {
            memory += parseFloat(document.getElementById("display").innerText);
        }
        function memorySubtract() {
            memory -= parseFloat(document.getElementById("display").innerText);
        }
        function memoryRecall() {
            document.getElementById("display").innerText = memory;
        }
        function memoryClear() {
            memory = 0;
        }