import React, { useContext, useState, useEffect } from 'react'
import { CoinContext } from '../../context/CoinContext';
import './LayoutTable.css'
import { Link } from 'react-router-dom';

function LayoutTable() {
    const { allCoins, currency, setDisplayCoin, displayCoin } = useContext(CoinContext);


    useEffect(() => {
        setDisplayCoin(allCoins);
    }, [allCoins])

    return (

        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{ textAlign: 'center' }}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>

            {
                displayCoin.slice(0, 10).map((item, index) => {
                    return (
                        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </Link>
                    )
                })
            }

        </div>

    )
}

export default LayoutTable
