const search_input = document.getElementById("search_contents")

function enterkey() {
  if (window.event.keyCode == 13) {
    const search_query = document.getElementById("search_contents").innerText;
    location.pathname='searched_books';
  }
}

search_input.addEventListener('onkeyup', enterkey);
console.log(search_query);

var url = new URL("https://dapi.kakao.com/v3/search/book?target=title");
var params = { query: "우리가 빛의 속도로 갈 수 없다면" };
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
.then(json => console.log(json.documents[0].thumbnail))
.then(err => console.log(err));
