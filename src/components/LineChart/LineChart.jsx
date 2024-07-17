import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

function LineChart({ historicalData }) {
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let datacpy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                datacpy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
            })
            setData(datacpy);
        }
    }, [historicalData])
    return (

        <Chart
            chartType='LineChart'
            data={data}
            height="100%"
            legendToggle />
    )
}

export default LineChart
