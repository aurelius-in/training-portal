document.addEventListener('DOMContentLoaded', () => {
    fetch('courses.json')
        .then(response => response.json())
        .then(courses => {
            const courseList = document.getElementById('courseList');
            const searchBar = document.getElementById('searchBar');
            const categoryFilter = document.getElementById('categoryFilter');
            const levelFilter = document.getElementById('levelFilter');
            const providerFilter = document.getElementById('providerFilter');

            const categories = [...new Set(courses.map(course => course.category))];
            const levels = [...new Set(courses.map(course => course.level))];
            const providers = [...new Set(courses.map(course => course.provider))];

            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });

            levels.forEach(level => {
                const option = document.createElement('option');
                option.value = level;
                option.textContent = level;
                levelFilter.appendChild(option);
            });

            providers.forEach(provider => {
                const option = document.createElement('option');
                option.value = provider;
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

                const filteredCourses = courses.filter(course => {
                    const matchesSearch = course.title.toLowerCase().includes(searchQuery);
                    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
                    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
                    const matchesProvider = selectedProvider === 'all' || course.provider === selectedProvider;
                    return matchesSearch && matchesCategory && matchesLevel && matchesProvider;
                });

                displayCourses(filteredCourses);
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

            // Initial display of all courses
            displayCourses(courses);
            showSection('courses');
        })
        .catch(error => console.error('Error loading courses:', error));
});
