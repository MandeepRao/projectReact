import { useCallback, useEffect, useRef, useState } from "react";

export default PassWordGen;
function PassWordGen() {
    const [password, setPassward] = useState('');
    const [length, setLength] = useState(10);
    const [numberCase, setNumberCase] = useState(false);
    const [charCase, setCharCase] = useState(false);
    const passWordRef = useRef(null);

    async function copyPasswordToClipBoard() {
        await window.navigator.clipboard.writeText(password);
        passWordRef.current.select();
    }

    const generatePass = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberCase) {
            str += "1234567890";
        }
        if (charCase) {
            str += "!@#$%^&*()_+";
        }
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(index);
        }
        setPassward(pass);
    }, [length, numberCase, charCase]);

    useEffect(() => {
        generatePass();
    }, [length, numberCase, charCase]);

    return (
        <div className="shadow-md w-full max-w-md mx-auto rounded-lg px-4 py-4 ">
            <h1 className="text-white py-3 text-center">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden">
                <input
                    ref={passWordRef}
                    type="text"
                    className="bg-white outline-none w-full py-1 px-3"
                    value={password}
                    placeholder="Password"
                    readOnly></input>
                <button
                    onClick={copyPasswordToClipBoard}
                    className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                >
                    copy
                </button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1 py-2">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => setLength(e.target.value)}
                        name=""
                        id="length"
                    />
                    <label htmlFor="length"> Length : {length}</label>
                </div>
                <div className="flex items-center gap-x-1 py-2">
                    <input
                        type="checkbox"
                        defaultChecked={numberCase}
                        className="cursor-pointer"
                        onChange={() => setNumberCase(!numberCase)}
                        name=""
                        id="numberAllow"
                    />
                    <label htmlFor="numberAllow"> {"Number"}</label>
                </div>
                <div className="flex items-center gap-x-1 py-2">
                    <input
                        type="checkbox"
                        defaultChecked={charCase}
                        className="cursor-pointer"
                        onChange={() => setCharCase(!charCase)}
                        name=""
                        id="charAllow"
                    />
                    <label htmlFor="charAllow"> {"Charactor"}</label>
                </div>

            </div>
        </div>
    )
};