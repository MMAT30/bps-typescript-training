

const echo = <T>(arg: T): T => arg;


const isObject = <T>(arg: T): Boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}


const isTrue = <T>(arg: T): { arg: T, is: Boolean } => {
  
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false};
  }

  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false};
  }

  return {arg, is: !!arg};
}






// generic interface
interface BoolCheck<T> {
  value: T;
  is: Boolean;
}


const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }

  return { value: arg, is: !!arg };
};



// interface extending generic type
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  console.log(user.id);
  return user;
}



console.log(processUser({ id: 1, name: 'John' }));
console.log(processUser({ id: 2, name: 'Jane' }));



//
const userData = {
  id: 1,
  name: 'John',
  age: 20,
  friends: [{
    name: 'Jane',
    age: 20,
  }, {
    name: 'Jack',
    age: 20,
  }],
}


const getUserProperty = <T extends HasID, K extends keyof T>(users: T, key: K): T[K] => {
  return users[key];
}


console.log(getUserProperty(userData, 'id'));
console.log(getUserProperty(userData, "friends"));




class StateObject<T> {
  private data: T;

  constructor(initialState: T) {
    this.data = initialState;
  }

  get state(): T {
    return this.data;
  }

  set state(newState: T) {
    this.data = newState;
  }
}



const state = new StateObject("hello world");
console.log(state.state);

// state.state = 123; // not the same type

state.state = "new state";
console.log(state.state);



const state2 = new StateObject<string | number>(123);
console.log(state2.state);


// will work
state2.state = "new state";
console.log(state2.state);