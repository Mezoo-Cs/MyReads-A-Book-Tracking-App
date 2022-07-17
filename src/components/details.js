import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { get } from '../BooksAPI'

export const Details = () => {
  let [book , setBook] = useState(null)  
  const bookId = useParams()


  useEffect(()=>{
    get(bookId.id).then((res)=>{ setBook(res)}).catch((err)=>{ console.log(err); setBook(undefined)})
  },[bookId])


  const navigate = useNavigate()

  return (
    <div className='px-4'>
        <h1 className='text-4xl text-center'>Detailes</h1>
        {book === null ? "loding..." : book === undefined ? navigate("/notFound"):
        <>
        <div className='mb-4'>
          <strong className='text-4xl'>{book.title}</strong><span className='text-2xl'> : {book.subtitle}</span>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-full w-[130px] h-[190px] mr-4 mb-4'>
            <img src={book.imageLinks.thumbnail} alt={book.title} className="rounded w-[130px] h-[190px]"/>
          </div>
          <div className='md:w-2/6'>
            <p>authoors : {book.authors.join(",")}</p>
            <p>publisher : {book.publisher}</p>
            <p>publish date : {book.publishedDate}</p>
            <p>catigories : {book.categories ? book.categories.join(" , ") : "No category"}</p>
            <p>no. of pages : {book.pageCount}</p>
            <p>average rating : {book.averageRating ? book.averageRating : "0"}</p>
            <p>language : {book.language}</p>
            <a href = {book.previewLink} className="text-blue-600"> preview link</a>
          </div>
          {/* look at google to see how they handel this */}
          <div className='md:w-4/6'>
            <strong>Description : </strong>
            <p>{book.description}</p>
          </div>
        </div>

        </>
      }
    </div>
  )
}
