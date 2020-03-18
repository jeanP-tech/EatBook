const container = document.getElementById("container");

const BOOK_NUMBER = 13;

// readList
const book = document.getElementsByClassName("book");
const bookInfo = document.getElementsByClassName("book_info");
const coverImg = document.getElementsByClassName("cover_img");
const bookTitle = document.getElementsByClassName("book_title");
const bookRank = document.getElementsByClassName("book_rank");
const review = document.getElementsByClassName("book_review");

function generateReadList () {

  const readList = document.createElement("div");
  readList.id = "read_list";
  container.appendChild(readList);

  for (let i = 0; i < BOOK_NUMBER; i++) {

    const book = document.createElement("div");
    book.className = "book";
    readList.appendChild(book);

    const coverImg = new Image();
    coverImg.src = "images/voice.jpg";
    coverImg.className = "cover_img";
    book.appendChild(coverImg);

    const bookInfo = document.createElement("ul");
    bookInfo.className = "book_info";
    book.appendChild(bookInfo);

    const bookTitle = document.createElement("li");
    bookTitle.className = "book_title";
    bookTitle.innerHTML = "목소리를 드릴게요";
    bookInfo.appendChild(bookTitle);
    const bookRank = document.createElement("li");
    bookRank.className = "book_rank";
    bookRank.innerHTML = "🌟🌟🌟🌟";
    bookInfo.appendChild(bookRank);
    const review = document.createElement("li");
    review.className = "book_review";
    review.innerHTML = "정세랑 작가의 신작";
    bookInfo.appendChild(review);
  }

  readList.style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    bookInfo[i].style.display = "none";
    book[i].style.display = "none";
    coverImg[i].style.display = "none";
    bookRank[i].style.display = "none";
    review[i].style.display = "none";
  }

};

function showReadList () {

  document.getElementById("read_list").style.display = "flex";

  for (let i = 0; i < BOOK_NUMBER; i++){
    book[i].style.display = "flex";
    coverImg[i].style.display = "block";
    if (btnClick == 0) {
      bookInfo[i].style.display = "block";
      bookTitle[i].style.display = "block";
      bookRank[i].style.display = "block";
      review[i].style.display = "block";
    }
  }

}


function noneReadList() {
  document.getElementById("read_list").style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    bookInfo[i].style.display = "none";
    book[i].style.display = "none";
    bookTitle[i].style.display = "none";
    coverImg[i].style.display = "none";
    bookRank[i].style.display = "none";
    review[i].style.display = "none";
  }
}

// wishList

function generateWishList() {

  const wishList = document.createElement("div");
  wishList.id = "wish_list";
  container.appendChild(wishList);

  for (let i = 0; i < BOOK_NUMBER; i++) {

    const wishBook = document.createElement("div");
    wishBook.className = "wish_book";
    wishList.appendChild(wishBook);

    const wishCoverImg = new Image();
    wishCoverImg.src = "images/speed.jpg";
    wishCoverImg.className = "wish_cover_img";
    wishBook.appendChild(wishCoverImg);

    const wishBookInfo = document.createElement("ul");
    wishBookInfo.className = "wish_book_info";
    wishBook.appendChild(wishBookInfo);

    const wishBookTitle = document.createElement("li");
    wishBookTitle.className = "wish_book_title";
    wishBookTitle.innerHTML = "우리가 빛의 속도로 갈 수 없다면";
    wishBookInfo.appendChild(wishBookTitle);
    const wishBookAuthor = document.createElement("li");
    wishBookAuthor.className = "wish_book_author";
    wishBookAuthor.innerHTML = "김초엽";
    wishBookInfo.appendChild(wishBookAuthor);
  }

  wishList.style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    wishBookInfo[i].style.display = "none";
    wishBook[i].style.display = "none";
    wishCoverImg[i].style.display = "none";
    wishBookTitle[i].style.display = "none";
    wishBookAuthor[i].style.display = "none";
  }
}


const wishBook = document.getElementsByClassName("wish_book");
const wishBookInfo = document.getElementsByClassName("wish_book_info");
const wishCoverImg = document.getElementsByClassName("wish_cover_img");
const wishBookTitle = document.getElementsByClassName("wish_book_title");
const wishBookAuthor = document.getElementsByClassName("wish_book_author");

function showWishList () {
  document.getElementById("wish_list").style.display = "flex";

  for (let i = 0; i < BOOK_NUMBER; i++){

    wishBook[i].style.display = "flex";
    wishCoverImg[i].style.display = "block";

    if (btnClick == 0) {
      wishBookInfo[i].style.display = "block";
      wishBookTitle[i].style.display = "block";
      wishBookAuthor[i].style.display = "block";
    }
  }
}

function noneWishList() {
  document.getElementById("wish_list").style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    wishBookInfo[i].style.display = "none";
    wishBook[i].style.display = "none";
    wishCoverImg[i].style.display = "none";
    wishBookTitle[i].style.display = "none";
    wishBookAuthor[i].style.display = "none";
  }
}



// throwList

function generateThrowList() {

  const throwList = document.createElement("div");
  throwList.id = "throw_list";
  container.appendChild(throwList);

  for (let i = 0; i < BOOK_NUMBER; i++) {

    const throwBook = document.createElement("div");
    throwBook.className = "throw_book";
    throwList.appendChild(throwBook);

    const throwCoverImg = new Image();
    throwCoverImg.src = "images/work.jpg";
    throwCoverImg.className = "throw_cover_img";
    throwBook.appendChild(throwCoverImg);

    const throwBookInfo = document.createElement("ul");
    throwBookInfo.className = "throw_book_info";
    throwBook.appendChild(throwBookInfo);

    const throwBookTitle = document.createElement("li");
    throwBookTitle.className = "throw_book_title";
    throwBookTitle.innerHTML = "일의 기쁨과 슬픔";
    throwBookInfo.appendChild(throwBookTitle);
    const throwBookAuthor = document.createElement("li");
    throwBookAuthor.className = "throw_book_author";
    throwBookAuthor.innerHTML = "장류진";
    throwBookInfo.appendChild(throwBookAuthor);
  }

  throwList.style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    throwBookInfo[i].style.display = "none";
    throwBook[i].style.display = "none";
    throwCoverImg[i].style.display = "none";
    throwBookTitle[i].style.display = "none";
    throwBookAuthor[i].style.display = "none";
  }
}


const throwBook = document.getElementsByClassName("throw_book");
const throwBookInfo = document.getElementsByClassName("throw_book_info");
const throwCoverImg = document.getElementsByClassName("throw_cover_img");
const throwBookTitle = document.getElementsByClassName("throw_book_title");
const throwBookAuthor = document.getElementsByClassName("throw_book_author");

function showThrowList () {
  document.getElementById("throw_list").style.display = "flex";

  for (let i = 0; i < BOOK_NUMBER; i++){
    throwBook[i].style.display = "flex";
    throwCoverImg[i].style.display = "block";

    if (btnClick == 0) {
      throwBookInfo[i].style.display = "block";
      throwBookTitle[i].style.display = "block";
      throwBookAuthor[i].style.display = "block";
    }
  }
}

function noneThrowList() {
  document.getElementById("throw_list").style.display = "none";

  for (let i = 0; i < BOOK_NUMBER; i++){
    throwBookInfo[i].style.display = "none";
    throwBook[i].style.display = "none";
    throwCoverImg[i].style.display = "none";
    throwBookTitle[i].style.display = "none";
    throwBookAuthor[i].style.display = "none";
  }
}
