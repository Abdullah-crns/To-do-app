import { useState } from 'react';
import './css/MainBody.css';

function Mainbody() {
    const [selected, setSelected] = useState(null);
    const [items, setItems] = useState([]);
    const [dates, setDates] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '' && inputValue2.trim() !== '') {
            setItems([...items, inputValue]);
            setDates([...dates, inputValue2]);
            setInputValue('');
            setInputValue2('');
        }
    };

    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index));
        setDates(dates.filter((_, i) => i !== index));
    };

    const handleSelect = (index) => {
        setSelected(selected === index ? null : index); // Toggle selection
    };

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnChangeDate = (e) => {
        setInputValue2(e.target.value);
    };

    return (
        <div className='body'>
            <div className="container gt">
                <div className="form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleOnChange}
                        onKeyDown={handleKeyDown}
                        className="my-2 input1 w-50"
                        placeholder='What is the task for today?'
                    />
                    <input
                        type="date"
                        value={inputValue2}
                        onChange={handleOnChangeDate}
                        onKeyDown={handleKeyDown}
                        className="input2 w-25"
                    />
                    <button className='bt1 w-25' onClick={handleAddItem}>ADD</button>
                </div>
            </div>

            <div className='container c2 ml-1 mt-5 p-0'>
                <ul className='m-0 p-3'>
                    {items.map((item, index) => (
                        <div key={index} className='alert mx-3'>
                            <div className='d-flex justify-content-between'>
                                <span
                                    onClick={() => handleSelect(index)}
                                    className={`fw-bold white cp ${selected === index ? 'selected' : ''}`}
                                >
                                    {item}
                                </span>
                                <span id='he'>
                                    <span className={`fw-bold white cp ${selected === index ? 'selected' : ''}`}>
                                        {dates[index]}
                                    </span>
                                </span>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className='rounded bg-purp'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Mainbody;
