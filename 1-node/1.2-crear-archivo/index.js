const fs = require('fs');

const path = './';
const nameFile = 'my-file.txt';
const contentForfile = 'Esto esta escrito en node';
// Path absoluto:  D:\Diego Rivera M\Curso d devf\JavaScript-Avanzado\js-avanzado-diegorm\1-node\1.2-crear-archivo
// Path absoluto: js-avanzado-diegorm\1-node\1.2-crear-archivo
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForfile, (err) => {
    if(err){
        throw err;
    }
    else{
        console.log ('Archivo creado con exito...!!');
    }

});



