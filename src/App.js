import React, {useState} from 'react';
import './App.css';
import { CSVLink } from "react-csv";

function App() {
    const [showText, setShowText] = useState(false);
    let [rate1, setRate1] = useState();
    let [amount1, setAmount1] = useState();
    let [coin1, setCoin1] = useState();
    let [rate2, setRate2] = useState();
    let [amount2, setAmount2] = useState();
    let [coin2, setCoin2] = useState();
    let [rate3, setRate3] = useState();
    let [amount3, setAmount3] = useState();
    let [coin3, setCoin3] = useState();
    let [rate4, setRate4] = useState();
    let [amount4, setAmount4] = useState();
    let [coin4, setCoin4] = useState();
    let [rate5, setRate5] = useState();
    let [amount5, setAmount5] = useState();
    let [coin5, setCoin5] = useState();
    let [sellingRate, setSellingRate] = useState();
    const [profit, setProfit] = useState('');
    const [spend, setSpend] = useState('');
    const [earn, setEarn] = useState('');
    const [coins, setCoins] = useState('');


    function handleChange(e){
        let name = e.target.name.replace(/[0-9]/g, '');
        let number = e.target.name.replace(/^\D+/g, '');

        if(name === 'rate'){
            switch(number) {
                case '1':
                    setRate1(e.target.value);
                    setCoin1(parseFloat( amount1/ e.target.value).toFixed(2));
                    break;
                case '2':
                    setRate2(e.target.value);
                    setCoin2(parseFloat( amount2/ e.target.value).toFixed(2));                    break;
                case '3':
                    setRate3(e.target.value);
                    setCoin3(parseFloat( amount3/ e.target.value).toFixed(2));
                    break;
                case '4':
                    setRate4(e.target.value);
                    setCoin4(parseFloat( amount4/ e.target.value).toFixed(2));
                    break;
                case '5':
                    setRate5(e.target.value);
                    setCoin5(parseFloat( amount5/ e.target.value).toFixed(2));
                    break;
                default:
                // code block
            }
        }

        if(name === 'amount'){
            switch(number) {
                case '1':
                    setAmount1(e.target.value);
                    setCoin1(parseFloat(e.target.value / rate1).toFixed(2));
                    break;
                case '2':
                    setAmount2(e.target.value);
                    setCoin2(parseFloat(e.target.value / rate2).toFixed(2));
                    break;
                case '3':
                    setAmount3(e.target.value);
                    setCoin3(parseFloat(e.target.value / rate3).toFixed(2));
                    break;
                case '4':
                    setAmount4(e.target.value);
                    setCoin4(parseFloat(e.target.value / rate4).toFixed(2));
                    break;
                case '5':
                    setAmount5(e.target.value);
                    setCoin5(parseFloat( e.target.value/ rate5).toFixed(2));
                    break;
                default:
                // code block
            }
        }
    }

    const calcSum = (event) => {
        event.preventDefault()

        rate1 = rate1 ? parseFloat(rate1) : 1;
        amount1 = amount1 ? parseFloat(amount1) : 0;
        rate2 = rate2 ? parseFloat(rate2) : 1;
        amount2 = amount2 ? parseFloat(amount2) : 0;
        rate3 = rate3 ? parseFloat(rate3) : 1;
        amount3 = amount3 ? parseFloat(amount3) : 0;
        rate4 = rate4 ? parseFloat(rate4) : 1;
        amount4 = amount4 ? parseFloat(amount4) : 0;
        rate5 = rate5 ? parseFloat(rate5) : 1;
        amount5 = amount5 ? parseFloat(amount5) : 0;
        sellingRate = sellingRate ? parseFloat(sellingRate) : 0;

        let coins = (amount1 / rate1) + (amount2 / rate2) + (amount3 / rate3) + (amount4 / rate4) + (amount5 / rate5);
        let TotalEarn = (coins) * sellingRate;
        let TotalSpend = (amount1 + amount2 + amount3 + amount4 + amount5);
        let profit = TotalEarn - TotalSpend;
        setSpend(parseFloat(TotalSpend).toFixed(2))
        setEarn(parseFloat(TotalEarn).toFixed(2))
        setProfit(parseFloat(profit).toFixed(2))
        setCoins(parseFloat(coins).toFixed(2))
        setShowText(true)

    }

    const headers = [
        { label: "Rate", key: "rate" },
        { label: "Amount", key: "amount" },
        { label: "Coins", key: "coins" },
        { label: "Selling Rate", key: "selling_rate" },
        { label: "Total Spend", key: "total_spend" },
        { label: "Total Earning", key: "total_earning" },
        { label: "Profit", key: "profit" },
        { label: "Total Coins", key: "total_coins" },
    ];

    const data = [
        { rate: rate1, amount: amount1, coins: coin1 ,selling_rate:sellingRate, total_spend:spend, total_earning: earn, profit: profit, total_coins: coins},
        { rate: rate2, amount: amount2, coins: coin2 },
        { rate: rate3, amount: amount3, coins: coin3 },
        { rate: rate4, amount: amount4, coins: coin4 },
        { rate: rate5, amount: amount5, coins: coin5 },

    ];

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'Coin_Report.csv'
    };

    return (
        <div className='app'>
            <div className='container'>
                <h2 className='center'>Profit Calculator</h2>
                <form onSubmit={calcSum}>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 1st round</label>
                            <input type="text" placeholder='Enter Rate' name='rate1' value={rate1}
                                   onChange={handleChange}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount1' value={amount1}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' name='coin1' value={coin1}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 2nd round</label>
                            <input type="text" placeholder='Enter Rate' name='rate2' value={rate2}
                                   onChange={handleChange}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount2' value={amount2}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' name='coin2' value={coin2}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 3rd round</label>
                            <input type="text" placeholder='Enter Rate' name='rate3' value={rate3}
                                   onChange={handleChange}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount3' value={amount3}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' name='coin3' value={coin3}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 4th round</label>
                            <input type="text" placeholder='Enter Rate' name='rate4' value={rate4}
                                   onChange={handleChange}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount4' value={amount4}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' name='coin4' value={coin4}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 5th round</label>
                            <input type="text" placeholder='Enter Rate' name='rate5' value={rate5}
                                   onChange={handleChange}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount5' value={amount5}
                                   onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' name='coin5' value={coin5}/>
                        </div>
                    </div>
                    <div>
                        <label>Selling Rate</label>
                        <input type="text" placeholder='Enter Selling Rate' name='sellingRate' value={sellingRate}
                               onChange={(e) => setSellingRate(e.target.value)}/>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </form>
                {showText && <div className='center'>
                    <h3>Total Coins are: {coins}</h3>
                    <h3>Total Expense is: {spend}</h3>
                    <h3>Total Earning is: {earn}</h3>
                    <h3>Your Profit is: {profit}</h3>
                    <a className='btn download'><CSVLink {...csvReport}>Export to CSV</CSVLink></a>
                </div>}
            </div>
        </div>
    );
}

export default App;