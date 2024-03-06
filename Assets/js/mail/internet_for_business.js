const dbURI = 'https://i-world-mail-server.onrender.com/mail';

// toast function
const toaster = (color, message, notificationsContainer) => {
  const toast = document.createElement('div');
  toast.innerHTML = `
  <div class="toast align-items-center text-white bg-${color} border-0 mt-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <div class="d-flex">
    <div class="toast-body">
      ${message}
    </div>
    <button aria-label="Close" class="btn-close fs-20 ms-auto mt-2 pe-2" data-bs-dismiss="toast"><span aria-hidden="true">×</span></button>
  </div>
  </div>`;

  notificationsContainer.prepend(toast);

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

const forBusinessMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/internet_for_business`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const notificationsContainer = document.getElementById('notificationsContainer');

document.getElementById('internetForBusinessForm').addEventListener('submit', (e) => {
  e.preventDefault();

    // Get value of the selected plan
    let selectedPlan = "";
    document.querySelectorAll('input[name="plan"]').forEach((radio) => {
      if (radio.checked) {
        selectedPlan = radio.value;
      }
    });

  const formData = {
    businessName: document.getElementById('business-name').value,
    businessAddress: document.getElementById('business-address').value,
    businessPhoneNo: document.getElementById('business-phoneNo').value,
    businessWhatsapp: document.getElementById('business-whatsapp').value,
    businessEmail: document.getElementById('business-email').value,
    selectedPlan: selectedPlan ? selectedPlan : "None selected",
    contactMethods: Array.from(document.querySelectorAll('input[name="contact[]"]:checked')).map(checkbox => checkbox.value),
    contactTimes: Array.from(document.querySelectorAll('input[name="time[]"]:checked')).map(checkbox => checkbox.value)
  };

  forBusinessMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    document.getElementById('internetForBusinessForm').reset();
    // redirect

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
  })

});


