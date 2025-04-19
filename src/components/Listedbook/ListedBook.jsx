import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BooksCard from '../BooksCard/BooksCard';
import { getFromLDB, getFromWish } from '../../utility/localStorage';

const ListedBook = () => {
    const [readBook, setReadBook] = useState([])
    const [wishBook, setWishBook] = useState([])
    const books = useLoaderData()






    useEffect(() => {
        const lDB = getFromLDB();
        const wishDB = getFromWish();
        const wishBooks = books.filter(item => wishDB.includes(item.bookId))
        const readBooks = books.filter(item => lDB.includes(item.bookId))
        setReadBook(readBooks);
        setWishBook(wishBooks)
    }, [books])


    const sortBooks = (target) => {
        if (target === "pages") {
            const sorted = [...readBook].sort((a, b) => a.totalPages - b.totalPages)
            console.log(readBook);
            setReadBook(sorted)
        }


        if (target === "rating") {
            const sorted = [...readBook].sort((a, b) => a.rating - b.rating)
            console.log(readBook);
            setReadBook(sorted)
        }
    }



    return (
        <div className='container mx-auto mt-10 p-3'>
            <div className="dropdown dropdown-bottom place-items-center mb-6">
                <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => sortBooks("pages")}><a>Pages</a></li>
                    <li onClick={() => sortBooks("rating")}><a>Rating</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>

                </TabList>

                <TabPanel>
                    <div className='p-15 md:p-0 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            readBook.map((book) => (
                                <BooksCard key={book.bookId} book={book}></BooksCard>
                            ))
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='p-15 md:p-0 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                            wishBook.map((book) => (
                                <BooksCard key={book.bookId} book={book}></BooksCard>
                            ))
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBook;