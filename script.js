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
    providerFilter.selectedIndex = 0;
}

function loadInitialCourses() {
    fetchCourses('introduction', 'beginner', 'deeplearningai');
}

function filterCourses() {
    const category = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const provider = document.getElementById('providerFilter').value.replace(/\s+/g, '');

    fetchCourses(category, level, provider);
}
