let anything : any;

anything = 1;
// anything.   will not give any suggestion as it is of type any

const KgtoGmConverter = (input: string| number): string | number | undefined =>{
    if(typeof input == "number"){
        return input*1000;
    }
    else if(typeof input == "string"){
        const [value] = input.split(" ");
        return `converted o/p is ${Number(value)*1000}`;
    }
};

const result1 = KgtoGmConverter(2) as number;
console.log(result1);


const result2 = KgtoGmConverter("2 kg") as string;
console.log(result2);



type CustomError = {
    message: string
}
try{

}catch(err)
{
    console.log((err as CustomError).message);
}