const plusIcon = document.getElementById("plus");
const minusIcon = document.getElementById("minus");

let btnClick = 0;

function zoomOut() {
  btnClick += 1;

  if (btnClick === 1) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      bookInfo[i].style.display = "none";
      book[i].style.width = 200 + 'px';
      coverImg[i].style.width = 100 + 'px';

      wishBookInfo[i].style.display = "none";
      wishBook[i].style.width = 200 + 'px';
      wishCoverImg[i].style.width = 100 + 'px';

      throwBookInfo[i].style.display = "none";
      throwBook[i].style.width = 200 + 'px';
      throwCoverImg[i].style.width = 100 + 'px';
    }
  } else if (btnClick === 2) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 150 + 'px';
      coverImg[i].style.width = 80 + 'px';

      wishBook[i].style.width = 150 + 'px';
      wishCoverImg[i].style.width = 80 + 'px';

      throwBook[i].style.width = 150 + 'px';
      throwCoverImg[i].style.width = 80 + 'px';
    }
  } else if (btnClick === 3) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 100 + 'px';
      coverImg[i].style.width = 60 + 'px';

      wishBook[i].style.width = 100 + 'px';
      wishCoverImg[i].style.width = 60 + 'px';

      throwBook[i].style.width = 100 + 'px';
      throwCoverImg[i].style.width = 60 + 'px';
    }
  } else {
    btnClick = 3;
  }
};

function zoomIn() {
  btnClick -= 1;

  if (btnClick === 2) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 150 + 'px';
      coverImg[i].style.width = 80 + 'px';

      wishBook[i].style.width = 150 + 'px';
      wishCoverImg[i].style.width = 80 + 'px';

      throwBook[i].style.width = 150 + 'px';
      throwCoverImg[i].style.width = 80 + 'px';
    }
  } else if (btnClick === 1) {
    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 200 + 'px';
      coverImg[i].style.width = 100 + 'px';

      wishBook[i].style.width = 200 + 'px';
      wishCoverImg[i].style.width = 100 + 'px';

      throwBook[i].style.width = 200 + 'px';
      throwCoverImg[i].style.width = 100 + 'px';
    }
  } else if (btnClick === 0) {

    if (selectValue === "readList") {
      showReadList();
    } else if (selectValue === "wishList") {
      showWishList();
    } else if (selectValue === "throwList") {
      showThrowList();
    }
    console.log(selectValue);

    for (let i = 0; i < BOOK_NUMBER; i++){
      book[i].style.width = 320 + 'px';
      coverImg[i].style.width = 120 + 'px';

      wishBook[i].style.width = 320 + 'px';
      wishCoverImg[i].style.width = 120 + 'px';

      throwBook[i].style.width = 320 + 'px';
      throwCoverImg[i].style.width = 120 + 'px';
    }
  } else {
    btnClick = 0;
  }
};

plusIcon.addEventListener("click", zoomIn);
minusIcon.addEventListener("click", zoomOut);
