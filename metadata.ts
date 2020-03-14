import 'reflect-metadata';

// associate some metadata with this object
const plane = {
  color: 'red'
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);
Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const colorNote = Reflect.getMetadata('note', plane, 'color');

console.log(note, height, colorNote);
