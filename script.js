let responses = [];

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const order = document.querySelector("input[name='order']:checked")?.value || "";
    const notes = event.target.notes.value;

    responses.push({ name, order, notes });

    alert("Response submitted!");

    event.target.reset();
});

function downloadCSV() {
    let csv = "Name,Order,Notes\n";
    responses.forEach(r => {
        csv += `${r.name},${r.order},${r.notes}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "responses.csv";
    a.click();
}

function clearResponses() {
    responses = [];
    alert("Responses cleared.");
}
