import React from 'react'
import {Link} from "react-router-dom"
import { ShelfChanger } from './ShelfChanger'

export const Book = ({book}) => {

    return (
        <div className=' select-none flex flex-wrap w-[150px] h-[250px]  rounded shadow-xl'>
            <img src={book.imageLinks.smallThumbnail} alt = "thumbnail" className='w-[150px] h-[160px]'/>
            {/* book title */}
            <strong className=' px-2 text-ellipsis overflow-hidden whitespace-nowrap w-[150px] h-[25px]'>{book.title}</strong>
            {/* book authors */}
            <span className=' px-2 text-slate-500 text-ellipsis overflow-hidden whitespace-nowrap w-[150px] h-[25px]'>{book.authors.join(" , ")}</span>
            {/* datail page and shelf changer */}
            <div className='w-full flex justify-between items-center pb-2'>
                <Link to ={`/details/${book.id}`} className = "px-2 text-blue-600">read more</Link>
                <ShelfChanger key={book.id} book = {book}/>
            </div>
        </div>
    )
}
