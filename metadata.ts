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

// console.log(note, height, colorNote);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi there!')
  fly(): void {
    console.log('vrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
