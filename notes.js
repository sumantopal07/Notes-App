const fs = require('fs');
const chalk = require('chalk');




const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote=notes.find((note)=> note.title === title);

    if ( duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body,
        });
        savedNotes(notes);
        const success = chalk.bold.green.inverse;
        console.log(success('New note added!'));
    }
    else {
        const failure = chalk.bold.red.inverse;
        console.log(failure('Note with ' + title + ' already exists'));
    }

}
const removeNote = (title) => {
    const notes = loadNotes();
    let initialLen = notes.length;
    const duplicateNotes = notes.filter((note) => (note.title !== title));

    if (initialLen != duplicateNotes.length) {
        savedNotes(duplicateNotes);
        const success = chalk.bold.green.inverse;
        console.log(success(title + " note deleted successfully"));
    }
    else {
        const failure = chalk.bold.red.inverse;
        console.log(failure('Title to be deleted not found'));
    }
}
const listNotes = () => {
    const notes = loadNotes();
    const title1 = chalk.bold.keyword('orange');
    const body1 = chalk.bold.keyword('white');
    notes.forEach(element => {
        console.log(title1(element.title) +": "+body1(element.body));
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }

}

const getNote = (title)=>
{
    notes=loadNotes();
    const object=notes.find((note)=> note.title === title);

    debugger
    
    if(object)
    {
        const success = chalk.bold.green.inverse;
        console.log(success(title + ": "+object.body));
    }
    else
    {
        const failure = chalk.bold.red.inverse;
        console.log(failure("NOT FOUND"));
    }
}
module.exports =
{
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
};