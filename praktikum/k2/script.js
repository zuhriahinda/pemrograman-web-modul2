const todoList = document.getElementById("todo-list");
const addActivityInput = document.getElementById("activity");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  const activityText = addActivityInput.value.trim();
  if (activityText !== "") {
    const listItem = createListItem(activityText);
    todoList.appendChild(listItem);
    addActivityInput.value = "";
  }
});

function createListItem(activityText) {
  const listItem = document.createElement("li");
  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerText = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";

  listItem.innerHTML = `<input type="checkbox">${activityText}`;
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  editButton.addEventListener("click", function () {
    const updatedText = prompt("Edit activity:", activityText);
    if (updatedText !== null) {
      listItem.innerHTML = `<input type="checkbox">${updatedText}`;
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
    }
  });

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  return listItem;
}
