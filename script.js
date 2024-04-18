const newList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");

function addTask() {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newListItem = document.createElement("li");
    newListItem.textContent = newTaskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      newList.removeChild(newListItem);
    });

    newListItem.appendChild(deleteButton);
    newList.appendChild(newListItem);
    newTaskInput.value = "";
  }
}

newTaskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
