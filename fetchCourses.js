function fetchCourses(category, level, provider) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    let jsonFileName = '';

    // Introduction
    if (category === 'introduction' && level === 'beginner' && provider === 'deeplearningai') {
        jsonFileName = 'introduction-beginner-deeplearningai.json';
    } else if (category === 'introduction' && level === 'beginner' && provider === 'googlecloud') {
        jsonFileName = 'introduction-beginner-googlecloud.json';
    } else if (category === 'introduction' && level === 'beginner' && provider === 'ibm') {
        jsonFileName = 'introduction-beginner-ibm.json';
    } else if (category === 'introduction' && level === 'beginner' && provider === 'universityofoxford') {
        jsonFileName = 'introduction-beginner-universityofoxford.json';
    } else if (category === 'introduction' && level === 'intermediate' && provider === 'deeplearningai') {
        jsonFileName = 'introduction-intermediate-deeplearningai.json';
    } else if (category === 'introduction' && level === 'intermediate' && provider === 'googlecloud') {
        jsonFileName = 'introduction-intermediate-googlecloud.json';
    } else if (category === 'introduction' && level === 'intermediate' && provider === 'ibm') {
        jsonFileName = 'introduction-intermediate-ibm.json';
    } else if (category === 'introduction' && level === 'intermediate' && provider === 'universityofoxford') {
        jsonFileName = 'introduction-intermediate-universityofoxford.json';
    } else if (category === 'introduction' && level === 'advanced' && provider === 'deeplearningai') {
        jsonFileName = 'introduction-advanced-deeplearningai.json';
    } else if (category === 'introduction' && level === 'advanced' && provider === 'googlecloud') {
        jsonFileName = 'introduction-advanced-googlecloud.json';
    } else if (category === 'introduction' && level === 'advanced' && provider === 'ibm') {
        jsonFileName = 'introduction-advanced-ibm.json';
    } else if (category === 'introduction' && level === 'advanced' && provider === 'universityofoxford') {
        jsonFileName = 'introduction-advanced-universityofoxford.json';
    }
    // Business
    else if (category === 'business' && level === 'beginner' && provider === 'deeplearningai') {
        jsonFileName = 'business-beginner-deeplearningai.json';
    } else if (category === 'business' && level === 'beginner' && provider === 'googlecloud') {
        jsonFileName = 'business-beginner-googlecloud.json';
    } else if (category === 'business' && level === 'beginner' && provider === 'ibm') {
        jsonFileName = 'business-beginner-ibm.json';
    } else if (category === 'business' && level === 'beginner' && provider === 'universityofoxford') {
        jsonFileName = 'business-beginner-universityofoxford.json';
    } else if (category === 'business' && level === 'intermediate' && provider === 'deeplearningai') {
        jsonFileName = 'business-intermediate-deeplearningai.json';
    } else if (category === 'business' && level === 'intermediate' && provider === 'googlecloud') {
        jsonFileName = 'business-intermediate-googlecloud.json';
    } else if (category === 'business' && level === 'intermediate' && provider === 'ibm') {
        jsonFileName = 'business-intermediate-ibm.json';
    } else if (category === 'business' && level === 'intermediate' && provider === 'universityofoxford') {
        jsonFileName = 'business-intermediate-universityofoxford.json';
    } else if (category === 'business' && level === 'advanced' && provider === 'deeplearningai') {
        jsonFileName = 'business-advanced-deeplearningai.json';
    } else if (category === 'business' && level === 'advanced' && provider === 'googlecloud') {
        jsonFileName = 'business-advanced-googlecloud.json';
    } else if (category === 'business' && level === 'advanced' && provider === 'ibm') {
        jsonFileName = 'business-advanced-ibm.json';
    } else if (category === 'business' && level === 'advanced' && provider === 'universityofoxford') {
        jsonFileName = 'business-advanced-universityofoxford.json';
    }
    // Technical
    else if (category === 'technical' && level === 'beginner' && provider === 'deeplearningai') {
        jsonFileName = 'technical-beginner-deeplearningai.json';
    } else if (category === 'technical' && level === 'beginner' && provider === 'googlecloud') {
        jsonFileName = 'technical-beginner-googlecloud.json';
    } else if (category === 'technical' && level === 'beginner' && provider === 'ibm') {
        jsonFileName = 'technical-beginner-ibm.json';
    } else if (category === 'technical' && level === 'beginner' && provider === 'universityofoxford') {
        jsonFileName = 'technical-beginner-universityofoxford.json';
    } else if (category === 'technical' && level === 'intermediate' && provider === 'deeplearningai') {
        jsonFileName = 'technical-intermediate-deeplearningai.json';
    } else if (category === 'technical' && level === 'intermediate' && provider === 'googlecloud') {
        jsonFileName = 'technical-intermediate-googlecloud.json';
    } else if (category === 'technical' && level === 'intermediate' && provider === 'ibm') {
        jsonFileName = 'technical-intermediate-ibm.json';
    } else if (category === 'technical' && level === 'intermediate' && provider === 'universityofoxford') {
        jsonFileName = 'technical-intermediate-universityofoxford.json';
    } else if (category === 'technical' && level === 'advanced' && provider === 'deeplearningai') {
        jsonFileName = 'technical-advanced-deeplearningai.json';
    } else if (category === 'technical' && level === 'advanced' && provider === 'googlecloud') {
        jsonFileName = 'technical-advanced-googlecloud.json';
    } else if (category === 'technical' && level === 'advanced' && provider === 'ibm') {
        jsonFileName = 'technical-advanced-ibm.json';
    } else if (category === 'technical' && level === 'advanced' && provider === 'universityofoxford') {
        jsonFileName = 'technical-advanced-universityofoxford.json';
    }

    if (jsonFileName) {
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
            .catch(error => console.error('Error fetching courses:', error));
    }
}
