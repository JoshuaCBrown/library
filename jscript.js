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
        card.className = 'card';
        card.id = 'cardid' + i;
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardRead = document.createElement('p');
        cardTitle.className = 'titlefield';
        cardAuthor.className = 'authorfield';
        cardPages.className = 'pagesfield';
        cardRead.className = 'readfield' + i;
        cardRead.id = 'read-or-not';
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        cardTitle.textContent = 'Title: ' + myLibrary[i].title;
        cardAuthor.textContent = 'Author: ' + myLibrary[i].author;
        cardPages.textContent = 'Pages: ' + myLibrary[i].pages;
        cardRead.textContent = '*' + hasRead(myLibrary[i].read) + '*';
        const btnDiv = document.createElement('div');
        btnDiv.className = 'btnDiv';
        const removeButton = document.createElement('button');
        removeButton.className = 'removeBtn' + i;
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(i);
        });
        btnDiv.appendChild(removeButton);
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggleBtn' + i;
        toggleBtn.textContent = 'Read/Unread';
        toggleBtn.addEventListener('click', () => {
            toggleRead(i);
        })
        btnDiv.appendChild(toggleBtn);
        card.appendChild(btnDiv);
        containerDiv.appendChild(card);
    }
    // containerDiv.addEventListener ('click', function(e) {
    //     if (e.target)
    // }
};

// function addListeners() {
//     for (i = 0; i < myLibrary.length; ++i) {
//         const rmvBtn = document.querySelector('.removeBtn' + i);
//         rmvBtn.addEventListener('click', console.log('heyo'));
//     };
//     for (i = 0; i < myLibrary.length; ++i) {
//         const togBtn = document.querySelector('.toggleBtn' + i);
//         togBtn.addEventListener('click', toggleRead(i));
//     };
// };

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

function toggleRead(indexNum) {
    let x = indexNum;
    const readStatus = document.querySelector('.readfield' + x);
    if (myLibrary[x].read === true) {
        myLibrary[x].read = false;
    } else {
        myLibrary[x].read = true;
    }
    readStatus.textContent = hasRead(myLibrary[x].read);
}

function formSubmit () {
    const BkTitle = document.querySelector('#book_title');
    const BkAuthor = document.querySelector('#book_author');
    const BkPgs = document.querySelector('#book_pages');
    const BkRd = document.getElementsByName('yetread');
    let y;
    console.log(BkRd);
    if (BkRd[0].checked === true) {
        y = true;
    } else {
        y = false;
    }
    console.log(y);
    removeAllBooks();
    addBookToLibrary(BkTitle.value, BkAuthor.value, BkPgs.value, y);
    displayBooks();
}

const containerDiv = document.querySelector('.container');
const submitBtn = document.querySelector('#submitform');
const addBtn = document.querySelector('.formbutton');
addBtn.addEventListener('click', () => {
    const formEl = document.querySelector('.formdiv');
    formEl.style.display = 'block';
})
console.log(myLibrary);
addBookToLibrary("newnew", "new author", 69, false);
displayBooks();

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    formSubmit();
});
