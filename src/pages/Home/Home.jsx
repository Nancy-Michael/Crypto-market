import React from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import Input from '../../components/Input/Input';
import LayoutTable from '../../components/LayoutTable/LayoutTable';

const Home = () => {

    return (
        <div className='home'>
            <div className="hero">
                <Input />
            </div>
            <LayoutTable />
        </div>
    )
}

export default Home
