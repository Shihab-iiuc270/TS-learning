type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["A","B","C"];
const rollNumbers : GenericArray<number> = [1,2,3];

const isEligablelist: GenericArray<boolean> =[true,false]

type User = { name: string, age: number}
const userList : GenericArray<User> = [
    {
        name: "sja",
        age : 22
    },
{
    name: "shifa",
    age : 25
}
]

const sqFunc = (value: number) =>{
    return value * value;
}

sqFunc(5);

type Coordinates<X,Y> = [X,Y];

const coordinates1 : Coordinates<number,number> = [20,30];
const coordinates2 : Coordinates<string,string> = ["20","30"];