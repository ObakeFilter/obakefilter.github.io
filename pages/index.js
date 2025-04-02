import { useState } from 'react';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleInputChange = (event) => {
        const newInput = event.target.value;
        setInputText(newInput);
        const replacedText = newInput.replace(/\n/g, '\t');
        setOutputText(replacedText);
    };

    return (
        <div>
            <h1>Text Transpose</h1>
            <div>
                <label htmlFor="input">Input:</label>
                <textarea
                    id="input"
                    value={inputText}
                    onChange={handleInputChange}
                    style={{ width: '400px', height: '200px', display: 'block', marginBottom: '10px' }}
                />
            </div>
            <div>
                <label htmlFor="output">Output:</label>
                <textarea
                    id="output"
                    value={outputText}
                    readOnly
                    style={{ width: '400px', height: '200px', display: 'block' }}
                />
            </div>
        </div>
    );
}