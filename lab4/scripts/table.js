const tableDiv = document.getElementById("ccalTable");

async function getData() {
    request = new Request("http://localhost:8000/home",{
        method: "POST"
    });
    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonTable = await response.json();
        console.log(`Response status: ${response.status}`);
        return jsonTable.data

    } 
    catch (error) {
        console.error(error.message);
    }
}


async function loadTable() {
    try {
        table = await getData();

        for (let coffee of table) {
            const item = document.createElement("li");
            item.appendChild(document.createElement("span")).textContent = String(coffee.name + " - ");
            item.appendChild(document.createElement("span")).textContent = String(coffee.cal + "ккал");
            tableDiv.appendChild(item);
        }
        console.log("Table loaded");
    }
    catch(error) {
        console.error(error.message);
    }
}

window.addEventListener("load", function (event) {
    console.log("Page is fully loaded");
    console.log("Trying to fetch the table");
    loadTable();
});