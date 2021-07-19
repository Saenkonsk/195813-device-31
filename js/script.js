const buttonTextUs = document.querySelector(".button_text-us");
const feedbackFormSection = document.querySelector(".feedback-form-section");
const butonCloseFeedback = document.querySelector(".button_close_feedback");
const linkMap = document.querySelector(".map");
const modalMap = document.querySelector(".modal__map");
const butonCloseMap = document.querySelector(".button_close_map");

buttonTextUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackFormSection.classList.remove("modal_hide");
  feedbackFormSection.classList.add("modal_show");
});

butonCloseFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackFormSection.classList.remove("modal_show");
  feedbackFormSection.classList.add("modal_hide");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal_hide");
  modalMap.classList.add("modal_show");
});

butonCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal_show");
  modalMap.classList.add("modal_hide");
});
