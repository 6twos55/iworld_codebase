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

const googleWorkspaceMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/google_workspace`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


const notificationsContainer = document.getElementById('notificationsContainer');
const googleForm = document.getElementById('googleWorkspaceForm');

googleForm.addEventListener('submit', async(e) => {
  e.preventDefault();

  const formData = {
    fullName: document.getElementById('fullName').value,
    businessName: document.getElementById('businessName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    businessEmail: document.getElementById('businessEmail').value,
    companySize: document.getElementById('companySize').value,
    businessDomain: document.getElementById('businessDomain').value,
    howDidYouHear: document.getElementById('howDidYouHear').value
  };

  googleWorkspaceMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    googleForm.reset();

    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
  })

})



