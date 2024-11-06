
import '../stylesheets/buttons.css';

const Buttons = ({increment, decrement, reset}) => {
    return (
        <>
            <button className='control' onClick={decrement}>-</button>
            <button className='reset' onClick={reset}>Reset</button>
            <button className='control' onClick={increment}>+</button>
        </>
    )

}

export default Buttons;