// Function to toggle sections
const toggleSection = (toggleButton: HTMLElement, section: HTMLElement) => {
  toggleButton.addEventListener("click", () => {
    if (section.style.display === "none") {
      section.style.display = "block";
      toggleButton.innerHTML = toggleButton.innerHTML.replace("show", "hide");
      toggleButton
        .querySelector("i")
        ?.classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      section.style.display = "none";
      toggleButton.innerHTML = toggleButton.innerHTML.replace("hide", "show");
      toggleButton
        .querySelector("i")
        ?.classList.replace("fa-angle-up", "fa-angle-down");
    }
  });
};

// Function to initialize toggle functionality
const initializeToggleFunctionality = () => {
  
  const professionalSummaryBtn = document.querySelector(
    ".professional-summary .toggle"
  ) as HTMLElement;
  const professionalSummarySection = document.getElementById(
    "professional-summary"
  ) as HTMLElement;

  const workExperienceBtn = document.querySelector(
    ".work-experience .toggle"
  ) as HTMLElement;
  const workExperienceSection = document.getElementById(
    "workExperience"
  ) as HTMLElement;

  const educationBtn = document.querySelector(
    ".education .toggle"
  ) as HTMLElement;
  const educationSection = document.getElementById("education") as HTMLElement;

  const skillBtn = document.querySelector(".skill .toggle") as HTMLElement;
  const skillSection = document.getElementById("skill") as HTMLElement;

  // by default, only keep Professional Summary open, hide the others
  workExperienceSection.style.display = "none";
  educationSection.style.display = "none";
  skillSection.style.display = "none";

  // attach event listeners for toggling sections
  toggleSection(professionalSummaryBtn, professionalSummarySection);
  toggleSection(workExperienceBtn, workExperienceSection);
  toggleSection(educationBtn, educationSection);
  toggleSection(skillBtn, skillSection);
};

// call the initialize function when the document is ready
document.addEventListener("DOMContentLoaded", initializeToggleFunctionality);

// add event listeners after the DOM content has loaded
document.addEventListener("DOMContentLoaded", () => {
  // function to update text content in the resume-show section
  const updateTextContent = (inputId: string, outputId: string): void => {
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    const outputElement = document.getElementById(outputId) as HTMLElement;

    if (inputElement && outputElement) {
      inputElement.addEventListener("input", () => {
        outputElement.textContent = inputElement.value;
      });
    }
  };

  // call the fields based on input
  updateTextContent("inputFirstName", "firstName");
  updateTextContent("inputLastName", "lastName");
  updateTextContent("inputJobTitle", "jobTitle");
  updateTextContent("inputEmail", "email");
  updateTextContent("inputPhone", "phone");
  updateTextContent("inputCountry", "country");
  updateTextContent("inputCity", "city");
  updateTextContent("professionalSummary", "profile-description");
  updateTextContent("experienceJob", "workJobTitle");
  updateTextContent("companyTitle", "companyName");
  updateTextContent("workStartTime", "experience-startTime");
  updateTextContent("workEndTime", "experience-endTime");
  updateTextContent("workDescription", "experience-description");

  const updateContentEditable = (inputId: string, outputId: string): void => {
    const inputElement = document.getElementById(inputId) as HTMLElement;
    const outputElement = document.getElementById(outputId) as HTMLElement;
  
    if (inputElement && outputElement) {
      inputElement.addEventListener("input", () => {
        outputElement.textContent = inputElement.textContent || '';
      });
    }
  };
  
  // call the updateContentEditable function for all relevant contenteditable elements
  
    updateContentEditable("editable-summary", "changed-summary");
    updateContentEditable("editableExperience", "changed-experience");
    updateContentEditable("editableEducation", "changed-education");
  

  // handle profile photo upload and preview
  const inputProfilePhoto = document.getElementById(
    "inputProfilePhoto"
  ) as HTMLInputElement;
  const profileImage = document.getElementById(
    "profileImage"
  ) as HTMLImageElement;

  if (inputProfilePhoto && profileImage) {
    inputProfilePhoto.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            profileImage.src = e.target.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

 // function to create a new work experience entry
 const createWorkExperienceEntry = (jobTitle: string, companyName: string, startTime: string, endTime: string, description: string) => {
  const entryHTML = `
    <div class="work-experience-entry">
      
      <p class="resume-text mt-3">
        <span id="workJobTitle">${jobTitle}</span> at <span id="companyName">${companyName}</span>
      </p>
      <p class="mt-1 resume-text">
        <span id="experience-startTime">${startTime}</span> - <span id="experience-endTime">${endTime}</span>
      </p>
      <p class="resume-text mt-3" id="experience-description">
        ${description}
      </p>
    </div>
  `;
  return entryHTML;
};

// event listener for "Add More Experience" button
document.getElementById('addMoreExpeirenceBtn')?.addEventListener('click', () => {
  const experienceJob = (document.getElementById('experienceJob') as HTMLInputElement).value;
  const companyTitle = (document.getElementById('companyTitle') as HTMLInputElement).value;
  const workStartTime = (document.querySelector('input[type="date"]') as HTMLInputElement).value;
  const workEndTime = (document.querySelectorAll('input[type="date"]')[1] as HTMLInputElement).value;
  const workDescription = (document.getElementById('workDescription') as HTMLTextAreaElement).value;

  if (experienceJob && companyTitle && workStartTime && workEndTime && workDescription) {
    const workExperienceSection = document.getElementById('experience-section');
    if (workExperienceSection) {
      const newEntry = createWorkExperienceEntry(experienceJob, companyTitle, workStartTime, workEndTime, workDescription);
      workExperienceSection.innerHTML += newEntry;

      //  clear the input fields
      (document.getElementById('experienceJob') as HTMLInputElement).value = '';
      (document.getElementById('companyTitle') as HTMLInputElement).value = '';
      (document.querySelector('input[type="date"]') as HTMLInputElement).value = '';
      (document.querySelectorAll('input[type="date"]')[1] as HTMLInputElement).value = '';
      (document.getElementById('workDescription') as HTMLTextAreaElement).value = '';
    }
  } else {
    alert('Please fill in all fields.');
  }
});


// function to create a new education entry
const createEducationEntry = (institutionName: string, degreeTitle: string, startTime: string, endTime: string, description: string) => {
  const entryHTML = `
    <div class="education-entry">
      <p class="resume-text mt-3">
        <span id="degreeTitle">${degreeTitle}</span> at <span id="institutionName">${institutionName}</span>
      </p>
      <p class="mt-1 resume-text">
        <span id="education-startTime">${startTime}</span> - <span id="education-endTime">${endTime}</span>
      </p>
      <p class="resume-text mt-3" id="education-description">
        ${description}
      </p>
    </div>
  `;
  return entryHTML;
};

// event listener for "Add More Education" button
document.getElementById('addMoreEducationBtn')?.addEventListener('click', () => {
  const institutionName = (document.getElementById('institutionName') as HTMLInputElement).value;
  const degreeTitle = (document.getElementById('degreeTitle') as HTMLInputElement).value;
  const educationStartTime = (document.getElementById('educationStartTime') as HTMLInputElement).value;
  const educationEndTime = (document.getElementById('educationEndTime') as HTMLInputElement).value;
  const educationDescription = (document.getElementById('educationDescription') as HTMLTextAreaElement).value;

  if (institutionName && degreeTitle && educationStartTime && educationEndTime && educationDescription) {
    const educationSection = document.getElementById('education-section');
    if (educationSection) {
      const newEntry = createEducationEntry(institutionName, degreeTitle, educationStartTime, educationEndTime, educationDescription);
      educationSection.innerHTML += newEntry;

      
      (document.getElementById('institutionName') as HTMLInputElement).value = '';
      (document.getElementById('degreeTitle') as HTMLInputElement).value = '';
      (document.getElementById('educationStartTime') as HTMLInputElement).value = '';
      (document.getElementById('educationEndTime') as HTMLInputElement).value = '';
      (document.getElementById('educationDescription') as HTMLTextAreaElement).value = '';
    }
  } else {
    alert('Please fill in all fields.');
  }
});

// function to create a new skill entry
const createSkillEntry = (skillName: string, skillRating: string) => {
  const entryHTML = `
    <div class="mt-3 resume-skills">
      <p class="resume-text">${skillName}</p>
      <p class="resume-text">${skillRating}/<span>100</span></p>
    </div>
  `;
  return entryHTML;
};

// event listener for "Add Skill" button
document.getElementById('addSkillBtn')?.addEventListener('click', () => {
  const skillName = (document.getElementById('addSkill') as HTMLInputElement).value;
  const skillRating = (document.getElementById('rating') as HTMLInputElement).value;

  if (skillName && skillRating) {
    const skillSection = document.getElementById('skill-section');
    if (skillSection) {
      const newEntry = createSkillEntry(skillName, skillRating);
      skillSection.innerHTML += newEntry;

      // Optionally, clear the input fields
      (document.getElementById('addSkill') as HTMLInputElement).value = '';
      (document.getElementById('rating') as HTMLInputElement).value = '';
    }
  } else {
    alert('Please fill in both fields.');
  }
});


document.getElementById('generateLinkBtn')?.addEventListener('click', () => {
  const username = (document.getElementById('inputFirstName') as HTMLInputElement).value;
  if (username) {
    // Generate a unique key based on username
    const uniqueKey = btoa(username); // Base64 encoding for simplicity
    const resumeData = {
      // Collect resume data
      firstName: (document.getElementById('inputFirstName') as HTMLInputElement).value,
      lastName: (document.getElementById('inputLastName') as HTMLInputElement).value,
      email: (document.getElementById('inputEmail') as HTMLInputElement).value,
      // Add other data as needed
    };

    // Save resume data in localStorage
    localStorage.setItem(`resume-${uniqueKey}`, JSON.stringify(resumeData));

    // Create a shareable link
    const link = `${window.location.origin}/?resume=${uniqueKey}`;
    
    // Create a temporary input element to copy the link
    const tempInput = document.createElement('input');
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show an alert with a message
    alert(`The link has been copied to your clipboard:\n${link}`);
  } else {
    alert('Please enter a username.');
  }
});



window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const uniqueKey = urlParams.get('resume');
  if (uniqueKey) {
    const resumeData = localStorage.getItem(`resume-${uniqueKey}`);
    if (resumeData) {
      const data = JSON.parse(resumeData);
      // Populate resume fields with data
      (document.getElementById('inputFirstName') as HTMLInputElement).value = data.firstName;
      (document.getElementById('inputLastName') as HTMLInputElement).value = data.lastName;
      (document.getElementById('inputEmail') as HTMLInputElement).value = data.email;
     
    } else {
      alert('Resume not found.');
    }
  }
});


document.getElementById('printBtn')?.addEventListener('click', () => {
  const resumeContent = document.querySelector('.resume-show')?.innerHTML || '';
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow!.document.write('<html><head><title>Print Resume</title>');
  printWindow!.document.write('</head><body >');
  printWindow!.document.write(resumeContent);
  printWindow!.document.write('</body></html>');
  printWindow!.document.close();
  printWindow!.focus();
  printWindow!.print();
});

