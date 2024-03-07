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

const enterpriseInternetMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/enterprise_internet`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


const notificationsContainer = document.getElementById('notificationsContainer');
const enterpriseInternetForm = document.getElementById('enterpriseInternetForm');

enterpriseInternetForm.addEventListener('submit', async(e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    companyName: document.getElementById('companyName').value,
    email: document.getElementById('email').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    state: document.getElementById('state').value,
    city: document.getElementById('city').value,
    contactMethods: Array.from(document.querySelectorAll('input[name="contact[]"]:checked')).map(checkbox => checkbox.value),
    contactTimes: Array.from(document.querySelectorAll('input[name="time[]"]:checked')).map(checkbox => checkbox.value)
  };

  enterpriseInternetMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    enterpriseInternetForm.reset();

    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
  })

})



