const driverName = documnet.getElementById("driver-name");
const vehicleReg = document.getElementById("vehicle-reg");
const date = document.getElementById("date");
const check = document.getElementById("check");
const checkList = document.getElementById("start-check-btn");
const submit = document.getElementById("submit-btn");

function validateForm() {
    if (!driverName.value) {
       alert("Driver name is required.");
       return false;
    }
    if (!vehicleReg.value) {
       alert("Vehicle registration is required.");
       return false;
    }
    if (!date.value) {
       alert("Date is required.");
       return false;
    }
    return true;
 }
 
 submit.addEventListener("click", function (event) {
    event.preventDefault(); 
    if (validateForm()) {
       alert("Form submitted successfully!")
    }
 });

 checkList.classList.add('highlighted');
checkList.addEventListener("mouseenter", function() {
   checkList.style.backgroundColor = "#f0f0f0"; 
});
checkList.addEventListener("mouseleave", function() {
   checkList.style.backgroundColor = ""; 
});

const today = new Date().toISOString().split('T')[0];
date.value = today;

function showSuccessMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = 'success-message';
    document.body.appendChild(messageElement);
    setTimeout(() => messageElement.remove(), 3000); 
 }
 
 submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
       showSuccessMessage("Form submitted successfully!");
    }
 });
 submit.addEventListener("click", function() {
    submit.style.transform = "scale(1.1)";
    setTimeout(() => submit.style.transform = "scale(1)", 200); 
 });
 
 submit.addEventListener("click", function() {
    if (validateForm()) {
       localStorage.setItem("driverName", driverName.value);
       localStorage.setItem("vehicleReg", vehicleReg.value);
       localStorage.setItem("date", date.value);
       alert("Data saved locally!");
    }
 });

 window.addEventListener("load", function() {
    if (localStorage.getItem("driverName")) {
       driverName.value = localStorage.getItem("driverName");
       vehicleReg.value = localStorage.getItem("vehicleReg");
       date.value = localStorage.getItem("date");
    }
 });

 function showLoading() {
    const loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-spinner';
    document.body.appendChild(loadingSpinner);
 }
 
 function hideLoading() {
    document.querySelector('.loading-spinner').remove();
 }
 
 submit.addEventListener("click", function () {
    if (validateForm()) {
       showLoading();
       setTimeout(hideLoading, 2000);
       alert("Data submitted!");
    }
 });
