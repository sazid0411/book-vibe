import React, { Suspense } from 'react';
import BooksCard from '../BooksCard/BooksCard';
import { useLoaderData } from 'react-router';

const BooksContainer = () => {
    const books = useLoaderData()

    return (

        <div>
            <h1 className='text-center display text-4xl  font-bold mt-10'>Books </h1>

            <div className='container mx-auto p-15 md:p-0 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <Suspense fallback={<div className='flex items-center justify-center mt-3'><span className="loading   loading-dots loading-xl"></span></div>}>
                    {
                        books.map((book) => (
                            <BooksCard key={book.bookId} book={book}></BooksCard>
                        ))
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default BooksContainer;