var studentData:string | number | []='Shanta';

studentData=9999;

studentData=[];

function fruitsData():string{
    var item=1;
    if(item>1){
        return  'banana';
    }

    else{
        return 'apple';
    }
}

console.log(fruitsData())


function studentInfo(name:string| number | boolean){
    return name;
}

studentInfo(999);