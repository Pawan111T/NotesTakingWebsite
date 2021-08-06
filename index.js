//console.log("this is demo version")
// if user add a note
showNotes();

let ad = document.getElementById('addbtn');
ad.addEventListener("click", function(e) {
    let addTxt = document.getElementById("AddText")
    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(Notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("Notes", JSON.stringify(notesObj))
    addTxt.value = "";
    //console.log(notesObj)
    showNotes();

});
function showNotes() {
    
    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(Notes)
    }
    let html = " ";
    notesObj.forEach(function (element, index) {
        html += `<div class="my-2 mx-2 card" style="width: 18rem;">

   <div class="card-body">
       <h5 class="card-title">Note ${index + 1}</h5>
       <p class="card-text">${element}</p>
       
       <button id="${index}"Onclick="DeleteNote(this.id)" class="btn btn-primary">Delete Note</button>
   </div>
</div>`;

    });
    let notesel = document.getElementById("Notes");
    if (Notes.length !== 0) {
        notesel.innerHTML = html;
    }
    else{
        notesel=`nothing to show!`
    }

}
// function to delete a note

function DeleteNote(index){
    let Notes = localStorage.getItem("Notes");
    if (Notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(Notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("Notes",JSON.stringify(notesObj));
    showNotes();
}