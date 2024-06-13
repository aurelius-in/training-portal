document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('courseList');
    const searchBar = document.getElementById('searchBar');
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');
    const providerFilter = document.getElementById('providerFilter');

    const categories = ['Introduction', 'Technical', 'Business']; // Add all categories
    const levels = ['Beginner', 'Intermediate', 'Advanced']; // Add all levels
    const providers = ['DeepLearning.AI', 'IBM', 'Google Cloud', 'University of Oxford']; // Add all providers

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.toLowerCase();
        option.textContent = level;
        levelFilter.appendChild(option);
    });

    providers.forEach(provider => {
        const option = document.createElement('option');
        option.value = provider.toLowerCase().replace(/\./g, '');
        option.textContent = provider;
        providerFilter.appendChild(option);
    });

    searchBar.addEventListener('input', filterCourses);
    categoryFilter.addEventListener('change', filterCourses);
    levelFilter.addEventListener('change', filterCourses);
    providerFilter.addEventListener('change', filterCourses);

    function showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    function filterCourses() {
        const searchQuery = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedLevel = levelFilter.value;
        const selectedProvider = providerFilter.value;

        if (selectedCategory !== 'all' && selectedLevel !== 'all' && selectedProvider !== 'all') {
            const jsonFileName = `${selectedCategory}-${selectedLevel}-${selectedProvider}.json`;
            fetch(jsonFileName)
                .then(response => response.json())
                .then(courses => {
                    const filteredCourses = courses.filter(course => {
                        const matchesSearch = course.title.toLowerCase().includes(searchQuery);
                        return matchesSearch;
                    });

                    displayCourses(filteredCourses);
                })
                .catch(error => console.error('Error loading courses:', error));
        }
    }

    function displayCourses(courses) {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.innerHTML = `
                <h2>${course.title}</h2>
                <p><strong>Provider:</strong> ${course.provider}</p>
                <p><strong>Platform:</strong> ${course.platform}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Category:</strong> ${course.category}</p>
                <p><strong>Level:</strong> ${course.level}</p>
                <a href="${course.link}" target="_blank">Enroll Now</a>
            `;
            courseList.appendChild(courseItem);
        });
    }

    showSection('courses');
});
