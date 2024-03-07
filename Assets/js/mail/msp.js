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

const mspMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/msp`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const notificationsContainer = document.getElementById('notificationsContainer');

document.getElementById('mspForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('input1').value,
    businessName: document.getElementById('input2').value,
    phoneNumber: document.getElementById('input3').value,
    businessNumber: document.getElementById('input4').value,
    emailAddress: document.getElementById('input5').value,
    businessAddress: document.getElementById('input6').value,
    companySize: document.getElementById('select1').value
  };

  mspMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    document.getElementById('mspForm').reset();

    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
  })

})



