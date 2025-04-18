import React from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BooksCard from '../BooksCard/BooksCard';
import { getFromLDB } from '../../utility/localStorage';

const ListedBook = () => {
    const books = useLoaderData()

    const lDB = getFromLDB();

    const readBooks = books.filter(item => lDB.includes(item.bookId))
    console.log(readBooks);
    return (
        <div className='container mx-auto mt-10 p-3'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>

                </TabList>

                <TabPanel>
                    <div className='p-15 md:p-0 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                        {
                        readBooks.map((book) => (
                            <BooksCard key={book.bookId} book={book}></BooksCard>
                        ))
                    }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBook;