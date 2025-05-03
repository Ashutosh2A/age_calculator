const inputData = document.getElementById('birthday')

const calculateEl = document.getElementById('button')

const resultEl = document.getElementById('result')


function calculateBirth(){
    const birthdayValue = inputData.value;
    if(birthdayValue === ""){
        alert("Place enter your date of birth...")
    }else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old`
    }

}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate()< birthdayDate.getDate())){
        age--;
    }
    return age;
}

calculateEl.addEventListener('click',calculateBirth);