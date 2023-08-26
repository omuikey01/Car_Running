let topObj1, rightobj2, leftobj3, botmobj4, botmobj5, botmobj6, botmobj7, botmobj8, botmobj9, botmobj10, botmobj11, botmobj12, botmobj13, botmobj14;
let top1, right2, left3, botm4, botm5, botm6, botm7, botm8, botm9, botm10, botm11, botm12, botm13, botm14;
topObj1 = document.getElementById("top_car");
rightobj2 = document.getElementById("right_car");
leftobj3 = document.getElementById("left_car");
botmobj4 = document.getElementById("btm_part1_car");
botmobj5 = document.getElementById("btm_part1_tyre_car");
botmobj6 = document.getElementById("btm_part2_car");
botmobj7 = document.getElementById("btm_part2_tyre_car");
botmobj8 = document.getElementById("btm_part3_car");
botmobj9 = document.getElementById("btm_tyre1");
botmobj10 = document.getElementById("btm_tyre1_part1");
botmobj11 = document.getElementById("btm_tyre1_part2");
botmobj12 = document.getElementById("btm_tyre2");
botmobj13 = document.getElementById("btm_tyre2_part1");
botmobj14 = document.getElementById("btm_tyre2_part2");

top1 = 92
right2 = 450;
left3 = 50
botm4 = 372;
botm5 = 291;
botm6 = 210;
botm7 = 131
botm8 = 10
botm9 = 305
botm10 = 18
botm11 = 7
botm12 = 145
botm13 = 18
botm14 = 7
let rrtate = 0

let StopMyInt;
document.getElementById("btn1").addEventListener("click", callSetInt);
document.getElementById("btn2").addEventListener("click", callSetIntStop);


let color1 = 100, color = 100;

function callSetInt() {
    StopMyInt = setInterval(myFun, 10)
}

function myFun() {
    rrtate+=10;
    top1++
    right2++
    left3++
    botm4++
    botm5++
    botm6++
    botm7++
    botm8++
    botm9++
    botm10 += 0.005
    botm11 += 0.005
    botm12++
    botm13 += 0.005
    botm14 += 0.005
    topObj1.style.left = top1 + "px";
    rightobj2.style.left = right2 + "px";
    leftobj3.style.left = left3 + "px";
    botmobj4.style.left = botm4 + "px";
    botmobj5.style.left = botm5 + "px";
    botmobj6.style.left = botm6 + "px";
    botmobj7.style.left = botm7 + "px";
    botmobj8.style.left = botm8 + "px";
    botmobj9.style.left = botm9 + "px";
    botmobj10.style.left = botm10 + "px";
    botmobj10.style.rotate=rrtate+"deg";
    botmobj11.style.left = botm11 + "px";
    botmobj11.style.rotate=rrtate+"deg";
    botmobj12.style.left = botm12 + "px";
    botmobj13.style.left = botm13 + "px";
    botmobj14.style.left = botm14 + "px";
    botmobj13.style.rotate=rrtate+"deg";
    botmobj14.style.rotate=rrtate+"deg";


   
    callMeForColorChange()



    if(right2 == 1200){
        clearInterval(StopMyInt)
    }

}

function callSetIntStop(){
    clearInterval(StopMyInt)
}


function  callMeForColorChange(){
    if(top1 > 100 && top1 < 150 || top1 > 200 && top1 < 250 || top1 > 300 && top1 < 350 ||  top1 > 400 && top1 < 450 || top1 > 500 && top1 < 550 || top1 > 600 && top1 < 650 || top1 > 700 && top1 < 750 || top1 > 800 && top1 < 850 || top1 > 900 && top1 < 950 || top1 > 1000 && top1 < 1050  || top1 > 1100 && top1 < 1150){
        botmobj9.style.borderTop="5px solid #000";
        botmobj9.style.borderLeft="5px solid red";
        botmobj9.style.borderRight="5px solid green";
        botmobj9.style.borderBottom="5px solid yellow";
        botmobj12.style.borderTop="5px solid silver";
        botmobj12.style.borderLeft="5px solid gray";
        botmobj12.style.borderRight="5px solid fushsia";
        botmobj12.style.borderBottom="5px solid navy"; 
    }
    else{
        botmobj9.style.borderTop="5px solid #fff";
        botmobj9.style.borderLeft="5px solid aqua";
        botmobj9.style.borderRight="5px solid orange";
        botmobj9.style.borderBottom="5px solid blue";
        botmobj12.style.borderTop="5px solid lime";
        botmobj12.style.borderLeft="5px solid blue";
        botmobj12.style.borderRight="5px solid #23eca2";
        botmobj12.style.borderBottom="5px solid #09ac23";
    }
}