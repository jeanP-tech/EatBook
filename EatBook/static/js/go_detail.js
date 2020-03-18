function goDetail() {
  location.href="book_detail.html";
};

for (let i = 0; i < BOOK_NUMBER; i++) {
  bookTitle[i].addEventListener("click", goDetail);
  coverImg[i].addEventListener("click", goDetail);
}
