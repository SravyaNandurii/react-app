import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import '../../components/style.css'
import kungfutext from'../Images/kungfutext.png'
    import Playbutton from '../Playbutton/playbutton';
const CarouselComponent=({name1})=>{
    return(
        <Carousel className='Total_carousel' >
            {name1.map((entry)=>(
                <Carousel.Item >
                    <img src={entry.poster} className="movie-banner"/>
                    <img src={kungfutext} alt="no" className='movie-banner_img'/>
    <span className='movie-banner_description'>After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists. </span>
    <Playbutton />
                </Carousel.Item>
            ))}
            
        </Carousel>
    )
}
export default CarouselComponent