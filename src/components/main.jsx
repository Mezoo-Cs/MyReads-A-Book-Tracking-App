import React, { useEffect, useState } from 'react'
import { getAll} from '../BooksAPI'
import { BookShelf } from './bookShelf.jsx'

export const Main = () => {
    let books = getAll();
    const [wantToRead , setWantToRead] = useState([]); 
    const [currentlyReading,setCurrnetlyReading] = useState([]); 
    const [read,setRead] = useState([]);


    useEffect(()=>{
        books.then((res)=>{
            const want = res.filter((book)=> {return book.shelf === "wantToRead"})
            const current = res.filter((book)=> {return book.shelf === "currentlyReading"})
            const finished = res.filter((book)=> {return book.shelf === "read"}) 

            setWantToRead(want.length === 0 ? undefined : want)
            setCurrnetlyReading(current.length === 0 ? undefined : current)
            setRead(finished.length === 0 ? undefined : finished )
        }).catch((err)=> {
            console.log(err)
            setCurrnetlyReading("err")
            setWantToRead("err")
            setRead("err")
        })
    },[books])

    return (
    <div>
        <h1 className='text-4xl text-center'>Main</h1>
        <BookShelf books = {wantToRead} title = "Want To Read"/>
        <BookShelf books = {currentlyReading} title = "Currently Reading"/>
        <BookShelf books = {read} title = "Read"/>
    </div>
    )
}
