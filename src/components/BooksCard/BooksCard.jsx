import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const BooksCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
            <div className='border-[#13131326] border mt-4 md:mt-10 rounded-2xl'>
                <div className='p-6 flex flex-col gap-6'>
                    <div className='flex items-center justify-center bg-[#F3F3F3] max-w-[326px] h-[230px] rounded-lg'>
                        <img src={book.image} alt="" className='w-[132px] h-[166px] rounded-sm' />
                    </div>
                    <div className='space-y-4'>
                        <div className='flex justify-between'>
                            {
                                book.tags.map(((tag,index) => (<span key={index} className='btn border-0 bg-[#23BE0A0D] text-[#23BE0A]'>{tag}</span>)))
                            }


                        </div>
                        <div className='space-y-4 border border-t-0 border-x-0 pb-4 border-b-[#13131326] border-dashed'>
                            <h1 className='display text-2xl font-bold'>{book.bookName}</h1>
                            <p className='font-medium'>By:{book.author} </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='font-medium'>{book.category}</span>
                            <span className='flex gap-2'>{book.rating} <Star size={20} /></span>
                        </div>
                    </div>

                </div>


            </div></Link>
    );
};

export default BooksCard;