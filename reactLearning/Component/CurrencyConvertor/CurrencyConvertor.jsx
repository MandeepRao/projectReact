import { useState } from "react";
import CurrencyInputBox from "./CurrencyInputBox";
import UseCurrencyInfo from "../../src/CurrencyApi/UseCurrencyInfo";

const CurrencyConvertor = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = UseCurrencyInfo(from);
    // const currencyInfo = "";
    const options = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }
    return (
        <div className="bg-cover w-full h-screen flex justify-center items-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg)` }}>
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blue-sm bg-white/30 ">
                <h1 className="text-white text-center">Currency Convertor</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    convert()
                }}>
                    <div className="w-full mb-1">
                        <CurrencyInputBox label="From"
                            className
                            amountDisabled
                            amount={amount}
                            onAmountChange={(amount) => { setAmount(amount) }}
                            selectedCurrency={from}
                            onCurrencyChange={(currency) => { setFrom(currency) }}
                            currencyDisabled
                            currencyOption={options} />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >Swap</button>

                    </div>
                    <div className="w-full mb-1">
                        <CurrencyInputBox label="To"
                            className
                            amountDisabled
                            amount={convertedAmount}
                            onAmountChange={(amount) => { setAmount(amount) }}
                            selectedCurrency={to}
                            onCurrencyChange={(currency) => { setTo(currency) }}
                            currencyDisabled
                            currencyOption={options} />
                    </div>
                    <button
                        type='submit'
                        className="cursor-pointer w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    )
};
export default CurrencyConvertor;
