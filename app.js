const yargs=require('yargs');
const notes=require('./notes.js');

// Customize version
yargs.version('1.1.0');

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: '',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
});

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

//Create list command

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler(){
        notes.listNotes();
    }
});

//Create read command

yargs.command({
    command: 'read',
    describe: 'reading the notes',
    builder:{
        title:{
            describe: 'read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.getNote(argv.title);
    }
});

yargs.parse();
// add, remove, read, list

//console.log(yargs.argv);





















// const command=process.argv[2];

// if(command === 'add')
// {
//     console.log('Adding Note!');
// }
// else if(command === 'remove')
// {
//     console.log('Remove node');
// }






// const error = chalk.bold.blue.inverse;
// const warning = chalk.keyword('orange');
 
// console.log(error('Error!'));
// console.log(warning('Wagj,h!'));

// console.log(process.argv);



//locally installed dependencies 

// const validator=require('validator');

// console.log(validator.isEmail('?sumantopalgadfbaadsfdafsfsagmail.com'));
// console.log(validator.isURL('heettps://facebook.com'));










// const name = require('./notes.js');
// console.log(name());

// const name = require('./utils.js');
// //const name = "Sumanto";
// console.log(name(11,3434124134));