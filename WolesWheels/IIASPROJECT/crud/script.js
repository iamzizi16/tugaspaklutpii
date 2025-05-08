let rentals = [];

function addRental() {
  const driver = document.querySelector('input[name="driver"]:checked').value;
  const location = document.getElementById("location").value;
  const startDate = document.getElementById("startDate").value;
  const startTime = document.getElementById("startTime").value;
  const endDate = document.getElementById("endDate").value;
  const endTime = document.getElementById("endTime").value;

  if (!location || !startDate || !startTime || !endDate || !endTime) {
    alert("Please fill all fields.");
    return;
  }

  rentals.push({
    driver,
    location,
    start: `${startDate} ${startTime}`,
    end: `${endDate} ${endTime}`,
  });
  renderRentals();
  clearForm();
}

function renderRentals() {
  const list = document.getElementById("rentalList");
  list.innerHTML = "";
  rentals.forEach((rental, index) => {
    list.innerHTML += `
      <tr>
        <td>${rental.driver}</td>
        <td>${rental.location}</td>
        <td>${rental.start}</td>
        <td>${rental.end}</td>
        <td>
          <button onclick="editRental(${index})">Edit</button>
          <button onclick="deleteRental(${index})">Delete</button>
        </td>
      </tr>`;
  });
}

function deleteRental(index) {
  rentals.splice(index, 1);
  renderRentals();
}

function editRental(index) {
  const rental = rentals[index];
  const [startDate, startTime] = rental.start.split(" ");
  const [endDate, endTime] = rental.end.split(" ");

  document.querySelector(`input[name="driver"][value="${rental.driver}"]`).checked = true;
  document.getElementById("location").value = rental.location;
  document.getElementById("startDate").value = startDate;
  document.getElementById("startTime").value = startTime;
  document.getElementById("endDate").value = endDate;
  document.getElementById("endTime").value = endTime;

  deleteRental(index);
}

function saveToLocalStorage() {
  localStorage.setItem("rentals", JSON.stringify(rentals));
  alert("Saved to local storage");
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("rentals");
  if (data) {
    rentals = JSON.parse(data);
    renderRentals();
  } else {
    alert("No saved data found");
  }
}

function exportToCSV() {
  if (rentals.length === 0) return alert("No data to export");

  let csv = "Driver,Location,Start,End\n";
  rentals.forEach((r) => {
    csv += `${r.driver},${r.location},${r.start},${r.end}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "car_rentals.csv";
  a.click();
}

function clearForm() {
  document.getElementById("location").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("endTime").value = "";
}
