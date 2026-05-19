

// nullable  type
const getUser = (name: string| null)=>{
    if(name){
        console.log(`DB for : ${name}`);
    }
    else{
        console.log("DB for all users")
    }
}

getUser(null)

// unknown

const discountCount =(count: unknown)=>{
    if(typeof count == "number"){
        console.log(count*0.1);
    }
    else if(typeof count == "string"){
        const [number] = count.split(" ");
        console.log(Number(number)*0.1);
    }
    else{
        console.log("invalid input")
    }
}

discountCount(100);
discountCount("100 tk")
discountCount(null)

// never
const  throwError = (message: string): never =>{
    throw new Error(message);
}

throwError("Error....")