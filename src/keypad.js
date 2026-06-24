import './keypad.css'

function Keypad({ handleClick, handleEqual, handleClear }) {
    return (
        <div className='button-grid'>
            <div className='row'>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button className="operator" onClick={() => handleClick("/")}>÷</button>
            </div>
            <div className='row'>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button className="operator" onClick={() => handleClick("*")}>×</button>
            </div>
            <div className='row'>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button className="operator" onClick={() => handleClick("-")}>−</button>
            </div>
            <div className='row'>
                <button onClick={() => handleClick("0")}>0</button>
                <button className="equal" onClick={() => handleEqual("=")}>=</button>
                <button className="clear" onClick={() => handleClear("C")}>C</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>
            </div>
        </div>
    )
}

export default Keypad;