import React, { useContext, useState } from 'react'
import './Input.css'
import { CoinContext } from '../../context/CoinContext';

function Input() {

    const { allCoins, setDisplayCoin } = useContext(CoinContext);
    const [input, setInput] = useState('');


    const inputHandler = (event) => {
        setInput(event.target.value);
        if (event.target.value === '') {
            setDisplayCoin(allCoins);
        }
    }
    const searchHandler = async (event) => {
        event.preventDefault();
        const coins = await allCoins.filter((item) => {
            return item.name.toLowerCase().includes(input.toLocaleLowerCase())
        })
        setDisplayCoin(coins);
    }
    return (
        <div className='hero'>
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace.
                Sign up to explore more about cryptos.</p>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler}
                    value={input}
                    type="text" placeholder='Search crypto...'
                    list='coinlist' />

                <datalist id='coinlist'>
                    {
                        allCoins.map((item, index) => (
                            <option key={index} value={item.name} />
                        ))
                    }
                </datalist>

                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Input
