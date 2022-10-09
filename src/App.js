import React, {useState} from 'react';
import './App.css';

function App() {

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

    function handleChange1(evt) {
        setAmount1(evt.target.value);
        setCoin1(parseFloat(evt.target.value / rate1).toFixed(2));
    }

    function handleChange2(evt) {
        setAmount2(evt.target.value);
        setCoin2(parseFloat(evt.target.value / rate2).toFixed(2));
    }

    function handleChange3(evt) {
        setAmount3(evt.target.value);
        setCoin3(parseFloat(evt.target.value / rate3).toFixed(2));
    }

    function handleChange4(evt) {
        setAmount4(evt.target.value);
        setCoin4(parseFloat(evt.target.value / rate4).toFixed(2));
    }

    function handleChange5(evt) {
        setAmount5(evt.target.value);
        setCoin5(parseFloat(evt.target.value / rate5).toFixed(2));
    }

    const calcSum = (event) => {
        event.preventDefault()
        console.log(event);

        rate1 = rate1 ? parseFloat(rate1) : 0;
        amount1 = amount1 ? parseFloat(amount1) : 0;
        rate2 = rate2 ? parseFloat(rate2) : 0;
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

    }

    return (
        <div className='app'>
            <div className='container'>
                <h2 className='center'>Profit Calculator</h2>
                <form onSubmit={calcSum}>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 1st round</label>
                            <input type="text" placeholder='Enter Rate' value={rate1}
                                   onChange={(e) => setRate1(e.target.value)}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' name='amount1' value={amount1}
                                   onChange={handleChange1}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' value={coin1}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 2nd round</label>
                            <input type="text" placeholder='Enter Rate' value={rate2}
                                   onChange={(e) => setRate2(e.target.value)}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount2}
                                   onChange={handleChange2}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' value={coin2}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 3rd round</label>
                            <input type="text" placeholder='Enter Rate' value={rate3}
                                   onChange={(e) => setRate3(e.target.value)}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount3}
                                   onChange={handleChange3}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' value={coin3}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 4th round</label>
                            <input type="text" placeholder='Enter Rate' value={rate4}
                                   onChange={(e) => setRate4(e.target.value)}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount4}
                                   onChange={handleChange4}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' value={coin4}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 5th round</label>
                            <input type="text" placeholder='Enter Rate' value={rate5}
                                   onChange={(e) => setRate5(e.target.value)}/>
                        </div>
                        <div className='rateCol'>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount5}
                                   onChange={handleChange5}/>
                        </div>
                        <div>
                            <label>Coins</label>
                            <input type="text" readOnly placeholder='No of Coins' value={coin5}/>
                        </div>
                    </div>
                    <div>
                        <label>Selling Rate</label>
                        <input type="text" placeholder='Enter Selling Rate' value={sellingRate}
                               onChange={(e) => setSellingRate(e.target.value)}/>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </form>
                <div className='center'>
                    <h3>Total Coins are: {coins}</h3>
                    <h3>Total Expense is: {spend}</h3>
                    <h3>Total Earning is: {earn}</h3>
                    <h3>Your Profit is: {profit}</h3>
                </div>
            </div>
        </div>
    );
}

export default App;