import React, {useState} from 'react';
import './App.css';

function App() {

    let [rate1, setRate1] = useState();
    let [amount1, setAmount1] = useState();
    let [rate2, setRate2] = useState();
    let [amount2, setAmount2] = useState();
    let [rate3, setRate3] = useState();
    let [amount3, setAmount3] = useState();
    let [rate4, setRate4] = useState();
    let [amount4, setAmount4] = useState();
    let [rate5, setRate5] = useState();
    let [amount5, setAmount5] = useState();
    let [sellingRate, setSellingRate] = useState();
    const [Add, setAdd] = useState('');

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


        let Total = ((amount1 / rate1) + (amount2 / rate2) + (amount3 / rate3) + (amount4/ rate4) + (amount5 / rate5) ) * sellingRate;
        let Add = Total - (amount1 + amount2 + amount3 + amount4 + amount5)
        console.log(typeof (Add));
        setAdd(parseFloat(Add).toFixed(2))

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
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount1}
                                   onChange={(e) => setAmount1(e.target.value)}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 2nd round</label>
                            <input type="text" placeholder='Enter Rate' value={rate2}
                                   onChange={(e) => setRate2(e.target.value)}/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount2}
                                   onChange={(e) => setAmount2(e.target.value)}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 3rd round</label>
                            <input type="text" placeholder='Enter Rate' value={rate3}
                                   onChange={(e) => setRate3(e.target.value)}/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount3}
                                   onChange={(e) => setAmount3(e.target.value)}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 4th round</label>
                            <input type="text" placeholder='Enter Rate' value={rate4}
                                   onChange={(e) => setRate4(e.target.value)}/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount4}
                                   onChange={(e) => setAmount4(e.target.value)}/>
                        </div>
                    </div>
                    <div className='rowC'>
                        <div className='rateCol'>
                            <label>Rate - 5th round</label>
                            <input type="text" placeholder='Enter Rate' value={rate5}
                                   onChange={(e) => setRate5(e.target.value)}/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" placeholder='Enter Price' value={amount5}
                                   onChange={(e) => setAmount5(e.target.value)}/>
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
                    <h3>Your Profit is: {Add}</h3>
                </div>
            </div>
        </div>
    );
}

export default App;