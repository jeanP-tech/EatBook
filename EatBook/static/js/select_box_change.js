const selectBox = document.getElementById("read_select");
let selectValue = document.getElementById("read_select").value;

generateReadList();
showReadList();
generateWishList();
generateThrowList();

function selectChange() {

  selectValue = document.getElementById("read_select").value;

  if (selectValue === "wishList") {
    noneReadList();
    noneThrowList();
    showWishList();
  } else if (selectValue === "throwList") {
    noneReadList();
    noneWishList();
    showThrowList();
  } else if (selectValue === "readList") {
    noneWishList();
    noneThrowList();
    showReadList();
  }

};

selectBox.addEventListener("change", selectChange);
