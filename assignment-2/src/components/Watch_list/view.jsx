import React from 'react';
import Mylist from './Watch_list';
import Header from '../header/header';
import './Watch_list.css'
function View({watchlist1,removeFromWatchlist}){
    return (
        <div className='yay'    >  
            <Header classname="headerwatch"/>
            <div>
            <Mylist watchlist1={watchlist1 } removeFromWatchlist={removeFromWatchlist} className="totalclass"/>
            </div>
        </div>
    )
}
export default View;