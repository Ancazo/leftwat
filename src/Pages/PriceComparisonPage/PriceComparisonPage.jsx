
import React,{useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer, 
    ThreeColSplitPage,

    } from "../../Components";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SearchButton from "../../Components/SearchButton/SearchButton";
import { useEffect } from "react";


export const PriceComparisonPage = () => {
    const [cookies] = useCookies(["name"]);
    // set themeState
    ThemeToggleService('blue')

    // states
    const [listData,setListData] = useState([])
    const [search,setSearch] = useState(false)
    const [query,setQuery] = useState('')
    const [chartData,setChartData] = useState([])
    
    useEffect(() => {
        axios.get('https://leftwat-be.herokuapp.com/api/v1/pricecomparison/', {headers: {auth_token:cookies.name},}) 
            .then(response => {
                console.log('retrieve successfully')
                console.log(response.data)
                setListData(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[cookies.name])

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            console.log('pressed!')
            console.log(e.target.value)
            axios.get('https://leftwat-be.herokuapp.com/api/v1/pricecomparison/search', {headers: {auth_token:cookies.name,query:e.target.value},}) 
            .then(response => {
                console.log('retrieve successfully')
                console.log(response.data)
                setChartData(response.data)
                setSearch(true)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
    return (
        <PageContainer navlink ='/login' name='Logout'>
            {search ? 
            <ThreeColSplitPage data ={chartData}/>
            :<SearchButton data = {listData} onEnter = {handleEnter}/>
            }
        </PageContainer>
    )
};
