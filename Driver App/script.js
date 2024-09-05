// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // Handle checklist form submission
    const checklistForm = document.querySelector('form');
    if (checklistForm) {
        checklistForm.addEventListener('submit', function (event) {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let allChecked = true;

            // Check if all checkboxes are checked
            checkboxes.forEach(function (checkbox) {
                if (!checkbox.checked) {
                    allChecked = false;
                }
            });

            // If not all checkboxes are checked, prevent form submission and alert the user
            if (!allChecked) {
                event.preventDefault();
                alert('Please complete all the checklist items before submitting.');
            } else {
                alert('Checklist successfully submitted!');
            }
        });
    }

    // Handle return button click for confirmation
    const returnButton = document.querySelector('.return-button');
    if (returnButton) {
        returnButton.addEventListener('click', function (event) {
            const confirmReturn = confirm('Are you sure you want to return to the main page? Unsaved changes will be lost.');
            if (!confirmReturn) {
                event.preventDefault();
            }
        });
    }

    // Submit button on the main page (optional additional functionality)
    const submitBtn = document.querySelector('#submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            alert('Details successfully submitted!');
        });
    }
});
