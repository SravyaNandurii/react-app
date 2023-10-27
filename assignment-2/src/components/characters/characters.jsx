import React from 'react';
import { useContext } from 'react';
import { Usercontext } from '../../App';
import "./characters.scss"
import Header from '../header/header';
function Charcters(){
    const movies=useContext(Usercontext)
    return(
        <div className='total1'>
            <Header />
        <div className='total1__characters'>
            
            {movies.map((a)=>
                <div className='total1__characters__single'>
                <img src={a.character} className='total1__characters__single__img' />
                </div>
            )}
        </div>
        </div>
    )
}
export default Charcters;