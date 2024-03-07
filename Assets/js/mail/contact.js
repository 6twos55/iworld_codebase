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

const contactMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const notificationsContainer = document.getElementById('notificationsContainer');

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    fullName: document.getElementById('name').value,
    emailAddress: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  contactMail(formData)
  .then(result => {
    toaster("success", result.message, notificationsContainer);
    document.getElementById('contactForm').reset();

    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  }).catch(error => {
    toaster("danger", error.message, notificationsContainer);
    console.log(error);
  })

})

