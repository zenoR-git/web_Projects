const board = document.querySelector(".container2");
const container3Element = document.querySelector(".container3")
const exitIcon = document.getElementById("cross");
const checkIcon = document.getElementById("check");
var i = 1;

exitIcon.addEventListener("click",()=>{
    typeNote();
})

checkIcon.addEventListener("click",()=>{
    createNote();
});

function typeNote(){
let compStyles = window.getComputedStyle(container3Element)
 if (compStyles.getPropertyValue('display') == "none"){
    container3Element.style.display = "block";
 }else{
    container3Element.style.display = "none";
 }
}

function createNote(){
    let noteElemnt = document.getElementById("note");
    let noteTxt = noteElemnt.value;
    if (noteElemnt.value!==""){
        
        let node0 = document.createElement("div");
        let node1 = document.createElement("h2");
        node1.textContent = noteTxt;
        node1.setAttribute("style","height:250px;width:275px;overflow:hidden;font-size:26px;padding:20px;box-shadow:1px 1px 2px gray");
        node1.style.margin = marginEle();
        node1.style.transform = rotateEle();
        node1.style.background = backgroundEle();
        node0.appendChild(node1);

        board.insertAdjacentElement("beforeend",node0);

        node0.addEventListener("dblclick",()=>{
            node0.remove();
        })

        noteElemnt.value = "";
    }
    
}

function rotateEle(){
 const rotation = ["rotate(3deg)","rotate(-1deg)","rotate(-3deg)","rotate(5deg)","rotate(-5deg)","rotate(-10deg)"];
 return rotation[Math.floor(Math.random()*rotation.length)];
}

function marginEle(){
    const mg = ["5px","-1px","0px","5px","10px"];

    return mg[Math.floor(Math.random()*mg.length)];
}

function backgroundEle(){
    const bg = ["#EDD2F3","#84DFFF","#516BEB","#B4FE98","#FBF46D","#FFAB4C"]
    if (i==5){
        i=0
    }
    return bg[i++];
}