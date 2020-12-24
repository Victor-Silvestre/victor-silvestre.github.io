//STYLE

var style = document.createElement('style');
style.innerHTML = `

:root{
    --background: #eee;
    --container: #1d64f2;
    --highlight: #ffcc00;
}

*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
}

body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--background);
  font-family: "Helvetica", sans-serif;
  margin: 0 auto;
}

.inputContainer {
  text-align: center;
  padding: 1.8rem 0rem 0.5rem;
  background: var(--container);
  width: 100vw;
  margin-bottom: 1rem;
}

input {
  outline: none;
  width: 60%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #fff;
}

::placeholder {
  color: #eee;
  opacity: 1;
}

button {
  background-color: #fff;
  border: none;
  color: var(--container);
  padding: 8px 20px;
  margin: 0px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
}

button:hover {
  cursor: pointer;
}

button:active {
  background-color: var(--highlight);
  cursor: pointer;
}

button:focus {
  outline:none;
}

.notes {
  justify-content: center;
  display: flex;
  flex-direction: column-reverse;
  flex: 0 0 100%;
  max-width: 900px;
}

.note {
  padding: 1rem 2rem 1rem 2rem;
  margin: 0.8rem;
  border-radius: 7px;
  background: #fff;
  color: #666;
  flex: 0 0 80%;
  max-width: 100%;
  border-left: 5pt solid #bbb;
  overflow-wrap: anywhere;
}

.note:hover {
  color: #333;
  border-left: 5pt solid #1d64f2;
}

.note:last-child {
  font-size:1.3rem;
  color: #333;
  border-left: 5pt solid var(--container);
}

`;

document.head.appendChild(style);


//ELEMENTS

function inputContainer() {

    function createDiv(className) {
        var div = document.createElement("div");
            div.className = className;

            return div;
    }

    function createInput(type,name,idName, placeholder) {
      var input = document.createElement("input");

          input.setAttribute("type", type);
          input.setAttribute("name", name);
          input.setAttribute("id", idName);
          input.setAttribute("placeholder", placeholder);

          return input;
}

    function createButton(type,idName,text) {
        var button = document.createElement("button");
          button.setAttribute("type",type);
          button.setAttribute("id",idName);
          button.textContent = text;

        return button;
    }

    //Create HTML
    var inputContainer = createDiv("inputContainer");

    inputContainer.appendChild(createInput("text", "noteIn", "noteIn", "Escribe algo..."));
    inputContainer.appendChild(createButton("button", "sendBtn", "Enviar"));

    return inputContainer;
}

function notes() {

  function createDiv(className) {
      var div = document.createElement("div");
          div.className = className;

          return div;
  }

    var notes = createDiv("notes");
    return notes;

}

//OUTPUT

var containerSection = inputContainer();
document.write(containerSection.outerHTML);

var notesSection = notes();
document.write(notesSection.outerHTML);



//FUNCTIONALITY

const sendBtn = document.querySelector('#sendBtn');
const noteIn = document.querySelector('#noteIn');

noteIn.addEventListener('keyup', function(event) {
  if (event.keyCode === 13){
    document.querySelector('#sendBtn').click(sendNote);
  }
});

sendBtn.addEventListener('click', sendNote);

function sendNote(){
  var content = noteIn.value;
  var input = document.querySelector("input");

  if(content === ''){
    alert('No hay mensaje. Por favor, escribe algo.');
        input.style = 'border-bottom: 1px solid var(--highlight); background-color: rgba(255,255,255,0.2);';
  }

  else if(content == 'algo'){
    alert('ja ja ja. Muy gracioso ;)');
    var note = document.createElement("p");
        note.className ="note";
        note.innerText = content;
        document.querySelector('.notes').appendChild(note);
        noteIn.value = '';
        input.style = 'border-bottom: 1px solid #fff;';
  }

  else if(content == 'hola'){
    alert('Hola a ti! =)');
    var note = document.createElement("p");
        note.className ="note";
        note.innerText = content;
        document.querySelector('.notes').appendChild(note);
        noteIn.value = '';
        input.style = 'border-bottom: 1px solid #fff;';
  }

  else{
    var note = document.createElement("p");
        note.className ="note";
        note.innerText = content;
        document.querySelector('.notes').appendChild(note);
        noteIn.value = '';
        input.style = 'border-bottom: 1px solid #fff;';
  }
}
