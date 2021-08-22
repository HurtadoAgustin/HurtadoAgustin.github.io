class Course {
  constructor({
    name, 
    clases = [],
  }){
    this.name = name;
    this.clases = clases;
  }
  get changeName(){return this.name;}

  set changeName(nuevoNombrecito) {
    if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
      console.error('Web... no');
    } else {
      this.name = nuevoNombrecito;
    }
  }
}
cursoProgramacion = new Course({name: 'Curso Programación', clases:["Uno", "Dos", "Tres"]});
cursoProgramacion.changeName = 'Curso Programazao';
console.log(cursoProgramacion);
cursoProgramacion.changeName = 'Curso Malito de Programación Básica';
console.log(cursoProgramacion);
var nombre = cursoProgramacion.changeName;
console.log(cursoProgramacion);