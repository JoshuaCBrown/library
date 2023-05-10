let myLibrary = [
    {title: "javascript greatest hits",
    author: "Cormac McCarthy",
    pages: 1600,
    read: true,
    },
];

function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function hasRead (x) {
    return (x ? 'Previously Read' : 'Have Yet To Read');
}


function displayBooks() {
    for (let i = 0; i < myLibrary.length; ++i) {
        const card = document.createElement('div');
        card.id = 'cardid' + i;
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardRead = document.createElement('p');
        cardTitle.className = 'titlefield';
        cardAuthor.classname = 'authorfield';
        cardPages.classname = 'pagesfield';
        cardRead.classname = 'readfield';
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        cardTitle.textContent = myLibrary[i].title;
        cardAuthor.textContent = myLibrary[i].author;
        cardPages.textContent = myLibrary[i].pages;
        cardRead.textContent = hasRead(myLibrary[i].read);
        const removeButton = document.createElement('button');
        removeButton.className = 'removeBtn' + i;
        removeButton.textContent = 'Remove';
        card.appendChild(removeButton);
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggleBtn' + i;
        toggleBtn.textContent = 'Read/Unread';
        card.appendChild(toggleBtn);
        containerDiv.appendChild(card);
    }
    addListeners()
};

function addListeners() {
    for (i = 0; i < myLibrary.length; ++i) {
        const rmvBtn = document.querySelector('.removeBtn' + i);
        rmvBtn.addEventListener('click', console.log('heyo'));
    };
    for (i = 0; i < myLibrary.length; ++i) {
        const togBtn = document.querySelector('.toggleBtn' + i);
        togBtn.addEventListener('click', toggleRead(i));
    };
};

function addBook() {
    let i = myLibrary.length - 1;
    const card = document.createElement('div');
    card.id = 'cardid' + i;
    const cardTitle = document.createElement('p');
    const cardAuthor = document.createElement('p');
    const cardPages = document.createElement('p');
    const cardRead = document.createElement('p');
    cardTitle.className = 'titlefield';
    cardAuthor.classname = 'authorfield';
    cardPages.classname = 'pagesfield';
    cardRead.classname = 'readfield';
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    cardTitle.textContent = myLibrary[i].title;
    cardAuthor.textContent = myLibrary[i].author;
    cardPages.textContent = myLibrary[i].pages;
    cardRead.textContent = hasRead(myLibrary[i].read);
    containerDiv.appendChild(card);
    
};

function removeBook(indexNum) {
    let x = indexNum;
    removeAllBooks();
    myLibrary.splice(x, 1);
    displayBooks();
}

function removeAllBooks () {
    for (let i = myLibrary.length - 1; i >= 0; --i) {
        const divToRemove = document.querySelector('#cardid' + i);
        divToRemove.remove();
    }
}


const containerDiv = document.querySelector('.container');
console.log(myLibrary);
addBookToLibrary("newnew", "new author", 69, false);
displayBooks();