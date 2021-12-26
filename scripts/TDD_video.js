let editJS = document.getElementById("video");
let dinamic_edits = [];

let link1 = '../../assets/videos/video9.mp4';
let link2 = '../../assets/videos/video3.mp4';
let link3 = '../../assets/videos/video10.mp4';

dinamic_edits[0] = new Edit('1',link1); editJS.append(dinamic_edits[0].edit_div);
dinamic_edits[1] = new Edit('2',link2); editJS.append(dinamic_edits[1].edit_div);
dinamic_edits[2] = new Edit('3',link3); editJS.append(dinamic_edits[2].edit_div);

let count_edit =1;
Edit_slide_show(count_edit);

function changeV(n){
  Edit_slide_show(count_edit +=n);
}

function Edit_slide_show(n){
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