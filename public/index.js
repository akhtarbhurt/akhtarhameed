var _a, _b, _c, _d, _e;
// Function to toggle sections
var toggleSection = function (toggleButton, section) {
    toggleButton.addEventListener("click", function () {
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
var initializeToggleFunctionality = function () {
    var professionalSummaryBtn = document.querySelector(".professional-summary .toggle");
    var professionalSummarySection = document.getElementById("professional-summary");
    var workExperienceBtn = document.querySelector(".work-experience .toggle");
    var workExperienceSection = document.getElementById("workExperience");
    var educationBtn = document.querySelector(".education .toggle");
    var educationSection = document.getElementById("education");
    var skillBtn = document.querySelector(".skill .toggle");
    var skillSection = document.getElementById("skill");
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
document.addEventListener("DOMContentLoaded", function () {
    // function to update text content in the resume-show section
    var updateTextContent = function (inputId, outputId) {
        var inputElement = document.getElementById(inputId);
        var outputElement = document.getElementById(outputId);
        if (inputElement && outputElement) {
            inputElement.addEventListener("input", function () {
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
    var updateContentEditable = function (inputId, outputId) {
        var inputElement = document.getElementById(inputId);
        var outputElement = document.getElementById(outputId);
        if (inputElement && outputElement) {
            inputElement.addEventListener("input", function () {
                outputElement.textContent = inputElement.textContent || '';
            });
        }
    };
    // call the updateContentEditable function for all relevant contenteditable elements
    updateContentEditable("editable-summary", "changed-summary");
    updateContentEditable("editableExperience", "changed-experience");
    updateContentEditable("editableEducation", "changed-education");
    // handle profile photo upload and preview
    var inputProfilePhoto = document.getElementById("inputProfilePhoto");
    var profileImage = document.getElementById("profileImage");
    if (inputProfilePhoto && profileImage) {
        inputProfilePhoto.addEventListener("change", function (event) {
            var _a;
            var target = event.target;
            var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (e) {
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
var createWorkExperienceEntry = function (jobTitle, companyName, startTime, endTime, description) {
    var entryHTML = "\n    <div class=\"work-experience-entry\">\n      \n      <p class=\"resume-text mt-3\">\n        <span id=\"workJobTitle\">".concat(jobTitle, "</span> at <span id=\"companyName\">").concat(companyName, "</span>\n      </p>\n      <p class=\"mt-1 resume-text\">\n        <span id=\"experience-startTime\">").concat(startTime, "</span> - <span id=\"experience-endTime\">").concat(endTime, "</span>\n      </p>\n      <p class=\"resume-text mt-3\" id=\"experience-description\">\n        ").concat(description, "\n      </p>\n    </div>\n  ");
    return entryHTML;
};
// event listener for "Add More Experience" button
(_a = document.getElementById('addMoreExpeirenceBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var experienceJob = document.getElementById('experienceJob').value;
    var companyTitle = document.getElementById('companyTitle').value;
    var workStartTime = document.querySelector('input[type="date"]').value;
    var workEndTime = document.querySelectorAll('input[type="date"]')[1].value;
    var workDescription = document.getElementById('workDescription').value;
    if (experienceJob && companyTitle && workStartTime && workEndTime && workDescription) {
        var workExperienceSection = document.getElementById('experience-section');
        if (workExperienceSection) {
            var newEntry = createWorkExperienceEntry(experienceJob, companyTitle, workStartTime, workEndTime, workDescription);
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
var createEducationEntry = function (institutionName, degreeTitle, startTime, endTime, description) {
    var entryHTML = "\n    <div class=\"education-entry\">\n      <p class=\"resume-text mt-3\">\n        <span id=\"degreeTitle\">".concat(degreeTitle, "</span> at <span id=\"institutionName\">").concat(institutionName, "</span>\n      </p>\n      <p class=\"mt-1 resume-text\">\n        <span id=\"education-startTime\">").concat(startTime, "</span> - <span id=\"education-endTime\">").concat(endTime, "</span>\n      </p>\n      <p class=\"resume-text mt-3\" id=\"education-description\">\n        ").concat(description, "\n      </p>\n    </div>\n  ");
    return entryHTML;
};
// event listener for "Add More Education" button
(_b = document.getElementById('addMoreEducationBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var institutionName = document.getElementById('institutionName').value;
    var degreeTitle = document.getElementById('degreeTitle').value;
    var educationStartTime = document.getElementById('educationStartTime').value;
    var educationEndTime = document.getElementById('educationEndTime').value;
    var educationDescription = document.getElementById('educationDescription').value;
    if (institutionName && degreeTitle && educationStartTime && educationEndTime && educationDescription) {
        var educationSection = document.getElementById('education-section');
        if (educationSection) {
            var newEntry = createEducationEntry(institutionName, degreeTitle, educationStartTime, educationEndTime, educationDescription);
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
var createSkillEntry = function (skillName, skillRating) {
    var entryHTML = "\n    <div class=\"mt-3 resume-skills\">\n      <p class=\"resume-text\">".concat(skillName, "</p>\n      <p class=\"resume-text\">").concat(skillRating, "/<span>100</span></p>\n    </div>\n  ");
    return entryHTML;
};
// event listener for "Add Skill" button
(_c = document.getElementById('addSkillBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var skillName = document.getElementById('addSkill').value;
    var skillRating = document.getElementById('rating').value;
    if (skillName && skillRating) {
        var skillSection = document.getElementById('skill-section');
        if (skillSection) {
            var newEntry = createSkillEntry(skillName, skillRating);
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
(_d = document.getElementById('generateLinkBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var username = document.getElementById('inputFirstName').value;
    if (username) {
        // Generate a unique key based on username
        var uniqueKey = btoa(username); // Base64 encoding for simplicity
        var resumeData = {
            // Collect resume data
            firstName: document.getElementById('inputFirstName').value,
            lastName: document.getElementById('inputLastName').value,
            email: document.getElementById('inputEmail').value,
            // Add other data as needed
        };
        // Save resume data in localStorage
        localStorage.setItem("resume-".concat(uniqueKey), JSON.stringify(resumeData));
        // Create a shareable link
        var link = "".concat(window.location.origin, "/?resume=").concat(uniqueKey);
        // Create a temporary input element to copy the link
        var tempInput = document.createElement('input');
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        // Show an alert with a message
        alert("The link has been copied to your clipboard:\n".concat(link));
    }
    else {
        alert('Please enter a username.');
    }
});
window.addEventListener('load', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var uniqueKey = urlParams.get('resume');
    if (uniqueKey) {
        var resumeData = localStorage.getItem("resume-".concat(uniqueKey));
        if (resumeData) {
            var data = JSON.parse(resumeData);
            // Populate resume fields with data
            document.getElementById('inputFirstName').value = data.firstName;
            document.getElementById('inputLastName').value = data.lastName;
            document.getElementById('inputEmail').value = data.email;
        }
        else {
            alert('Resume not found.');
        }
    }
});
(_e = document.getElementById('printBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var _a;
    var resumeContent = ((_a = document.querySelector('.resume-show')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Resume</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(resumeContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
});

const { jsPDF } = window.jspdf;


document.getElementById('downloadBtn').addEventListener('click', () => {
    // get the element to be converted to PDF
    const resumeShowElement = document.querySelector('.resume-show');

    
    html2canvas(resumeShowElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png'); 
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const imgWidth = 210; 
        const pageHeight = 295; 
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

       
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position -= pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        
        pdf.save('resume.pdf');
    });
});