
type DataType={name:string, email:string};

interface a{name:string};
interface b{email:string};
interface c=a | b;

var empData1:DataType={
    name:'Shanta',
    email:'shanta@gmail.com'
}

var studentDataType={
    name:'sabbir',
    email:'sabbir@gmail.com'
}