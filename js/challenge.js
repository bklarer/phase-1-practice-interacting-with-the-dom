document.addEventListener("DOMContentLoaded", pageLoad);


//Grabs counter element, adds 1 every 1000 ms
function pageLoad() {
    let counter = document.querySelector('#counter')
    
    let counterAdd = 0;
   

    function addOne() {
      counterAdd += 1;
      counter.innerText = counterAdd;
    } 
    let runningInterval = setInterval(addOne, 1000);

    //pause button, stop everything, change text of button to resume, disable buttons

    let pause = document.getElementById("pause");
    let disableButtons = document.getElementsByClassName("disable");
    let disableButtonsArray = [];

    for (let i=0;i < disableButtons.length;i++){
      disableButtonsArray.push(disableButtons[i]);
    }
    
    function pauseButton() {
       if (pause.innerText === "pause") {
          pause.innerText = "resume";
          clearInterval(runningInterval);
          disableButtonsArray.forEach(button => button.setAttribute("disabled", true));
       } else if (pause.innerText === "resume") {
          pause.innerText = "pause";
          runningInterval = setInterval(addOne, 1000);
          disableButtonsArray.forEach(button => button.removeAttribute("disabled"));
       }
    }

    pause.addEventListener("click", pauseButton);

    //grab + and - button, add eventlistener to increase/decrease counterAdd by 1, I set minus to 2 because the counter didn't feel like it was going down.
    //the speed of the buttons and number are definitely slower on click in my version

    let addButton = document.getElementById("plus")
    let minusButton = document.getElementById("minus")



    
    addButton.addEventListener("click", () => {
       counterAdd += 1
    })

    minusButton.addEventListener("click", () => {
       counterAdd -= 2
    })

//Create comment submit form

let submitForm =document.querySelector('#comment-form')

submitForm.addEventListener("submit", handleComment)

let commentForm = document.querySelector('#comment-form')

function handleComment(event) {
   event.preventDefault();
   let input = document.querySelector('#comment-input').value;
   let commentList = document.querySelector('#list');
   let p = document.createElement('p');
   p.textContent = input;
   commentList.appendChild(p)
   commentForm.reset();
}

let likeButton = document.querySelector('#heart')

likeButton.addEventListener('click', handleLikes)

let likeList = []
let li = document.createElement('li')
function handleLikes() {
   let currentNumber = Number(counter.textContent)
   let likeNumber = likeList.some(obj => obj.id === currentNumber)
      if (!likeNumber) {
         likeList.push({id: currentNumber, likes:1})
         li.textContent = `${currentNumber} has been liked 1 time!`
         document.querySelector('.likes').appendChild(li)
      } else {
         let number = likeList.find(obj => obj.id === currentNumber)
         number.likes = Number(number.likes) + 1
         li.textContent = `${currentNumber} has been liked ${number.likes} times!`
         document.querySelector('.likes').appendChild(li)
      }
   }


}

//not sure why append does not add a new line





    