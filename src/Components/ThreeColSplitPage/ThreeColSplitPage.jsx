import React,{useEffect, useState} from "react";
import "./ThreeColSplitPage.scss";
import { Line } from "react-chartjs-2";
import { Switch } from "react-materialize";

export const ThreeColSplitPage = (props) => {
    
    const [chartData, setChartData] = useState('individual')

    let currentChartData = props.data[chartData][0]
    let chartColor = {
        individual: 'rgb(133,209,216,0.5)',
        all: 'rgb(76,106,196,0.5)'
    }
    let style = {
        individual: {
            color:'#85D1D8',
            border: '1px solid #85D1D8',
        },
        all: {
            color:'#4C6AC4',
            border: '1px solid #4C6AC4',
        },
    }
    const [data,setData] = useState({})
    useEffect(()=> {
        let data = {
            labels: currentChartData.itemLabel,
            datasets: [
              {
                label: chartData,
                data: currentChartData.itemPrice,
                fill: true,
                backgroundColor: chartColor[chartData],
                borderColor: chartColor[chartData],
              },
            ],
        };
        setData(data)
    },[chartData])

    const toggleHandler = () => {        
        if (chartData === 'individual'){
            setChartData('all')
        }else if (chartData === 'all') {
            setChartData('individual')
        }
    }
      
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio : true
      };

    return (
        <div className='mainContainer'>
            <div className='column column1 '>
                {chartData? <Line data = {data} options={options}/> : ''}
            </div>
            <div className='column column2 '>
                <div className = 'center-align'>
                    <Switch
                        id="Switch-1"
                        offLabel="Individual"
                        onChange={()=>toggleHandler()}
                        onLabel="All"
                        />
                </div>
                <div className='itemInfo' style={style[chartData]}>
                    <h1>{props.data.itemName}</h1>
                    <div >
                    <p>Average price: {currentChartData.averagePrice}</p>
                    <p>Minimum price: {currentChartData.minPrice}</p>
                    <p>Maximum price: {currentChartData.maxPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};