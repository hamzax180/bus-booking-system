document.addEventListener("DOMContentLoaded", function() {
    const seatContainer = document.querySelector(".bus-layout");

    if (!seatContainer) {
        console.error("Error: .bus-layout not found!");
        return;
    }

    let rows = 8; // 8 rows
    let cols = 4; // 4 columns per row (2 on each side)

    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "seat-row";

        for (let j = 0; j < cols; j++) {
            let seatNumber = i * cols + j + 1;
            let seat = document.createElement("button");
            seat.className = "seat";
            seat.textContent = seatNumber;
            seat.onclick = function() { selectSeat(this); };

            // Create aisle gap (between columns 2 and 3)
            if (j === 2) {
                let aisle = document.createElement("div");
                aisle.className = "aisle";
                rowDiv.appendChild(aisle);
            }

            rowDiv.appendChild(seat);
        }

        seatContainer.appendChild(rowDiv);
    }
});

function selectSeat(button) {
    document.querySelectorAll('.seat').forEach(seat => seat.classList.remove('selected'));
    button.classList.add('selected');
}

function confirmSeat() {
    const selectedSeat = document.querySelector('.seat.selected');
    if (!selectedSeat) {
        alert("Please select a seat before confirming.");
        return;
    }

    alert(`Seat ${selectedSeat.textContent} confirmed! Proceeding to payment...`);
    
    // Store seat selection in localStorage for access in payment page
    localStorage.setItem("selectedSeat", selectedSeat.textContent);
    
    // Redirect to payment page
    window.location.href = "payment.html";
}
