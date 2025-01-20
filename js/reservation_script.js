document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("reservation-form");
    const movieSelect = document.getElementById("movie");
    const timeSelect = document.getElementById("time");

    const movieShowtimes = {
      avatar: ["12:00 PM", "3:00 PM", "6:00 PM"],
      batman: ["1:00 PM", "4:00 PM", "7:00 PM"],
      spiderman: ["2:00 PM", "5:00 PM", "8:00 PM"],
      "doctor-strange": ["12:30 PM", "3:30 PM", "6:30 PM"],
      "top-gun": ["1:30 PM", "4:30 PM", "7:30 PM"],
      "jurassic-world": ["2:30 PM", "5:30 PM", "8:30 PM"],
      "black-panther": ["12:15 PM", "3:15 PM", "6:15 PM"],
      minions: ["09:30 AM", "12:15 PM", "2:45 PM"],
      "super-mario": ["10:00 AM", "1:00 PM", "4:00 PM"],
      "shrek-forever": ["09:45 AM", "12:30 PM", "2:55 PM"],
      "ice-age-3": ["10:15 AM", "1:15 PM", "3:45 PM"],
    };

    movieSelect.addEventListener("change", () => {
      const selectedMovie = movieSelect.value;
      timeSelect.innerHTML = '<option value="">--Select a Time--</option>';

      if (selectedMovie && movieShowtimes[selectedMovie]) {
        movieShowtimes[selectedMovie].forEach((time) => {
          const option = document.createElement("option");
          option.value = time;
          option.textContent = time;
          timeSelect.appendChild(option);
        });
      }
    });

    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const movie = movieSelect.value;
      const date = document.getElementById("date").value;
      const time = timeSelect.value;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const seats = document.getElementById("seats").value;

      // Validations
      if (!movie) {
        alert("Please select a movie.");
        return;
      }
      if (!date) {
        alert("Please select a date.");
        return;
      }
      if (!time) {
        alert("Please select a time.");
        return;
      }
      if (!name) {
        alert("Please enter your name.");
        return;
      }
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!seats || seats <= 0) {
        alert("Please enter a valid number of seats.");
        return;
      }

      // Alert Window
      alert(`Reservation confirmed!\n\nMovie: ${movie}\nDate: ${date}\nTime: ${time}\nName: ${name}\nEmail: ${email}\nSeats: ${seats}`);

      reservationForm.reset();
      // Resets the time dropdown
      timeSelect.innerHTML = '<option value="">--Select a Time--</option>';
    });

    // Email validation function
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
});