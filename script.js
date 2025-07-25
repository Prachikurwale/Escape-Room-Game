function nextRoom(currentId,nextId){
   document.getElementById(currentId).classList.remove("active");
   document.getElementById(nextId).classList.add("active");
}
function startGame(){
  nextRoom("startScreen" , "room1");
}



function checkRoom1(){
  let ans = document.getElementById('answer1').value;
  let msg = document.getElementById('msg1');
  if(ans.trim() === '8'){
    msg.textContent="Correct";
    nextRoom("room1", "room2");
  }
  else{
    msg.textContent="wrong";
  }
}


function checkRoom2(){
 const ans = document.getElementById('answer2').value ;
 const msg = document.getElementById('msg2');
 if(ans === "javascript"){
  msg.textContent="Correct";
  nextRoom("room2","room3");
 }else{
msg.textContent="Wrong";
 }
}



function checkRoom3(){
  const ans = document.getElementById('answer3').value;
  let msg = document.getElementById('msg3');

  if(ans === "357"){
    msg.textContent="Congratulation Door unlocked!!" ;
    nextRoom("room3","escaped");
  }else{
    msg.textContent="Incorrect code!";
  }
}