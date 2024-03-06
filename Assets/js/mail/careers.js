const filesURI = 'https://i-world-mail-server.onrender.com/files';
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

const careerMail = async(formData) => {
  try {
    const response = await axios.post(`${dbURI}/career`, formData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const uploadFile = async(fileData) => {
  try {
    const response = await axios.post(`${filesURI}/testupload`, fileData, { 
      headers: {'Content-Type': 'multipart/form-data'}
    });

    return response;
  } catch (error) {
    throw error.response.data;
  }
};

const notificationsContainer = document.getElementById('notificationsContainer');
const careersForm = document.getElementById('careersForm');

careersForm.addEventListener('submit', async(e) => {
  e.preventDefault();

  try {
    const coverLetterData = new FormData();
    coverLetterData.append('file', careersForm.fileCoverLetter.files[0]);

    const resumeData = new FormData();
    resumeData.append('file', careersForm.fileResume.files[0]);

    const upload1 = await uploadFile(coverLetterData);
    const coverLetter = upload1.data.url;
    // console.log(coverLetter);

    const upload2 = await uploadFile(resumeData);
    const resume = upload2.data.url;
    // console.log(resume);

    const formData = new FormData(careersForm);
    const values = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phoneNo: formData.get('phoneNo'),
      position: formData.get('position'),
      email: formData.get('email'),
      location: formData.get('Location'),
      coverLetter,
      resume
    };

    // console.log("Form values: ", values);

    const result = await careerMail(values);
    toaster("success", result.message, notificationsContainer);
    careersForm.reset();

    setTimeout(() => {
      location.href = "confirmation.html";
    }, 3000);

  } catch(error) {
    toaster("danger", error.message, notificationsContainer);
    console.log(error);
  }

})



