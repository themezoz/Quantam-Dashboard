export const generateCard = (course) => {
    return `
    ${course.isExpired ? expiredSpan : ''}
    <div class="card-img">
      <img
        src="${course.img}"
        alt="course image thumbnail"
      />
    </div>
    <div class="course-body">
      <div class="course-card-text-mp card-title">
        <h3 class="multine-ellipsis" title="${course.title}">
          ${course.title}
        </h3>
        <span class="fav-span ${!course.isFavourite ? 'not-fav' : ''}"
          ><img
            src="./quantum-screen-assets/icons/favourite.svg"
            alt=""
          />
        </span>
      </div>
      <p class="course-card-text-mp">
      ${course.subject} | Grade ${course.grade.base} <span class="green-span">+${course.grade.additional}</span>
      </p>
      ${!course.curriculum ? '' : `<p class="course-card-text-mp">
      <span><strong> ${course.curriculum.units} </strong> Units </span>
      <span><strong> ${course.curriculum.lessons} </strong> Lessons </span>
      <span><strong> ${course.curriculum.topics} </strong> Topics</span>
    </p>`}
      

      <select
        id="course-card-select"
        class="course-card-text-mp"
        name="classes"
        id="classes"
        placeholder="No Classes"
      >
        ${course.classes ? course.classes.map((ele) => {
        return `<option value="${ele}">${ele}</option>`;
    }) : '<option value="0" disabled selected hidden>No Classes</option>'}
      </select>

      <p class="course-card-text-mp">
        ${!course.students ? '' : `<span>${course.students} Students</span>`}
        ${!course.duration ? '' : `<span>${course.duration.startDate} - ${course.duration.endDate}</span>`}
        
      </p>
    </div> ${footerTemplate}`;
};
const expiredSpan = `<span class="expired">expired</span>`;
const footerTemplate = `<div class="course-card-footer">
<button class="card-footer-btn">
  <img
  src="./quantum-screen-assets/icons/preview.svg"
  alt=""
/>
</button>
<button class="card-footer-btn">
  <img class="btn-img-18-20" 
  src="./quantum-screen-assets/icons/manage course.svg"
  alt=""
/>
</button>
<button class="card-footer-btn">
  <img class="btn-img-18-20" 
  src="./quantum-screen-assets/icons/grade submissions.svg"
  alt=""
/>
</button>
<button class="card-footer-btn">
  <img src="./quantum-screen-assets/icons/reports.svg" alt="" />
</button>
</div>`;
