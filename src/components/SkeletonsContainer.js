import React from 'react'
import { BookSkeleton } from './BookSkeleton'

export const SkeletonsContainer = () => {
    let arr = []
    let number = Math.floor(window.innerWidth / 170)
    
    for(let i = 0 ; i < number ; i++){
        arr.push(i);
    }


  return (
    <div className='flex flex-wrap gap-4'>
        {arr.map((index)=>{
            return <BookSkeleton key = {index}/>
        })}
    </div>
  )
}
