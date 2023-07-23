import {InActiveModalState} from "../Javascripts/modal-unhover.js"

let activeDropdown = null;
let openDropdownIndex = -1;
const toggleButtons = document.getElementsByClassName("card-button")
const dropdownContents = document.getElementsByClassName("dropdown-content");
const dropdownCards = document.getElementsByClassName("card");
const arrowIcons = document.getElementsByClassName("arrow-icon");
const dropdownStates = [false, false, false, false, false];
const modalDropButtons = document.getElementsByClassName("drop-btn");
const modalButtons = document.getElementsByClassName("card-button");


Array.from(toggleButtons).forEach((toggleButtonItem, toggleButtonIndex) => {
    toggleButtonItem.addEventListener("click", (event) => toggleDropdown(toggleButtonIndex, event))
})


function toggleDropdown(index, e) {
  const arrowIcon = arrowIcons[index];
  const dropdownContent = dropdownContents[index];
  const dropdownCard = dropdownCards[index];
  const modalButton = modalButtons[index]
  const modalDropButton = modalDropButtons[index]
  console.log(e.target);
  
  // Close the dropdown if it is already open
  if (dropdownStates[index]) {
    dropdownContent.style.maxHeight = "0";
    dropdownContent.classList.remove("active");
    arrowIcon.classList.remove("rotate");
    dropdownCard.classList.remove("active-modal-description");
    modalDropButton.classList.remove("active-drop-btn") 
    modalButton.classList.remove("active-button") 
    dropdownStates[index] = false;
    activeDropdown = null;
    openDropdownIndex = -1;
    return;
  }

  // Close the active dropdown if another dropdown is clicked
  if (activeDropdown !== null && activeDropdown !== dropdownContent) {
    activeDropdown.style.maxHeight = null;
    dropdownCard.classList.remove("active-modal-description");
    activeDropdown.classList.remove("active");
    const previousArrowIcon = arrowIcons[openDropdownIndex];
    previousArrowIcon.classList.remove("rotate");
    dropdownStates[openDropdownIndex] = false;
  }
  
  dropdownStates[index] = !dropdownStates[index];
  dropdownContent.classList.toggle("active");
  arrowIcon.classList.toggle("rotate", dropdownStates[index]);
  
  if (dropdownStates[index]) {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    activeDropdown = dropdownContent;
    openDropdownIndex = index;
  
    for(let i = 0; i < dropdownContents.length; i++){
      InActiveModalState(i, index);
    }

  } else {
    setTimeout(() => {
      dropdownContent.style.maxHeight = "0";
    }, 10);
    activeDropdown = null;
    openDropdownIndex = -1;
  }
}