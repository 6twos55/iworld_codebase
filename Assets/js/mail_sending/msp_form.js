const dbURI = 'http://localhost:3005/mail';

const registerMail = async(values) => {
  try {
    const response = await axios.post(`${dbURI}/register`, values);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const registerForm = document.getElementById('registerForm');

document.addEventListener('DOMContentLoaded', () => {
  registerForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    // Get values of input fields
    const firstName = document.getElementById('input1').value;
    const businessName = document.getElementById('input2').value;
    const emailAddress = document.getElementById('input3').value;
    const phoneNumber = document.getElementById('input4').value;
    const companySize = document.getElementById('companySize').value;
    const currentITInfrastructure = document.getElementById('currentITInfrastructure').value;
    const currentITChallenges = document.getElementById('currentITChallenges').value;

    // Get values of selected checkboxes in "Services Needed" section
    const servicesNeededCheckboxes = document.querySelectorAll('#registerForm .services-needed-check-input');
    const selectedServicesNeeded = Array.from(servicesNeededCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Get value of the "Others" input in "Services Needed" section
    const otherServices = document.getElementById('otherServices').value;

    // Get values of selected checkboxes in "Preferred Service Level Agreement (SLA)" section
    const slaCheckboxes = document.querySelectorAll('#registerForm .sla-check-input');
    const selectedSLA = Array.from(slaCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Get value of the "Custom SLA" input
    const customSLA = document.getElementById('customSLA').value;

    // Get values of selected checkboxes in "Budget Range for Managed Services" section
    const budgetRangeCheckboxes = document.querySelectorAll('#registerForm .budget-range-check-input');
    const selectedBudgetRange = Array.from(budgetRangeCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Get values of selected checkboxes in "How Did You Hear About Us?" section
    const howYouHeardCheckboxes = document.querySelectorAll('#registerForm .how-check-input');
    const selectedHowYouHeard = Array.from(howYouHeardCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.nextElementSibling.textContent.trim());

    // Get value of the "Others" input in "How Did You Hear About Us?" section
    const otherHeardAboutUs = document.getElementById('otherHeardAboutUs').value;

    // Get value of the "Additional Comments or Questions" textarea
    const additionalComments = document.getElementById('additionalComments').value;

    // Create an object to store form data
    const formData = {
      firstName,
      businessName,
      emailAddress,
      phoneNumber,
      companySize,
      currentITInfrastructure,
      currentITChallenges: currentITChallenges ? currentITChallenges : "None",
      selectedServicesNeeded,
      otherServices: otherServices ? otherServices : "None",
      selectedSLA,
      customSLA: customSLA ? customSLA : "None",
      selectedBudgetRange,
      selectedHowYouHeard,
      otherHeardAboutUs: otherHeardAboutUs ? otherHeardAboutUs : "None",
      additionalComments: additionalComments ? additionalComments : "None"
    };

    registerMail(formData)
    .then((result) => {
      console.log("Register mail sent!");
      /////////// create a notification div/toaster and add the content of result.message in it
      registerForm.reset();
    })
    .catch(error => {
      console.log(error);
    })

  })

});
