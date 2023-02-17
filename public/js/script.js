function validateForm() {
    // Get the form inputs
    const fNameInput = document.getElementsByName('fName')[0];
    const lNameInput = document.getElementsByName('lName')[0];
    const emailInput = document.getElementsByName('email')[0];
    const telInput = document.getElementsByName('tel')[0];

    // Check if the inputs are empty
    if (fNameInput.value.trim() === '' || lNameInput.value.trim() === '' || emailInput.value.trim() === '' || telInput.value.trim() === '') {
      // If any input is empty, show an error message and prevent the form from submitting
      alert('Please fill in all the fields.');
      return false;
    }

    // If all inputs are not empty, submit the form
    return true;
  }