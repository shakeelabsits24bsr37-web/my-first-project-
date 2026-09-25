// Student Management System

let students = [];

function addStudent(name, rollNumber, department, semester) {
    let student = {
        name: name,
        rollNumber: rollNumber,
        department: department,
        semester: semester
    };

    students.push(student);
    console.log("Student added successfully!");
}

function displayStudents() {
    console.log("\n--- Student List ---");

    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    students.forEach((student, index) => {
        console.log(`\nStudent ${index + 1}`);
        console.log("Name:", student.name);
        console.log("Roll Number:", student.rollNumber);
        console.log("Department:", student.department);
        console.log("Semester:", student.semester);
    });
}

function deleteStudent(rollNumber) {
    let oldLength = students.length;

    students = students.filter(
        student => student.rollNumber !== rollNumber
    );

    if (students.length < oldLength) {
        console.log("Student deleted successfully!");
    } else {
        console.log("Student not found.");
    }
}

// Sample students
addStudent("Ali", "101", "BSIT", "6th");
addStudent("Sara", "102", "BSIT", "6th");
addStudent("Ahmed", "103", "BSCS", "4th");

// Display students
displayStudents();

// Delete student
deleteStudent("102");

// Display updated list
displayStudents();
