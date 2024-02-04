let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new");
let msgcontainer= document.querySelector(".msg-container");
let msg=document.querySelector("#win");
let messcontainer=document.querySelector(".mess-container")


let turn0= true;
let check=0;
let victory=0;

const winPattern= [
    [0,1,2] ,
    [3,4,5] ,
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8] ,
    [2,4,6]
];

const resetGame = () => {
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}



boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true; 
        }
        box.disabled=true;
        ++check;

        checkWinner();


        if(check==9&&victory==0)
        {
            console.log("game draw");
            messcontainer.classList.remove("hide");
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const showWinner=(winner) => {
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
            let pos1 =boxes[pattern[0]].innerText;
            let pos2 =boxes[pattern[1]].innerText;
            let pos3 =boxes[pattern[2]].innerText;

            if(pos1!="" && pos2 !="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    console.log("winner" ,pos1);
                    showWinner(pos1);
                    victory=1;
                    
                }
            }
    }
};

newgamebtn.addEventListener("click",resetGame);

resetbtn.addEventListener("click",resetGame);