const student = {
    name='mahfuz',
    profession: 'student',
    age: 17,
    25: 'winter',
    'friend-name': 'hasan'
}

// dot notation
const student1 = student.profession;

// bracket notation
const student2 = student['profession'];

// const season = student.25; // not access
const season = student[25];
// const friend = student.friend-name; // not access
const friend = student['friend-name'];