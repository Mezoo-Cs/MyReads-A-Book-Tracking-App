import React, { useState } from 'react'
import { getAll, search } from '../BooksAPI';
import { Book } from './book';
import {BiSearch} from "react-icons/bi"

function removeCommen(arr1 = [],arr2 =[]){
  
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j<arr2.length ; j++){
      if(arr1[i].id === arr2[j].id){
        arr1[i] = arr2[j];
        break;
      }
    }
  }

  return arr1;
}

export const Search = () => {

  const [books , setBooks] = useState([]);

  function handleChange (value){

    if(value === "") {setBooks([]); return;}

    let searchBooks = search(value ,20);
    searchBooks.then((res)=>{

      let booksOnShelfs = getAll();
      booksOnShelfs.then((r)=> {

        let arr = removeCommen(res,r);
        setBooks(arr);
      });
    })

  }
  

  return (
    <div>    
        <div className='flex justify-around items-center p-4'>
          <h1 className='text-4xl'>Search</h1>
          <input type="text" placeholder='Search here' className='border-black border p-4 w-4/5 text-lg' onChange={(e)=> handleChange(e.target.value.trim())} />
          <BiSearch className='text-4xl'/>
        </div>
        {/* books grid */}
        <div className='flex gap-4 flex-wrap justify-center'>
          {books.error ? "there is no books with this title" :
          books.length === 0 ? "there is no books with this title":
          books.map((book , i)=>{return <Book key={i} book = {book}/>})}
        </div>
    </div>
  )
}
