import React, { useState } from 'react'
import {BiDotsHorizontalRounded , BiCheck} from "react-icons/bi"
import { update } from '../BooksAPI';

export const ShelfChanger = ({book}) => {

    let [shelf , setShelf] = useState(book.hasOwnProperty("shelf") ? book.shelf : undefined);

    let changer = ["wantToRead", "currentlyReading", "read" , "none"];

    const [open , setOpen] = useState(false);
    function handleClick(option){
        update(book , option);
        setShelf(option)
    }

  return (
    <div className='relative cursor-pointer'>
        <BiDotsHorizontalRounded className='text-2xl text-slate-500' onClick={()=>setOpen(!open)}/>
        {open && 
            <div className='border shadow absolute bottom-[-120px] right-0 bg-white p-2 rounded'>
                <ul>
                    {changer.map((option)=>{
                        if(shelf === undefined){
                            return <li className={`flex gap-2 w-[160px] ${option === "none" ? "" : "pl-6"} items-center`} key = {option} onClick = {()=>{handleClick(option)}}>
                            {option === "none" && <BiCheck/>} {option}
                            </li>
                        }
                        return <li className={`flex gap-2 w-[160px] ${shelf === option ? "" : "pl-6"} items-center`} key = {option} onClick = {()=>{handleClick(option)}}>
                            {shelf === option &&  <BiCheck/>}
                            {option}
                            </li>
                    })}
                </ul>
            </div>
        }

    </div>
  )
}
