document.getElementById("open-form-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

// Закрытие формы
document.getElementById("close-form-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Закрытие формы при клике за её пределами
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});