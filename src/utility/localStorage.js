import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const getFromLDB = () => {
    const readBookSRT = localStorage.getItem("readedBook");

    if (readBookSRT) {
        const readBook = JSON.parse(readBookSRT)
        return readBook;
    } else {
        return []
    }
}

const addToLDB = (id) => {
    const readBook = getFromLDB()

    if (readBook.includes(id)) {
        Swal.fire({
            title: 'Already Read!',
            icon: 'error',
            confirmButtonText: 'Okay!'
        })
    } else {
        readBook.push(id)
        const item = JSON.stringify(readBook)
        localStorage.setItem("readedBook", item)
        Swal.fire({
            title: "Added Mark as Read",
            icon: "success"
          });

    }
}

const getFromWish = () => {
    const readBookSRT = localStorage.getItem("wishBook");

    if (readBookSRT) {
        const readBook = JSON.parse(readBookSRT)
        return readBook;
    } else {
        return []
    }
}

const addToWish = (id) => {
    const wishBook = getFromWish()

    if (wishBook.includes(id)) {
        Swal.fire({
            title: 'Already Added!',
            icon: 'error',
            confirmButtonText: 'Okay!'
        })
    } else {
        wishBook.push(id)
        const item = JSON.stringify(wishBook)
        localStorage.setItem("wishBook", item)
        Swal.fire({
           title: "Added to Wishlist",
            icon: "success"
          });

    }
}



export { addToLDB, getFromLDB, getFromWish, addToWish };