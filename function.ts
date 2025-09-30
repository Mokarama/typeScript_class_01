function fruits():string{
    return "Apple"
}


function simple():boolean{
    return true;
}

function complex():number | string | boolean{
    let data=10;
    let name="shanta";
    let type="age";

    if(type=='age'){
        return data;
    }
    else{
        return name;
    }
}

function anything():any{
    return 
}