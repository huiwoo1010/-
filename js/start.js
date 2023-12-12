const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const sanswer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
langmode=0;


const button = document.getElementById('langbutton');
button.addEventListener('click', function() {
  const startnarrate = document.getElementById('start-narrate');
  const resultnarrate = document.getElementById('result-text');
  const biobutton = document.getElementById('bio-button');
  const chembutton = document.getElementById('chem-button');
  const minebutton = document.getElementById('myButton');
  if (langmode==0){ 
    langmode=1; this.textContent = '한국어';
    startnarrate.textContent = 'Press start button to begin!';
    resultnarrate.textContent = 'Your Result';
    biobutton.textContent = 'Bio test';
    chembutton.textContent = 'Chem test';
    minebutton.textContent = 'share with friends';
    } //langmode=0 일때 한국어
  else if (langmode==1){ 
    langmode=0; this.textContent = 'English'; 
    startnarrate.textContent = '아래 시작하기 버튼을 눌러 테스트를 진행하세요!'
    resultnarrate.textContent = '당신의 결과는?';
    biobutton.textContent = '세포 테스트';
    chembutton.textContent = '화학 테스트';
    minebutton.textContent = '친구들과 함께하기';
    } //langmode=1 일때 영어
});


function write(vallist, re, mode){
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbz3-PKGPvJKuzJnwaSudNS0GFf_6CzSQU5RBd56qNEAeB5zZ8p5AAdopcEbfWR0qUJS/exec",

        data: {
            "테스트" : mode,
            "1" : vallist[0],
            "2" : vallist[1],
            "3" : vallist[2],
            "4" : vallist[3],
            "5" : vallist[4],
            "6" : vallist[5],
            "7" : vallist[6],
            "8" : vallist[7],
            "9" : vallist[8],
            "10" : vallist[9],
            "11" : vallist[10],
            "12" : vallist[11],
            "13" : vallist[12],
            "14" : vallist[13],
            "15" : vallist[14],
            "16" : vallist[15],
            "17" : vallist[16],
            "18" : vallist[17],
            "19" : vallist[18],
            "20" : vallist[19],
            "21" : vallist[20],
            "유형" : infoList[re].name
        },
        cache: false
    });
}

function calResult(mode){
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    write(sanswer, result, mode);
    return result;
}

function setResult(mode){
    idx=0;
    if(mode==1){
        qnaList = bioqnaList;
        infoList = bioinfoList;
        endPoint = 21;
    }
    else if(mode==2){
        qnaList = chemqnaList;
        infoList = cheminfoList;
        endPoint = 20;
    }
    else if(mode==3){
        qnaList = bioqnaListeng;
        infoList = bioinfoListeng;
        endPoint = 21;
    }
    else if(mode==4){
        qnaList = chemqnaListeng;
        infoList = cheminfoListeng;
        endPoint = 20;
    }

    for(let qIdx=0; qIdx<endPoint; qIdx++){
        if(sanswer[qIdx]=='a') idx=0;
        else if(sanswer[qIdx]=='b') idx=1;
        else if(sanswer[qIdx]=='c') idx=2;

        var target=qnaList[qIdx].a[idx].type;
            var jumsu=qnaList[qIdx].a[idx].score;
            for(let i = 0; i < target.length ; i++){
                select[target[i]]+=jumsu[i];
                console.log(qIdx, idx, jumsu[i]);
            }
    }

    let point=calResult(mode);
    const resultName=document.querySelector('.resultname');
    resultName.innerHTML=infoList[point].name;

    var resultImg=document.createElement('img');
    const imgDiv=document.querySelector('#resultImg');
    if(mode==1 || mode==3)
        var imgURL='img/bio/image-'+point+'.png';
    else if(mode==2 || mode==4)
        var imgURL='img/chem/image-'+point+'.png';
    resultImg.src=imgURL;
    resultImg.alt=point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    resultName.innerHTML=infoList[point].name;

    const resultDesc=document.querySelector('.resultDesc');
    resultDesc.innerHTML=infoList[point].desc;
}

function goResult(mode){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)})
        setResult(mode);
}

function addAnswer(answerText, qIdx, idx, mode){
    if(mode==1){
        qnaList = bioqnaList;
    }
    else if(mode==2){
        qnaList = chemqnaList;
    }
    else if(mode==3){
        qnaList = bioqnaListeng;
    }
    else if(mode==4){
        qnaList = chemqnaListeng;
    }
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    
    a.appendChild(answer);
    answer.innerHTML = answerText;
    
    answer.addEventListener("click", function(){
        var children1 = document.querySelectorAll('.answerList');
        for(let i = 0; i < children1.length; i++){
            children1[i].disabled = true;
            children1[i].style.WebkitAnimation="fadeOut 0.5s";
            children1[i].style.animation = "fadeOut 0.5s";
        }
        
        setTimeout(() => {
            var answerval=qnaList[qIdx].a[idx].answer[0];
            sanswer[qIdx]=answerval;

            for(let i = 0; i < children1.length; i++){
                children1[i].style.display = 'none';
            }
            goNext(++qIdx, mode);
        }, 450)

        var children2 = document.querySelectorAll('.backbutton');
        for(let i = 0; i < children2.length; i++){
            children2[i].disabled = true;
            children2[i].style.WebkitAnimation="fadeOut 0.5s";
            children2[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            for(let i = 0; i < children2.length; i++){
                children2[i].style.display = 'none';
            }
        }, 450)


    }, false);
}

function goNext(qIdx, mode){
    if(mode==1){
        qnaList = bioqnaList;
        endPoint = 21;
    }
    else if(mode==2){
        qnaList = chemqnaList;
        endPoint = 20;
    }
    else if(mode==3){
        qnaList = bioqnaListeng;
        endPoint = 21;
    }
    else if(mode==4){
        qnaList = chemqnaListeng;
        endPoint = 20;
    }
    if(qIdx === endPoint){
        goResult(mode);
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    if(qIdx>=1){
            //뒤로가기 버튼
        var b = document.querySelector('.goback');
        var goback = document.createElement('button');
        goback.classList.add('backbutton');
        goback.classList.add('fadeIn');
        b.appendChild(goback);
    
        if(mode==1||mode==2) goback.innerHTML = "뒤로가기";
        else if(mode==3||mode==4) goback.innerHTML = "to previous";
    }


    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i, mode);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';


    goback.addEventListener("click", function(){

        var children1 = document.querySelectorAll('.answerList');
        for(let i = 0; i < children1.length; i++){
            children1[i].disabled = true;
            children1[i].style.WebkitAnimation="fadeOut 0.5s";
            children1[i].style.animation = "fadeOut 0.5s";
        }
        for(let i = 0; i < children1.length; i++){
            children1[i].style.display = 'none';
        }

        var children2 = document.querySelectorAll('.backbutton');
        for(let i = 0; i < children2.length; i++){
            children2[i].disabled = true;
            children2[i].style.WebkitAnimation="fadeOut 0.5s";
            children2[i].style.animation = "fadeOut 0.5s";
        }
        for(let i = 0; i < children2.length; i++){
            children2[i].style.display = 'none';
        }
        goNext(--qIdx, mode);

    }, false);

}

function begin(mode){
    if(langmode==1){
        if(mode==1) mode=3;
        else if(mode==2) mode=4;
    }

    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 200)
        let qIdx = 0;
        goNext(qIdx, mode);
    }, 200);
    
}
