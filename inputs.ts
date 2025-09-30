function getInfo(){
    // console.log('get info function called')
    const nameInput=document.getElementById('username') as HTMLInputElement;
    console.log(nameInput.value);
    const emailInput =document.getElementById('email') as HTMLInputElement;
    console.log(emailInput.value);

    const ageInput =document.getElementById('age') as HTMLInputElement;
    console.log(ageInput.value);
}
getInfo();