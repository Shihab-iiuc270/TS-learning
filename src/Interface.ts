type User = {
    name : string,
    age : number
};

// interface : object type : array object function
//object type
interface IUser {
    name : string,
    age : number
}

type Role = {
    role : "admin" | "user"
}
type UserWithRole = User & Role;

interface IUserWithRole extends IUser{
    role : "admin" | "user"
} 

const user1 : IUserWithRole = {
    name : "jon",
    age : 30,
    role: "admin"
}

const user2: IUser = {
  name: "Mr. Y",
  age: 102,
};


// normal type
type IsAdmin = boolean;
const isAdmin : IsAdmin = true;


// function type

type Add = (num1: number,num2 : number) => number;

const add : Add =( num1,num2) => num1+num2;
 const rslt = add(2,3);
interface Iadd {
    (num1: number,num2: number) : number;
}

const add1: Iadd = (num1,num2) => num1+num2;
const rslt1 = add1(2,3);
// array type (one kind of object in js/ts)

type Friends = string[];

interface IFriends {
    [index: number] : string
}


const friends : IFriends = ["A","b",'c']