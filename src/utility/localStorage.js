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
        alert("Already Read");
    } else {
        readBook.push(id)
        const item = JSON.stringify(readBook)
        localStorage.setItem("readedBook", item)
        alert("Book Mark As read")

    }
}

export { addToLDB, getFromLDB };