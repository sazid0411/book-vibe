import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import BooksContainer from './components/BooksContainer/BooksContainer'
import Navbar from './Navabr/Navbar'

function App() {

  const booksPromise = fetch('data.json').then(res => res.json())

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <h1 className='text-center display text-4xl  font-bold mt-10'>Books </h1>
        <Suspense fallback={<div className='flex items-center justify-center mt-3'><span className="loading   loading-dots loading-xl"></span></div>}>
          <BooksContainer booksPromise={booksPromise}></BooksContainer>
        </Suspense>
      </main>
    </>

  )
}

export default App
