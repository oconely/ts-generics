@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something')
  pilot(
    @parametrDecorator speed: string,
    @parametrDecorator generateWake: boolean
  ): void {
    if (speed === 'swish') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    // throw new Error();
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parametrDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    try {
      method();
    } catch (e) {
      console.log(errorMessage);
    }
  };
}

// new Boat().pilot();
