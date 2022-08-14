




function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(180);

function countSheeps(arrayOfSheep) {
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }


  function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }

  function removeChar(str){
    let str2 = str.slice(0, -1);
    console.log(str2);
   
  }
console.logremoveChar();


function areYouPlayingBanjo(name) {

    
    if (name.slice(1) == 'R' || name.slice(1) == 'r') {
      return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
  }
  console.log(areYouPlayingBanjo(Adam));

  function fakeBin(x){
    let res = '';
    for(let i = 0; i < x.length; i++){
      if(x[i] < 5){
        res += 0;
      } else {
        res += 1;
      }
    }
    return res
  }


  const options = {
    name: 'Dimon',
    width: 1000,
    hight: 1000,
    colors: {
        border: 'black',
        bg: 'red'
    }
  };

  console.log(Object.keys(options).length);