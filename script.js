document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    loadInitialCourses(); // Load initial courses on page load
});

function populateFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const providerFilter = document.getElementById('providerFilter');

    // Example data for dropdowns
    const categories = ['Introduction', 'Business', 'Technical'];
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    const providers = ['DeepLearning.AI', 'IBM', 'Google Cloud', 'University of Oxford'];

    // Populate Category Filter
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.text = category;
        categoryFilter.appendChild(option);
    });

    // Populate Level Filter
    levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.text = level;
        levelFilter.appendChild(option);
    });

    // Populate Provider Filter
    providers.forEach(provider => {
        const option = document.createElement('option');
        option.value = provider.toLowerCase().replace(/\s+/g, '');
        option.text = provider;
        providerFilter.appendChild(option);
    });

    // Set the first option as selected by default
    categoryFilter.selectedIndex = 0;
    levelFilter.selectedIndex = 0;
    providerFilter.selectedIndex = 0;
}

function loadInitialCourses() {
    const courseList = document.getElementById('courseList');

    // Clear existing courses
    courseList.innerHTML = '';

    // Fetch initial JSON data (example JSON file: introduction-beginner-deeplearningai.json)
    fetch('introduction-beginner-deeplearningai.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.className = 'course-item';
                courseItem.innerHTML = `
                    <h2>${course.title}</h2>
                    <p><strong>Provider:</strong> ${course.provider}</p>
                    <p><strong>Description:</strong> ${course.description}</p>
                    <p><strong>Category:</strong> ${course.category}</p>
                    <p><strong>Level:</strong> ${course.level}</p>
                `;
                courseList.appendChild(courseItem);
            });
        })
        .catch(error => console.error('Error fetching initial courses:', error));
}

function filterCourses() {
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const provider = document.getElementById('providerFilter').value.replace(/\s+/g, '');
    const courseList = document.getElementById('courseList');

    // Clear existing courses
    courseList.innerHTML = '';

    // Fetch courses based on filters
    const jsonFileName = `${category}-${level}-${provider}.json`;

    fetch(jsonFileName)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(course => {
                    const courseItem = document.createElement('div');
                    courseItem.className = 'course-item';
                    courseItem.innerHTML = `
                        <h2>${course.title}</h2>
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
        .catch(error => console.error('Error fetching filtered courses:', error));
}
