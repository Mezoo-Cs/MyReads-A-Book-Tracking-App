import React from 'react'
import { Book } from './book'
import { SkeletonsContainer } from './SkeletonsContainer'

export const BookShelf = ({title,books}) => {


    return (
        <div  className='py-8 px-4 border w-11/12 mx-auto my-8'>
            <h1 className='text-3xl text-center'>{title}</h1>
            
            <div className='flex flex-wrap gap-4'>
                {books === "err" ? "there is an error"  : 
                books === undefined  ? "There is no books..." : 
                books.length === 0 ? <SkeletonsContainer/> : 
                books.map((book , i)=>{
                    return <Book key={i} book ={book} />
                })}
            </div>
        </div>
    
    )
}
