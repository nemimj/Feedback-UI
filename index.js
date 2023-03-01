let face1 = document.getElementById('face-1')
let face2 = document.getElementById('face-2')
let face3 = document.getElementById('face-3')
let feedback = document.getElementById('feedback');
let [cont1,cont2] = document.getElementsByClassName('container');
let sumbit = document.getElementById('btn-send')
let face1Click = false;
let face2Click = false;
let face3Click = false;

cont2.style.display = "none"

function updateClick(n){
            if(n === "1"){
                face1Click = true;
                face2Click = false;
                face3Click = false;
            }
            else if(n === "2"){
                face2Click = true;
                face1Click = false;
                face3Click = false;
            }
            else{
                face3Click = true;
                face1Click = false;
                face2Click = false;
            }
}



face1.addEventListener('click',()=>{
    updateClick("1")
    face2.style.backgroundColor = 'transparent'
    face3.style.backgroundColor = 'transparent'
    face1.style.backgroundColor = 'lightgreen'
})

face2.addEventListener('click',()=>{
    updateClick("2")
    face1.style.backgroundColor = 'transparent'
    face2.style.backgroundColor = 'lightpink'
    face3.style.backgroundColor = 'transparent'
})

face3.addEventListener('click',()=>{
    updateClick("3")
    face1.style.backgroundColor = 'transparent'
    face2.style.backgroundColor = 'transparent'
    face3.style.backgroundColor = 'lightsalmon'
})




sumbit.addEventListener('click',()=>{
    if (!(face1Click || face2Click || face3Click)) alert("Select any one")
    else{
        cont1.style.display = "none";
        cont2.style.display = "flex";
        cont2.style.padding = "5rem";
        if(face1Click) feedback.innerText = "Feedback: Happy";
        else if (face2Click) feedback.innerText = "Feedback: Netural";
        else  feedback.innerText = "Feedback: Sad"
    }
})


