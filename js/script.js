// Input Fields and Buttons
let btn = document.querySelector(".btn");
let removeAll = document.querySelector(".remove_all");
let input = document.querySelector(".input");
let ul = document.querySelector(".show-item");

let arr = [];

// Add Items in Array and UI
const addItems = () => {
  arr.push(input.value);
  input.value = ``;

  let pushNewValue = () => {
    let lastItem = "";
    for (let i = 0; i < arr.length; i++) {
      lastItem = arr[i];
    }
    return lastItem;
  };

  let last = pushNewValue();
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let listItems = document.createElement("div");
  listItems.classList.add("list_items");
  deleteBtn.innerHTML = "Delete";
  li.innerHTML = last;
  listItems.appendChild(li);
  listItems.appendChild(deleteBtn);
  ul.appendChild(listItems);

  // Delete Individual Item
  deleteBtn.addEventListener("click", () => {
    let liItem = li.innerHTML;
    console.log("listItem:", liItem);
    let liItemIndex = arr.indexOf(liItem);
    console.log(liItemIndex);
    arr.splice(liItemIndex - 1, liItemIndex);
    li.remove();
    deleteBtn.remove();
  });
  console.log(arr);

  // Remove Full List
  removeAll.addEventListener("click", () => {
    listItems.remove();
    arr = [];
    console.log("Array in remove all:", arr);
  });

  return listItems;
};

// Add Items
btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Enter some items!");
  } else {
    addItems();
  }
});
