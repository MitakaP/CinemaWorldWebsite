document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const movieRows = document.querySelectorAll(".program-table tbody tr");

    // Filter movies based on search input
    searchInput.addEventListener("input", (e) => {
        const filterText = e.target.value.toLowerCase();
        movieRows.forEach(row => {
            const movieName = row.querySelector("td:first-child").textContent.toLowerCase();
            if (movieName.includes(filterText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});