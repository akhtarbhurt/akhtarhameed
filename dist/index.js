"use strict";
var _a, _b, _c, _d, _e;
// Function to toggle sections
const toggleSection = (toggleButton, section) => {
    toggleButton.addEventListener("click", () => {
        var _a, _b;
        if (section.style.display === "none") {
            section.style.display = "block";
            toggleButton.innerHTML = toggleButton.innerHTML.replace("show", "hide");
            (_a = toggleButton
                .querySelector("i")) === null || _a === void 0 ? void 0 : _a.classList.replace("fa-angle-down", "fa-angle-up");
        }
        else {
            section.style.display = "none";
            toggleButton.innerHTML = toggleButton.innerHTML.replace("hide", "show");
            (_b = toggleButton
                .querySelector("i")) === null || _b === void 0 ? void 0 : _b.classList.replace("fa-angle-up", "fa-angle-down");
        }
    });
};
// Function to initialize toggle functionality
const initializeToggleFunctionality = () => {
    const professionalSummaryBtn = document.querySelector(".professional-summary .toggle");
    const professionalSummarySection = document.getElementById("professional-summary");
    const workExperienceBtn = document.querySelector(".work-experience .toggle");
    const workExperienceSection = document.getElementById("workExperience");
    const educationBtn = document.querySelector(".education .toggle");
    const educationSection = document.getElementById("education");
    const skillBtn = document.querySelector(".skill .toggle");
    const skillSection = document.getElementById("skill");
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
    const updateTextContent = (inputId, outputId) => {
        const inputElement = document.getElementById(inputId);
        const outputElement = document.getElementById(outputId);
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
    const updateContentEditable = (inputId, outputId) => {
        const inputElement = document.getElementById(inputId);
        const outputElement = document.getElementById(outputId);
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
    const inputProfilePhoto = document.getElementById("inputProfilePhoto");
    const profileImage = document.getElementById("profileImage");
    if (inputProfilePhoto && profileImage) {
        inputProfilePhoto.addEventListener("change", (event) => {
            var _a;
            const target = event.target;
            const file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && e.target.result) {
                        profileImage.src = e.target.result;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
// function to create a new work experience entry
const createWorkExperienceEntry = (jobTitle, companyName, startTime, endTime, description) => {
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
(_a = document.getElementById('addMoreExpeirenceBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const experienceJob = document.getElementById('experienceJob').value;
    const companyTitle = document.getElementById('companyTitle').value;
    const workStartTime = document.querySelector('input[type="date"]').value;
    const workEndTime = document.querySelectorAll('input[type="date"]')[1].value;
    const workDescription = document.getElementById('workDescription').value;
    if (experienceJob && companyTitle && workStartTime && workEndTime && workDescription) {
        const workExperienceSection = document.getElementById('experience-section');
        if (workExperienceSection) {
            const newEntry = createWorkExperienceEntry(experienceJob, companyTitle, workStartTime, workEndTime, workDescription);
            workExperienceSection.innerHTML += newEntry;
            //  clear the input fields
            document.getElementById('experienceJob').value = '';
            document.getElementById('companyTitle').value = '';
            document.querySelector('input[type="date"]').value = '';
            document.querySelectorAll('input[type="date"]')[1].value = '';
            document.getElementById('workDescription').value = '';
        }
    }
    else {
        alert('Please fill in all fields.');
    }
});
// function to create a new education entry
const createEducationEntry = (institutionName, degreeTitle, startTime, endTime, description) => {
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
(_b = document.getElementById('addMoreEducationBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const institutionName = document.getElementById('institutionName').value;
    const degreeTitle = document.getElementById('degreeTitle').value;
    const educationStartTime = document.getElementById('educationStartTime').value;
    const educationEndTime = document.getElementById('educationEndTime').value;
    const educationDescription = document.getElementById('educationDescription').value;
    if (institutionName && degreeTitle && educationStartTime && educationEndTime && educationDescription) {
        const educationSection = document.getElementById('education-section');
        if (educationSection) {
            const newEntry = createEducationEntry(institutionName, degreeTitle, educationStartTime, educationEndTime, educationDescription);
            educationSection.innerHTML += newEntry;
            document.getElementById('institutionName').value = '';
            document.getElementById('degreeTitle').value = '';
            document.getElementById('educationStartTime').value = '';
            document.getElementById('educationEndTime').value = '';
            document.getElementById('educationDescription').value = '';
        }
    }
    else {
        alert('Please fill in all fields.');
    }
});
// function to create a new skill entry
const createSkillEntry = (skillName, skillRating) => {
    const entryHTML = `
    <div class="mt-3 resume-skills">
      <p class="resume-text">${skillName}</p>
      <p class="resume-text">${skillRating}/<span>100</span></p>
    </div>
  `;
    return entryHTML;
};
// event listener for "Add Skill" button
(_c = document.getElementById('addSkillBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const skillName = document.getElementById('addSkill').value;
    const skillRating = document.getElementById('rating').value;
    if (skillName && skillRating) {
        const skillSection = document.getElementById('skill-section');
        if (skillSection) {
            const newEntry = createSkillEntry(skillName, skillRating);
            skillSection.innerHTML += newEntry;
            // Optionally, clear the input fields
            document.getElementById('addSkill').value = '';
            document.getElementById('rating').value = '';
        }
    }
    else {
        alert('Please fill in both fields.');
    }
});
(_d = document.getElementById('generateLinkBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    const username = document.getElementById('inputFirstName').value;
    if (username) {
       
        const uniqueKey = btoa(username); 
        const resumeData = {
            
            firstName: document.getElementById('inputFirstName').value,
            lastName: document.getElementById('inputLastName').value,
            email: document.getElementById('inputEmail').value,
           
        };
       
        localStorage.setItem(`resume-${uniqueKey}`, JSON.stringify(resumeData));
       
        const link = `${window.location.origin}/?resume=${uniqueKey}`;
        
        const tempInput = document.createElement('input');
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        alert(`The link has been copied to your clipboard:\n${link}`);
    }
    else {
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
           
            document.getElementById('inputFirstName').value = data.firstName;
            document.getElementById('inputLastName').value = data.lastName;
            document.getElementById('inputEmail').value = data.email;
        }
        else {
            alert('Resume not found.');
        }
    }
});
(_e = document.getElementById('printBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    var _a;
    const resumeContent = ((_a = document.querySelector('.resume-show')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Resume</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(resumeContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
});
