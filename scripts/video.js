let editJS = document.getElementById("video");
let dinamic_edits = [];

dinamic_edits[0] = new Edit('1',link1); editJS.append(dinamic_edits[0].edit_div);
dinamic_edits[1] = new Edit('2',link2); editJS.append(dinamic_edits[1].edit_div);
dinamic_edits[2] = new Edit('3',link3); editJS.append(dinamic_edits[2].edit_div);
dinamic_edits[3] = new Edit('4',link4); editJS.append(dinamic_edits[3].edit_div);
dinamic_edits[4] = new Edit('5',link5); editJS.append(dinamic_edits[4].edit_div);
dinamic_edits[5] = new Edit('6',link6); editJS.append(dinamic_edits[5].edit_div);
dinamic_edits[6] = new Edit('7',link7); editJS.append(dinamic_edits[6].edit_div);
dinamic_edits[7] = new Edit('8',link8); editJS.append(dinamic_edits[7].edit_div);
dinamic_edits[8] = new Edit('9',link9); editJS.append(dinamic_edits[8].edit_div);
dinamic_edits[9] = new Edit('10',link10); editJS.append(dinamic_edits[9].edit_div);

let count_edit =1;
Edit_slide_show(count_edit);

function EditChanges(n){
  count_edit =n;
  Edit_slide_show(count_edit);
}

function change(n){
  Edit_slide_show(count_edit +=n);
}

function Edit_slide_show(n){
  ShowDots(n)
  play_edit(n)
    
  let i;
  if(n>dinamic_edits.length){
    count_edit = 1;
  }
  if(n<1){
    count_edit = dinamic_edits.length;
  }
  for(i=0; i<dinamic_edits.length; i++){
    dinamic_edits[i].edit_div.style.display = "none";
  }
  dinamic_edits[count_edit-1].edit_div.style.display = "block";
  console.log(n);
}
function ShowDots(n){
  let dot = document.querySelectorAll(".dot");
  let i;
  if(n>dot.length){
    count_edit = 1;
  }
  if(n<1){
    count_edit = dot.length;
  }
  for(i=0; i<dot.length; i++){
    dot[i].style.background = "#11101d";
  }
  dot[count_edit-1].style.background = "#1d1b31";
  console.log(n);
}

function play_edit(n){
  let edit = document.querySelectorAll(".edit-style>video");
  if(n>edit.length){
    count_edit = 1;
  }
  if(n<1){
    count_edit = edit.length;
  }

  let i;
  for(i=0; i<edit.length; i++){
    edit[i].pause();
  }
  if(edit[count_edit-1].paused){
    edit[count_edit-1].play();
  }else{
    edit[count_edit-1].pause();
  }
}

function play_stop_video() {
  let edit = document.querySelectorAll(".edit-style>video");
  if(edit[count_edit-1].paused){
    edit[count_edit-1].play();
  }else{
    edit[count_edit-1].pause();
  }
}

let edit = document.querySelector(".edit-style>video");
edit.pause();