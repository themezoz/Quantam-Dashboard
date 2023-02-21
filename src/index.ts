import { Course } from './interfaces.js';
import { generateCard } from "./utils.js";
const courseContainer :HTMLElement = document.querySelector('.course-container')!;
const courseCount: HTMLElement = document.querySelector('#course-count')!;
const showCourseCount: HTMLElement = document.querySelector('#showing-course-count')!;


fetch('/scripts/courses.json')
    .then((response: Response) => response.json())
    .then((data: Course[]): void => {
        //update course-count in nav-toggle
        let totalCourse = data.length.toString();
        courseCount.innerHTML = totalCourse;
        showCourseCount.innerHTML = ` showing ${totalCourse} of ${totalCourse} `;
        
        data.map((course: Course) => {
            const card: HTMLElement = document.createElement("div");
            card.classList.add('course-card');
            card.innerHTML = generateCard(course);
            courseContainer.appendChild(card);
        });
    });
