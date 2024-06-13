document.addEventListener('DOMContentLoaded', function() {
    populateFilters();
    filterCourses();
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
    // Logic to filter and display courses based on the selected filters
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const provider = document.getElementById('providerFilter').value;

    // Logic to filter courses and update the course list
    console.log(`Filtering courses by category: ${category}, level: ${level}, provider: ${provider}`);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
