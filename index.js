const second = 1000;
const minut = second * 60;
const hour = minut * 60;
const day = hour * 24;

window.onload = function(){
    const todayDate = getTodayDate()
    document.mainForm.dataInc.value = todayDate;
    document.mainForm.dataEnd.value = todayDate;
}

function getTodayDate(){
    const today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() +1;
    const todayYear = today.getFullYear();
    
    if(todayMonth < 10){
        todayMonth = '0' + todayMonth
    }

    if(todayDay < 10){
        todayDay = '0' + todayDay
    }
    
    return todayYear  + '-' + todayMonth + '-' + todayDay;
}

function countDays(){
    let dateInc = new Date(document.mainForm.dataInc.value);
    let dateEnd = new Date(document.mainForm.dataEnd.value);

    let daysDif = dateEnd.getTime() - dateInc.getTime();
    let countDaysResult = '';
    const dateCope = new Date(18/12/2022)

    if(daysDif === 0){
        countDaysResult = "a copa é hoje!";
    }else if(daysDif < 0){
        countDaysResult = "a copa já passou!";
    }else if(daysDif > dateCope){
        countDaysResult = "A copa Já terminou e o HEXA VEEIOO!!!"
    }else{
        const daysLeft = Math.floor(daysDif / day);
        let daysString = daysLeft > 1 ? ' Dias' : ' Dia';
        countDaysResult = daysLeft + daysString + " para a copa";
    }

    document.getElementById('days').innerText = countDaysResult;
}

