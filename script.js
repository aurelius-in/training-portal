document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    loadInitialCourses(); // Load initial courses on page load
});

function populateFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const providerFilter = document.getElementById('providerFilter');

    const categories = ['Introduction', 'Business', 'Technical'];
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    const providers = ['DeepLearning.AI', 'IBM', 'Google Cloud', 'University of Oxford'];

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.text = category;
        categoryFilter.appendChild(option);
    });

    levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.text = level;
        levelFilter.appendChild(option);
    });

    providers.forEach(provider => {
        const option = document.createElement('option');
        option.value = provider.toLowerCase().replace(/\s+/g, '');
        option.text = provider;
        providerFilter.appendChild(option);
    });

    categoryFilter.selectedIndex = 0;
    levelFilter.selectedIndex = 0;
    providerFilter.selectedIndex = 1; // Default to IBM
}

function loadInitialCourses() {
    fetchCourses('introduction', 'beginner', 'ibm');
}

function fetchCourses(category, level, provider) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    // Construct the JSON filename
    const jsonFileName = `${category}-${level}-${provider}.json`;

    fetch(jsonFileName)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(course => {
                    const courseItem = document.createElement('div');
                    courseItem.className = 'course-item';
                    courseItem.innerHTML = `
                        <h2><a href="${course.link}" target="_blank">${course.title}</a></h2>
                        <p><strong>Provider:</strong> ${course.provider}</p>
                        <p><strong>Description:</strong> ${course.description}</p>
                        <p><strong>Category:</strong> ${course.category}</p>
                        <p><strong>Level:</strong> ${course.level}</p>
                    `;
                    courseList.appendChild(courseItem);
                });
            } else {
                courseList.innerHTML = '<p>No courses found for the selected filters.</p>';
            }
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function filterCourses() {
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const provider = document.getElementById('providerFilter').value.replace(/\s+/g, '');

    fetchCourses(category, level, provider);
}
