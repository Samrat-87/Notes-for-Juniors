
const course ={
    courseName : "js",
    coursePrice : "299",
    courseTeacher : "Samrat"
}

console.log(course.courseTeacher)

// destructuration of object

const {courseTeacher : Teacher} = course
console.log(Teacher)
