import React, { useEffect, useState } from 'react';

const Calculator = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("+");
    const [count, setCount] = useState(0);

    const handleOperatorChange = (newOperator) => {
        setOperator(newOperator);
    };

    const handleCalculate = () => {
        switch (operator) {
            case "+":
                setResult(parseFloat(firstValue) + parseFloat(secondValue));
                break;
            case "-":
                setResult(parseFloat(firstValue) - parseFloat(secondValue));
                break;
            case "*":
                setResult(parseFloat(firstValue) * parseFloat(secondValue));
                break;
            case "/":
                setResult(parseFloat(firstValue) / parseFloat(secondValue));
                break;
            default:
                setResult(0);
        }
        setCount(count + 1);
    };

    const handleReset = () => {
        setFirstValue(0);
        setSecondValue(0);
        setResult(0);
        setOperator("+");
    };

    useEffect(() => {
        if (count > 0) {
            setCount(count + 1);
        }
    }, [result]);

    return (
        <div>
            <p>Total calculations: {count}</p>
            <div>
                <input type="number" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} /> {operator}  
                <input type="number" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} />
            </div>
            <div>Change operator here:</div>
            <button onClick={() => handleOperatorChange("+")}>+</button>
            <button onClick={() => handleOperatorChange("-")}>-</button>
            <button onClick={() => handleOperatorChange("*")}>*</button>
            <button onClick={() => handleOperatorChange("/")}>/</button>
            
            <button onClick={handleCalculate}>Calculate</button>
            <button onClick={handleReset}>Reset</button>
            <h3>Result: {result}</h3>
        </div>
    );
};

export default Calculator;
