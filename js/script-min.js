const buttonTextUs = document.querySelector(".button_text-us"), feedbackFormSection = document.querySelector(".feedback-form-section"), butonCloseFeedback = document.querySelector(".button_close_feedback"), linkMap = document.querySelector(".map"), modalMap = document.querySelector(".modal__map"), butonCloseMap = document.querySelector(".button_close_map"); buttonTextUs.addEventListener("click", function (e) { e.preventDefault(), feedbackFormSection.classList.remove("modal_hide"), feedbackFormSection.classList.add("modal_show") }), butonCloseFeedback.addEventListener("click", function (e) { e.preventDefault(), feedbackFormSection.classList.remove("modal_show"), feedbackFormSection.classList.add("modal_hide") }), linkMap.addEventListener("click", function (e) { e.preventDefault(), modalMap.classList.remove("modal_hide"), modalMap.classList.add("modal_show") }), butonCloseMap.addEventListener("click", function (e) { e.preventDefault(), modalMap.classList.remove("modal_show"), modalMap.classList.add("modal_hide") });
