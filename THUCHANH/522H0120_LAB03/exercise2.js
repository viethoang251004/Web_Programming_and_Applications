// function validateForm() {
//     let txtEmail = document.getElementById('email');
//     let txtPwd = document.getElementById('pwd');
//     let email = txtEmail.value;
//     let pwd = txtPwd.value;
//     let msg = '';

//     if(email == null || email == '') {
//         msg = 'Please enter your email!';
//     } else if(pwd == null || pwd == '') {
//         msg = 'Please enter your password!';
//     } else if(!email.includes('@')) {
//         msg = 'Please enter a valid email!';
//     } else if(pwd.length < 6) {
//         msg = 'Your password must contain at least 6 characters!';
//     }

//     let lblErrorMessage = document.getElementsByClassName('errorMessage')[0];
//     lblErrorMessage.innerText = msg;

//     if(msg=='') {
//         lblErrorMessage.classList.add('d-none');
//         return true;
//     }

//     lblErrorMessage.classList.remove('d-none');
//     return false;
// }

// function addStudent() {
//     let txtFirstname = document.getElementById('firstname');
//     let txtLastname = document.getElementById('lastname');
//     let txtEmail = document.getElementById('email');

//     let tbody = document.getElementsByTagName('tbody')[0];
//     let tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerText = txtFirstname.value;
//     tr.appendChild(td1);

//     let td2 = document.createElement('td');
//     td2.innerText = txtLastname.value;
//     tr.appendChild(td2);
    
//     let td3 = document.createElement('td');
//     td3.innerText = txtEmail.value;
//     tr.appendChild(td3);

//     let td4 = document.createElement('td');
//     td4.innerHTML = '<button onclick="removeStudent(this)" class="btn btn-danger btn-sm">Delete</button>';
//     tr.appendChild(td4);
// }

// function removeStudent(btnRemove) {
//     let td = btnRemove.parentElement;
//     let tr = td.parentElement;
//     tr.remove();
// }

// Function to add a new student
// function addStudent() {
//     // Get input values
//     var firstname = document.getElementById('firstname').value;
//     var lastname = document.getElementById('lastname').value;
//     var email = document.getElementById('email').value;

//     // Check if any field is blank
//     if (firstname === "" || lastname === "" || email === "") {
//         alert("All fields are required!");
//         return;
//     }

//     // Get the table
//     var table = document.querySelector('.table tbody');

//     // Create a new row
//     var row = table.insertRow();

//     // Add cells to the row
//     row.insertCell(0).innerHTML = firstname;
//     row.insertCell(1).innerHTML = lastname;
//     row.insertCell(2).innerHTML = email;

//     // Add delete button
//     var deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.className = 'btn btn-danger btn-sm';
//     deleteBtn.onclick = function() {
//         this.parentElement.parentElement.remove();
//     };
//     row.insertCell(3).appendChild(deleteBtn);
// }

// // Attach the function to the 'Add' button
// document.querySelector('.btn-success').onclick = addStudent;


function addStudent() {
    // Get input values
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    // Check if any field is blank
    if (firstname === "" || lastname === "" || email === "") {
      alert("Please fill in all fields");
      return;
    }
    // Create a new row for the student
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(table.rows.length);
    // Insert cells with input values
    var firstNameCell = newRow.insertCell(0);
    var lastNameCell = newRow.insertCell(1);
    var emailCell = newRow.insertCell(2);
    var deleteCell = newRow.insertCell(3);
  
    firstNameCell.innerHTML = firstname;
    lastNameCell.innerHTML = lastname;
    emailCell.innerHTML = email;
    deleteCell.innerHTML = '<button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Delete</button>';
    // Reset the form
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
  }
  
  function deleteStudent(button) {
    // Delete the corresponding row
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }