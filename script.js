document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    filterCourses(); // Call filterCourses() to display default content
});

function populateFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const providerFilter = document.getElementById('providerFilter');

    // Example data for dropdowns
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
        option.value = provider.toLowerCase();
        option.text = provider;
        providerFilter.appendChild(option);
    });

    // Set the first option as selected by default
    categoryFilter.selectedIndex = 0;
    levelFilter.selectedIndex = 0;
    providerFilter.selectedIndex = 0;
}

function filterCourses() {
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const provider = document.getElementById('providerFilter').value;
    const courseList = document.getElementById('courseList');

    // Clear existing courses
    courseList.innerHTML = '';

    // Example course data - replace this with actual course data or fetch from your JSON files
    const courses = [
        { title: "Course 1", category: "introduction", level: "beginner", provider: "deeplearning.ai", description: "Description 1" },
        { title: "Course 2", category: "business", level: "beginner", provider: "ibm", description: "Description 2" },
        { title: "Course 3", category: "technical", level: "beginner", provider: "google cloud", description: "Description 3" },
        { title: "Course 4", category: "introduction", level: "intermediate", provider: "university of oxford", description: "Description 4" }
        // Add more courses as needed
    ];

    const filteredCourses = courses.filter(course =>
        course.category === category && course.level === level && course.provider === provider
    );

    if (filteredCourses.length > 0) {
        filteredCourses.forEach(course => {
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
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
