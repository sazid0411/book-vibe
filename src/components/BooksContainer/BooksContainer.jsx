import React, { use } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const BooksContainer = ({ booksPromise }) => {
    const books = use(booksPromise)
    console.log(books);
    return (

        <div className='container mx-auto p-15 md:p-0 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                books.map((book) => (
                    <BooksCard book={book}></BooksCard>
                ))
            }
        </div>
    );
};

export default BooksContainer;