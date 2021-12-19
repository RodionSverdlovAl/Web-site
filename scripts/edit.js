class Edit{
    constructor(number,sourselink){
        this.edit_div = document.createElement('div');
        this.edit_div.className = "edit-style";
        this.number = number;
        this.sourselink = sourselink;
        this.edit_div.innerHTML =
         `<div class="edit-number">${this.number}</div>
          <video loop >
          <source src="${this.sourselink}" type="video/mp4" />
          </video>
          <button onclick="play_stop_video()"></button>`;
    }
}