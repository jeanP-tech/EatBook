const searched_input = document.getElementById("searched_input");
const container = document.getElementById("container");
const searchedList = document.getElementById("searched_list");

// function enterkey() {
//   if (window.event.keyCode == 13) {
//     const search_query = search_input.value;
//     location.pathname='searched_books' + search_query;
//   }
// }
//
// if (search_input) {
//   search_input.addEventListener('keyup', enterkey, false);
// }
search()

function search () {
  // var search_query = localStorage.getItem('query');

  const search_query = searched_input.value;

  var url = new URL("https://dapi.kakao.com/v3/search/book");
  var params = { query: search_query };
  url.search = new URLSearchParams(params).toString();

  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Authorization': 'KakaoAK 9b97e883418c2945387a81cd7c9953d9',
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    // body: JSON.stringify(params), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then(json => {
    searched_list (json)
  })
  .then(err => console.log(err));

}

function searched_list (json) {

  for (let i = 0; i < Object.keys(json.documents).length; i++) {
    const book = document.createElement("div");
    book.className = "book";
    searchedList.appendChild(book);

    const coverImg = document.createElement("img");
    coverImg.src = json.documents[i].thumbnail;
    coverImg.className = "cover_img";
    book.appendChild(coverImg);

    const bookInfo = document.createElement("ul");
    bookInfo.className = "book_info";
    book.appendChild(bookInfo);

    const bookTitle = document.createElement("li");
    bookTitle.className = "book_title";
    bookTitle.innerHTML = json.documents[i].title;
    bookInfo.appendChild(bookTitle);

    const bookAuthor = document.createElement("li");
    bookAuthor.className = "book_author";
    bookAuthor.innerHTML = json.documents[i].authors;
    bookInfo.appendChild(bookAuthor);

    // const review = document.createElement("li");
    // review.className = "book_review";
    // review.innerHTML = "정세랑 작가의 신작";
    // bookInfo.appendChild(review);
  }

}
