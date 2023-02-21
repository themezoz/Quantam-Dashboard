import { generateCard } from "./utils.js";
const courseContainer = document.querySelector('.course-container');
const courseCount = document.querySelector('#course-count');
const showCourseCount = document.querySelector('#showing-course-count');
fetch('/scripts/courses.json')
    .then((response) => response.json())
    .then((data) => {
    let totalCourse = data.length.toString();
    courseCount.innerHTML = totalCourse;
    showCourseCount.innerHTML = ` showing ${totalCourse} of ${totalCourse} `;
    data.map((course) => {
        const card = document.createElement("div");
        card.classList.add('course-card');
        card.innerHTML = generateCard(course);
        courseContainer.appendChild(card);
    });
});
