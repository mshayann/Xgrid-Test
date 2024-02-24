fetch('https://jsonplaceholder.typicode.com/todos')               //fetching data from the url.
    .then(response => response.json())          //implemented promise., it converts the response to JSON.
    .then(json => {                       //upon positive response of the previous promise, this will execute.
        let tbody = document.querySelector('#datatable tbody'); //selecting table body to append rows later on in the code.
        json.forEach(item => {
            let newRow = document.createElement('tr');            //news rows created
            let nameCell = document.createElement('td');          //new cells created to store data.
            nameCell.textContent = item.title;

            let descriptionCell = document.createElement('td');
            descriptionCell.textContent = item.title;

                                                                  //sbke liye same horha hy . new row new cell for data.
            let rateCell = document.createElement('td');
            rateCell.textContent = "Sample Rate";

            let balanceCell = document.createElement('td');
            balanceCell.textContent = "Sample Balance";

            let depositCell = document.createElement('td');
            depositCell.textContent = "Sample Deposit";

            let statusCell = document.createElement('td');
            statusCell.textContent = "Active";

            
            let deleteCell = document.createElement('td');
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener('click', function() {
                newRow.remove(); //remove the row when the button is triggerred..
                console.log(" delete button clicked"); //was checking if my callbakc is working or not.
            });
            deleteCell.appendChild(deleteButton);

            newRow.appendChild(nameCell);
            newRow.appendChild(descriptionCell);
            newRow.appendChild(rateCell);
            newRow.appendChild(balanceCell);
            newRow.appendChild(depositCell);
            newRow.appendChild(statusCell);
            newRow.appendChild(deleteCell);

            tbody.appendChild(newRow);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function searchTable() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("datatable");
    tr = table.getElementsByTagName("tr");

    
    for (i = 0; i < tr.length; i++) {           //hide the rows that don't match the search query
        td = tr[i].getElementsByTagName("td")[0]; 
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
