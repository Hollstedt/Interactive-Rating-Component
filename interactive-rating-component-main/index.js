const submitButton = document.querySelector(".submit-btn");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const yourRating = document.querySelector(".your-rating");

submitButton.addEventListener("click", () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');

    if (!selectedRating) {
        alert("Choose a rating before submit");
        return;
    }
    
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
    yourRating.textContent = selectedRating.value;
});