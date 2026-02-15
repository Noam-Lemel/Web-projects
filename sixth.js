   //first option
   const isAgeUnder35=function(students){
        let admittedStudents=[];
        for(let student of students)
        {
            if(student===undefined) continue;
            if(student.age>35) continue;
            admittedStudents.push(student);
        }
        return admittedStudents;
    }
    console.log(isAgeUnder35([{name:'noam',id:'43243243' ,age:28},{name:'gila',id:'443243' ,age:40},{name:'dror',id:'43243243333', age:35}]));

    //second option
    const isAgeUnder35_2=function(students){
        let admittedStudents=[];
        students.forEach((student) => {
            if(student.age<=35)
                admittedStudents.push(student);
        });
        return admittedStudents;
    }
    console.log(isAgeUnder35_2([{name:'noam',id:'43243243' ,age:28},{name:'gila',id:'443243' ,age:40},{name:'dror',id:'43243243333', age:35}]));