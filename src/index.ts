const todoElement = document.getElementById("todos");

function makeElement(): HTMLDivElement {
  const allItems = document.createElement("div");
  allItems.classList.add("list-group");
  //Utilize o bootstrap do jeito que achar melhor para fazer a sua lista.

  // Retorne a lista construída:
  return allItems;
}

// Adicione o conteúdo a div produtos:
if (todoElement) {
  todoElement.appendChild(makeElement());
}
