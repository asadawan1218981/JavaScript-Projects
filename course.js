
const students = [
    { name: "Asad Awan", course: "Web Development", enrollmentDate: "01-12-2024" },
    { name: "siddiq shah", course: "graphic designing", enrollmentDate: "05-11-2024" },
    { name: "umer khan", course: "data science", enrollmentDate: "01-01-2025" }
];

const capitalizeWords = (word) => {
    const breakWord = word.split(" ");
    const ElementsData = breakWord.map((currElement) => {
        return currElement.charAt(0).toUpperCase() + currElement.slice(1);
    });
    return ElementsData.join(" ");
};

const studentEnrollment = (students, startDateOfCourse) => {
    const startDate = new Date(startDateOfCourse);

    const result = students.map((studentData) => {
        let fees = 0;

        switch (studentData.course.toLowerCase()) {
            case 'web development':
                fees = 200;
                break;
            case 'data science':
                fees = 250;
                break;
            case 'graphic designing':
                fees = 150;
                break;
            default:
                fees = 100; // default fee if course doesn't match
        }

        const formatedName = capitalizeWords(studentData.name);
        const formatedCourse = capitalizeWords(studentData.course);

        let enrollDate = new Date(studentData.enrollmentDate);
        let diffDays = Math.floor((startDate - enrollDate) / (1000 * 60 * 60 * 24));
        let duration = `${diffDays} days`;

        if (diffDays > 30) {
            const discount = fees * 0.10;
            fees = fees - discount;
        }

        return {
            studentName: formatedName,
            course: formatedCourse,
            enrollmentFees: `$${fees.toFixed(2)}`,
            durationOfCourse: `${duration} ago`,
        };
    });

    return result;
};

const result = studentEnrollment(students, "01-01-2025");
console.log(result);
