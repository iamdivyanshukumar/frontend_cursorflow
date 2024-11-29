document.addEventListener("DOMContentLoaded", () => {
    const modalButtons = document.querySelectorAll(".card-button");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-btn");

    // Open modal when corresponding button is clicked
    modalButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const modalId = button.getAttribute("data-modal-target");
            const modal = document.getElementById(modalId);
            modal.style.display = "flex";
        });
    });

    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // Close modal when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
