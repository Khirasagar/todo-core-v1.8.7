const addStudentButton = document.getElementById("addStudentButton");
if (addStudentButton) {
  addStudentButton.addEventListener("click", function() {
  window.location.href = "form.html";
  });
}

const back = document.getElementById("back");
if(back){
  back.addEventListener("click", function() {
  console.log("first");
  window.location.href = "index.html";
  });
}


const contactForm = document.getElementById("contact_form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Retrieve the existing data from local storage or initialize an empty array
    let existingData = localStorage.getItem("student_data");
    existingData = existingData ? JSON.parse(existingData) : [];

    // Create an object to store the form values
    const formData = {
      fullName: contactForm.elements["first_name"].value,
      standard: contactForm.elements["standard"].value,
      house: contactForm.elements["house"].value,
      rollNumber: contactForm.elements["roll_number"].value,
      address: contactForm.elements["address"].value,
      email: contactForm.elements["email"].value,
      contactNo: contactForm.elements["contact_number"].value,
    };

    // Append the new form data to the existing data array
    existingData.push(formData);

    // Store the updated data array in local storage
    localStorage.setItem("student_data", JSON.stringify(existingData));

    // Optionally, you can also display a success message or reset the form
    // console.log("Form data saved to local storage:", formData);

    // Reset the form if needed
    contactForm.reset();
  });
}

 // Retrieve data from local storage
 var studentsData = JSON.parse(localStorage.getItem('studentsData'));

 // Get the table body element
 var tableBody = document.querySelector('#studentsTable tbody');

 // Populate the table rows with data
 if (student_data && Array.isArray(student_data)) {
  student_data.forEach(function(student, index) {
     var row = document.createElement('tr');
     row.innerHTML = `
       <td>${index + 1}</td>
       <td>${student.name}</td>
       <td>${student.standard}</td>
       <td>${student.house}</td>
       <td>${student.rollNumber}</td>
       <td>${student.address}</td>
       <td>${student.email}</td>
       <td>${student.contactNumber}</td>
     `;
     tableBody.appendChild(row);
   });
 }
