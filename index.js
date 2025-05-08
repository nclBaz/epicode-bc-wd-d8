function selectTitle(id) {
  const title = document.getElementById(id)
  if (title) console.log(title)
  else console.log("Elemento con id " + id + " non trovato")

  const title2 = document.querySelector("#" + id)
  console.log(title2)
}

function selectTextElements() {
  const elements = document.getElementsByClassName("text")
  console.log(elements)
  const elements2 = document.querySelectorAll(".text")
  console.log(elements2)
}

function selectListItems() {
  const listElements = document.getElementsByTagName("li")
  console.log(listElements)
}

function traverseList() {
  const ul = document.getElementById("item-list")
  console.log("Parent node: ", ul.parentNode)
  console.log("Children: ", ul.children)
  console.log("First child: ", ul.firstElementChild)
  console.log("Last child: ", ul.lastElementChild)
  console.log("Second child:", ul.children[1])
}

function addNewItem(text) {
  // 1. Selezioniamo la lista
  const ul = document.getElementById("item-list")
  // 2. Creiamo il nuovo elemento (configurandolo come vogliamo)
  const li = document.createElement("li")
  li.textContent = text
  // 3. Aggiungiamo l'elemento
  ul.appendChild(li)
}

function removeElement(id) {
  const element = document.getElementById(id)
  if (element) element.remove()
}

function replaceSecondItem() {
  const ul = document.getElementById("item-list")
  const li = document.createElement("li")
  li.textContent = "This replaces the second element in the list"
  ul.replaceChild(li, ul.children[1])
}

function addClass() {
  const section = document.getElementById("text-section")
  const section2 = document.getElementById("list-section")
  const section3 = document.getElementById("box-section")

  section.classList.add("highlight")
  section2.classList.add("highlight")
  section3.classList.add("highlight")
}

function toggleClass() {
  const section = document.getElementById("text-section")
  section.classList.toggle("highlight")
}

function resetClasses() {
  const elements = document.querySelectorAll(".highlight")
  elements.forEach(element => element.classList.remove("highlight"))
}

function setBoxSize(width, height) {
  const box = document.getElementById("box")
  box.style.width = width + "px"
  box.style.height = height + "px"
}

function makeThemOrange() {
  const listItems = document.querySelectorAll("#item-list>li")

  for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index]
    element.style.color = "orange"
  }
}

function compareCollections() {
  const liveList = document.getElementsByClassName("text") // live collection
  const staticList = document.querySelectorAll(".text") // static NodeList

  console.log("Before adding: ")
  console.log("Live:", liveList.length)
  console.log("Static:", staticList.length)

  const newParagraph = document.createElement("p")
  newParagraph.className = "text"
  newParagraph.textContent = "New Paragraph"

  const parentSection = document.getElementById("text-section")
  parentSection.appendChild(newParagraph)

  console.log("Before adding: ")
  console.log("Live:", liveList.length)
  console.log("Static:", staticList.length)
}

function modifyAttributes() {
  const box = document.getElementById("box")
  box.setAttribute("info", "modified")
}

function removeLastItem() {
  const ul = document.getElementById("item-list")
  const last = ul.lastElementChild
  if (last) ul.removeChild(last)
}
