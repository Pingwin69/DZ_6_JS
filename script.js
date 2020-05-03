let clear = document.querySelector('.c');
let clearAll = document.querySelector('.ce');
let delet = document.querySelector('.del');
let sinus = document.querySelector('.si');
let cosinus = document.querySelector('.cos');
let tangens = document.querySelector('.tg');
let coTangens = document.querySelector('.ctg');
let koren = document.querySelector('.koren');
let number = document.querySelector('.numb');
let drob = document.querySelector('.zeroDrob');
let kvadrat = document.querySelector('.kvadrat');
let ravno = document.querySelector('.ravno');
let minusPlus = document.querySelector('.minusPlus');
let display = document.querySelector('#display');
let funct = document.querySelectorAll('.funct');
let table = document.querySelector('.table');

let all = ['', '',];

let summ = (a,b) => a + b;
let mSumm = (a,b) => a - b;
let ymn = (a,b) => a * b;
let delen = (a,b) => a / b;
let proc = (a,b) => a % b;
let kvadr = (a) => a * a;
let drobi = (a) => 1 / a;


console.log(funct);

function input(x){
    display.value += x;
};

clear.addEventListener('click', function(){
    display.value = '';
})

for(let i = 0; i < funct.length; i++){
    funct[i].addEventListener('click', function(){
        all.push(display.value);
        all.push(funct[i].value);
        all.shift();
        display.value = '';
    });
}

i = 0;
var minplplus = display.value;
minusPlus.addEventListener('click', function(){
    i = i + 1;    
    let minpl = '-';
    if( i === 1 ){  
    display.value = minpl + display.value;
    } else {
        let mp = Math.abs(display.value);
        display.value = mp;
        i = 0; 
    }
})
// var str = "abcdef";
// 2
// alert(str.substring(0, str.length - 1));

delet.addEventListener('click', function(){
    display.value = display.value.slice(0,-1);
})

function clearAllM(){
    all = ['','',];
} 

function result(){
    let Li = document.createElement('li');
    Li.innerHTML = display.value;
    table.append(Li);
}
clearAll.addEventListener('click', function(){
    table.innerHTML = '';
    clearAllM();
    display.value = '';
})


ravno.addEventListener('click', function(){
    all.shift();
    all.push(display.value);

    if(all[1] === '+'){
        let summa = summ(parseFloat(all[0]), parseFloat(all[2]));
        display.value = parseFloat(summa.toFixed(9));        
    } else if(all[1] === '-'){
        let mSumma = mSumm(parseFloat(all[0]), parseFloat(all[2]));
        display.value = parseFloat(mSumma);
    } else if(all[1] === '*'){
        let ym = ymn(parseFloat(all[0]), parseFloat(all[2]));
        display.value = parseFloat(ym);
    } else if(all[1] === '%'){
        let pro = proc(parseFloat(all[0]), parseFloat(all[2]));
        display.value = pro;
    } else if(all[1] === '/'){
        if(all[2] != 0){
            let dele = delen(parseFloat(all[0]), parseFloat(all[2]));
            display.value = parseFloat(dele.toFixed(9));
        } else {
            display.value = 'Учи мат часть';
        }
    } 
    clearAllM();
    result();
})

sinus.addEventListener('click', function(){
    let sin = Math.sin(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(sin.toFixed(9));
    result();
});
cosinus.addEventListener('click', function(){
    let cos = Math.cos(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(cos.toFixed(9));
    result();
});
tangens.addEventListener('click', function(){
    let tg = Math.tan(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(tg.toFixed(9));
    result();
});
coTangens.addEventListener('click', function(){
    let ctg = 1 / (Math.tan(parseFloat((display.value * Math.PI) / 180)));
    display.value = parseFloat(ctg.toFixed(9));
    result();
});
koren.addEventListener('click', function(){
    let kor = Math.sqrt(display.value);
    display.value = parseFloat(kor);
    result();
});
drob.addEventListener('click', function(){
    let zerDr = drobi(display.value);
    display.value = parseFloat(zerDr);
    result();
});
kvadrat.addEventListener('click', function(){
    let kvad = kvadr(display.value);
    display.value = parseFloat(kvad);
    result();
});

