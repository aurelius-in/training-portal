document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            title: "AI for Everyone",
            provider: "DeepLearning.AI",
            platform: "Coursera",
            link: "https://www.coursera.org/learn/ai-for-everyone",
            description: "This course, led by Andrew Ng, is designed for non-technical professionals and covers the impact of AI on business and society. It is free and takes about 10 hours to complete.",
            category: "Introduction",
            level: "Beginner"
        },
        {
            title: "Google Cloud Introduction to Generative AI",
            provider: "Google Cloud",
            platform: "Google Cloud Skills Boost",
            link: "https://www.cloudskillsboost.google/paths/23",
            description: "This free course introduces generative AI and large language models, focusing on Google’s tools and ethical practices. It takes approximately 8.5 hours to complete.",
            category: "Generative AI",
            level: "Intermediate"
        },
        // Add more courses here...
    ];

    const courseList = document.getElementById('courseList');
    const searchBar = document.getElementById('searchBar');
    const categoryFilter = document.getElementById('categoryFilter');
    const levelFilter = document.getElementById('levelFilter');

    searchBar.addEventListener('input', filterCourses);

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

        const filteredCourses = courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery);
            const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
            const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
            return matchesSearch && matchesCategory && matchesLevel;
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
});
