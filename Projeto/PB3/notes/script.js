const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote());

function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

// Fazendo com que a nota não seja deletada quando recarregada
function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

// Criando elemento da nota adesiva
function createNoteElement(id, content) {
  const element = document.createElement("textarea");

  element.classList.add("note", "keyboard-input");
  element.value = content;
  element.placeholder = "Nota adesiva vazia";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  // Aviso antes da nota adesiva ser deletada
  element.addEventListener("dblclick", () => {
    const doDelete = confirm("Você tem certeza que deseja deletar essa nota?");

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

// Função para criar uma nova nota adesiva
function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

// Evento para atualizar a nota adesiva
function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

// Deletando nota com dois clicks
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}
