import React from 'react';
import { createBrowserRouter, } from "react-router";
import Root from '../components/Root/Root';
import App from '../App';
import Home from '../components/Home/Home';
import BookDetails from '../BookDetails/BookDetails';
import ListedBook from '../components/Listedbook/ListedBook';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        // errorElement: <span>Error</span>,    
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("data.json"),
                Component: Home
            },

            {
                path: "bookDetails/:id",
                loader: () => fetch("data.json"),
                Component: BookDetails

            },
            {
                path: "/listedBook",
                loader: () => fetch("data.json"),
                Component:ListedBook
            }
        ]
    }
])