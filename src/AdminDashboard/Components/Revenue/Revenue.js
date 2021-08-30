import React, {useEffect,useState} from "react";
import revenueData from './revenueData'
import "./Revenue.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

const Revenue = () => {

    const [revenue,setRevenue]=useState([]);

    useEffect(() => {
        setRevenue(revenueData);
    },[])

    return (
        <div className="revenueMainDiv">
            <div className="revenueContainer">
                {revenue.map((item,index)=>{
                    return (
                        <div className="revenueInfo">
                            <h4 className="revenueHeader">Revenue</h4>
                            <div className="revenueMoneyRate">
                                <h2 className="revenueMoney">${item.money}</h2>
                                <p className="revenueRate">{item.rate}
                                {(item.rate > 0) ? <ArrowUpward className="upwardIcon"/> : <ArrowDownward className="downwardIcon"/>}
                                </p>
                            </div>
                            <h4 className="revenueFooter">Compared to Last Month</h4>
                        </div>         
                    )
                })}
            </div>
        </div>
    )
}

export default Revenue
