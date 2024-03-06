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

const forHomeMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/internet_for_home`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const notificationsContainer = document.getElementById('notificationsContainer');

document.getElementById('internetForHomeForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phoneNo = document.getElementById('phoneNo').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const address = document.getElementById('address').value;

  // Get value of the selected plan
  let selectedPlan = "";
  document.querySelectorAll('input[name="plan"]').forEach((radio) => {
    if (radio.checked) {
      selectedPlan = radio.value;
    }
  });

  // Get values of selected checkboxes for how to contact
  const contactMethods = Array.from(document.querySelectorAll('input[name="contact[]"]:checked'))
      .map(checkbox => checkbox.value);

  // Get values of selected checkboxes for best time to contact
  const contactTimes = Array.from(document.querySelectorAll('input[name="time[]"]:checked'))
      .map(checkbox => checkbox.value);

  const formData = {
    name,
    email,
    phoneNo,
    whatsapp,
    address,
    selectedPlan: selectedPlan ? selectedPlan : "None selected",
    contactMethods,
    contactTimes
  };

  forHomeMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    document.getElementById('internetForHomeForm').reset();
    
    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
  })

});


