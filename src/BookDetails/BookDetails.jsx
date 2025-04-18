import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToLDB } from '../utility/localStorage';

const BookDetails = () => {

    const { id } = useParams()
    const books = useLoaderData()
    const bookID = parseInt(id)

    const book = books.find(b => b.bookId === bookID)

    const handleReadBook = (id) => {
        addToLDB(id)
    }


    const { author, bookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book

    return (
        <div className='container mx-auto mt-6 mb-60 '>
            <div className='flex flex-col md:flex-row p-6 md:p-0  gap-10'>
                <div className='p-20 bg-[#F3F3F3] flex items-center justify-center rounded-lg  '>
                    <img src={image} alt="" className='w-[460px] h-[300px]  md:h-[560px] rounded-sm' />
                </div>
                <div className=''>
                    <div className=' p-3 space-y-2  border-b-1 border-[#13131326] border-dashed'>
                        <h1 className='text-[40px] display'>{bookName}</h1>
                        <p className='text-xl '>By:{author}.</p>

                    </div>
                    <div className='border-b-1 border-[#13131326] border-dashed p-3'>
                        <h1 className='text-xl'>{category}</h1>
                    </div>
                    <div className='mt-3 max-w-[740px] p-3'>
                        <p><span className='text-lg font-bold'>Review: </span>{review}</p>
                    </div>
                    <div className='flex items-center justify-start gap-6 p-3 border-b-1 border-[#13131326] border-dashed'>
                        <p className='text-lg font-bold '>Tags:</p>
                        {tags.map((tag, index) => <span key={index} className='btn border-0 bg-[#23BE0A0D] text-[#23BE0A]'>{tag}</span>)}
                    </div>
                    <div className='py-3 px-8'>
                        <table className='table-auto'>
                            <tbody>
                                <tr className=''>
                                    <td className='p-2 w-[200px]'>Number of Pages:</td>
                                    <td className='p-2 w-[200px]'>{totalPages} </td>
                                </tr>
                                <tr>
                                    <td className='p-2 w-[200px]'>Publisher:</td>
                                    <td className='p-2 w-[200px]'>{publisher} </td>
                                </tr>
                                <tr>
                                    <td className='p-2 w-[200px]'>Year of Publishing:</td>
                                    <td className='p-2 w-[200px]'>{yearOfPublishing} </td>
                                </tr>
                                <tr>
                                    <td className='p-2 w-[200px]'>Rating:</td>
                                    <td className='p-2 w-[200px]'>{rating} </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className='space-x-3 pl-3' >
                        <button onClick={() => handleReadBook(bookId)} className='btn border-1 border-[#1313134D] text-lg rounded-lg'>Read </button>
                        <button className='btn bg-[#50B1C9] text-lg text-white rounded-lg border-0'>WishList</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookDetails;