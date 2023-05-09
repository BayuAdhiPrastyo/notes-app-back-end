const { addNoteHandler } = require("./handler");

{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
},

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
   
    const note = notes.filter((n) => n.id === id)[0];
  };

module.exports = notes;