const dbURI = 'http://localhost:3005/mail';

const serviceMail = async(values) => {
  try {
    const response = await axios.post(`${dbURI}/service`, values);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const serviceForm = document.getElementById('serviceForm');

document.addEventListener('DOMContentLoaded', () => {
  serviceForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    // Get values of selected checkboxes in "Additional Products..." section
    const additionalServicesCheckboxes = document.querySelectorAll('#serviceForm .form-check-input');
    const selectedAdditionalServices = Array.from(additionalServicesCheckboxes)
    .filter(checkbox => checkbox.checked && checkbox.id.startsWith('serviceCheckbox'))
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Get values of selected checkboxes in "How Did You Hear About Us?" section
    const howYouHeardCheckboxes = document.querySelectorAll('#serviceForm .form-check-input');
    const selectedHowYouHeard = Array.from(howYouHeardCheckboxes)
    .filter(checkbox => checkbox.checked && checkbox.id.startsWith('howYouHeard'))
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());


    // Display the selected values
    const formData = {
      fullName: serviceForm.fullName.value,
      email: serviceForm.email.value,
      phoneNumber: serviceForm.phoneNumber.value,
      address: serviceForm.address.value,
      servicePlan: serviceForm.servicePlan.value,
      surveyDate: serviceForm.surveyDate.value,
      currentISP: serviceForm.currentISP.value,
      contractEndDate: serviceForm.contractEndDate.value,
      selectedAdditionalServices,
      selectedHowYouHeard,
      otherServices: serviceForm.otherServices.value ? serviceForm.otherServices.value : "None",
      additionalComments: serviceForm.additionalComments.value ? serviceForm.additionalComments.value : "No additional comments"
    };

    serviceMail(formData)
    .then((result) => {
      console.log("Service mail sent!");
      /////////// create a notification div/toaster and add the content of result.message in it
      serviceForm.reset();
    })
    .catch(error => {
      console.log(error.message);
    })

  })

});
