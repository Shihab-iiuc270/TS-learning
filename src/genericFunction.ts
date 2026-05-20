

const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({
  id: 123,
  name: "Next Level",
});




//tuple

const createArrayWithTuple = (param1: string,param2: string) =>[param1,param2]

const createArrayTupleWithGeneric = <x,y>(param1:x,param2:y) =>[
    param1,param2
]

const res = createArrayTupleWithGeneric("mezba",false);
const res2 = createArrayTupleWithGeneric(222,{name:"dhah",age:22});


//
const addStudentToCourse = <T>(studentInfo: T) =>{
      return{
        course : "Next Level",
        ...studentInfo
      }
}

const student1 = {
    id: 123,
    name : "mezba",
    hasPen : true
}
const student2 = {
    id: 1,
    name : "bsa",
    hasPen : false,
    married: true
}

const res1 = addStudentToCourse(student1);
console.log(res1);