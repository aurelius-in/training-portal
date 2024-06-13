document.addEventListener('DOMContentLoaded', () => {
    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            displayCourses(data.courses);
            displayTutorials(data.tutorials);
            displayCertifications(data.certifications);
        })
        .catch(error => console.error('Error loading data:', error));
});

function displayCourses(courses) {
    const coursesList = document.getElementById('courses-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p>${course.details}</p>
            <a href="${course.link}" target="_blank">Learn More</a>
        `;
        coursesList.appendChild(courseElement);
    });
}

function displayTutorials(tutorials) {
    const tutorialsList = document.getElementById('tutorials-list');
    tutorials.forEach(tutorial => {
        const tutorialElement = document.createElement('div');
        tutorialElement.className = 'tutorial';
        tutorialElement.innerHTML = `
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
            <p>${tutorial.details}</p>
            <a href="${tutorial.link}" target="_blank">Learn More</a>
        `;
        tutorialsList.appendChild(tutorialElement);
    });
}

function displayCertifications(certifications) {
    const certificationList = document.getElementById('certification-list');
    certifications.forEach(certification => {
        const certificationElement = document.createElement('div');
        certificationElement.className = 'certification';
        certificationElement.innerHTML = `
            <h3>${certification.title}</h3>
            <p>${certification.description}</p>
            <p>${certification.details}</p>
            <a href="${certification.link}" target="_blank">Learn More</a>
        `;
        certificationList.appendChild(certificationElement);
    });
}
