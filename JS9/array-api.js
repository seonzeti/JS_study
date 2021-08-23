// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    
    fruits.forEach(fruits => {
        console.log(fruits);
    });
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    
    

      }


  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    array.splice(0);
    array.push('5','4','3','2','1');
    console.log(array);

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];    
    array.splice(0,2);
    console.log(array);

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    students.forEach(students => {
        if(students.score == 90) console.log(students.name);
    });


  }
  
  // Q6. make an array of enrolled students
  {
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    

  }
  
  // Q8. check if there is a student with the score lower than 50
  {

    students.forEach(students => {
        if(students.score < 50) console.log(students.name);
    });

  }
  
  // Q9. compute students' average score
  {
    let sum = 0;
    let avg = 0;
    students.forEach(students => {
        sum += students.score ;
    });

    avg = sum/students.length;
    console.log(avg);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    students.forEach(students => console.log(students.score));

  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    

  }