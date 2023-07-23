const modalDropdowns = document.getElementsByClassName("dropdown-content");
const modalsToSupport = document.getElementsByClassName("card");
const modalButtons = document.getElementsByClassName("card-button");
const modalDropButtons = document.getElementsByClassName("drop-btn");
const modalImages = document.getElementsByClassName("card-image");

export const ActiveModalState = (index) => {
  const modalDropdown = modalDropdowns[index];
  const modalToSupport = modalsToSupport[index];
  const modalButton = modalButtons[index];
  const modalDropButton = modalDropButtons[index];
  // const modalImage = modalImages[index];

  if (modalDropdown.classList.contains("active")) {
    modalToSupport.classList.add("active-modal-description");
    modalDropButton.classList.add("active-drop-btn"); //show whole button
    modalButton.classList.add("active-button"); //button styles
    // modalImage.classList.add("active-modal-img"); //card image stay
  } 

};

export const InActiveModalState = (index, currentActiveStateIndex) => {
  if (index == currentActiveStateIndex) return

      const modalToSupport = modalsToSupport[index]
      const modalButton = modalButtons[index]
      const modalDropButton = modalDropButtons[index]
      // const modalImage = modalImages[index]
      if(modalToSupport.classList.contains("active-modal-description")){
        modalToSupport.classList.remove("active-modal-description")
        modalDropButton.classList.remove("active-drop-btn") 
        modalButton.classList.remove("active-button") 
        // modalImage.classList.remove("active-modal-img");
    }

}

Array.from(modalsToSupport).forEach((modalToSupport, modalToSupportIndex) => {
  modalToSupport.addEventListener("mouseout", () => {
    ActiveModalState(modalToSupportIndex);
  });
});
