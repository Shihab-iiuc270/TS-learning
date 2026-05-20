interface Developer  <T,X= null>{
    name : string;
    salary : number;
    device :{
        brand: string,
        model: string,
        releaseYear : string
    };
    smartWatch :T;
    bike?: X;
}

interface BranchCharaWatch {
    heartRAte : string;
    stopwatch : boolean
}

interface AppleWatch {
    hearRate : string;
    callSupport : boolean;
    calculator : boolean;
    AiFeatures : boolean
}


const PoorDeveloper : Developer<BranchCharaWatch,{brand:"tvs"; engineCapacity: "200cc"}> ={
   name : "mr poor",
   salary : 20,
   device :{
    brand : "lenovo",
    model: "slimpad",
    releaseYear : "2020",
   },
   smartWatch : {
    heartRAte: "200",
    stopwatch: true,
   }
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "X34",
    releaseYear: "2050",
  },
  smartWatch: {
    hearRate: "200",
    callSupport: true,
    calculator: true,
    AiFeatures: true,
  },
  bike: null,
};

const add = (num1: number, num2: number = 0) => num1 + num2;

add(2);