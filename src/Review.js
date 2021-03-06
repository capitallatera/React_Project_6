import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft,FaChevronRight,FaQuoteRight}  from 'react-icons/fa'

const Review=()=>{
    const [index,setIndex]=useState(0);
    const {name,image,job,text}=people[index];

    const checkNumber=(number)=>{
        if (number>people.length-1){
            return 0
        }
        if (number<0){
            return people.length-1
        }
        
        return number
        // console.log(number)
    }
    
    const prevbtn=()=>{
        setIndex((index)=>{
            let newIndex=index-1
            return checkNumber(newIndex)
        })
    }

    const nxtbtn = () => {
        setIndex((index)=>{
            let newIndex=index+1
            return checkNumber(newIndex)
        })
    }

    const randomPerson=()=>{
        
        let randomNumber=Math.floor(Math.random() * people.length)
        // console.log(randomNumber)
        if(randomNumber===index){
            randomNumber=index+1
        }
        // console.log(randomNumber)
        setIndex(checkNumber(randomNumber))

    }


    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"></img>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevbtn}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nxtbtn}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>suprise me</button>

        </article>
    )
}
export default Review; 