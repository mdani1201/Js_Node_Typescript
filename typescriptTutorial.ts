interface UserInterface {
  id: number;
  name: string;
  age: number;
  extra?:string; //"?"after the key makes this optional and dont get an error when we dont define it 
  greet(message: string): void; //define the type of Parameter and the return type
}
// Interface defines the types of values in an Object
// You have to define the Objecttype to the Interface in order to work
const User: UserInterface = {
  id: 2,
  name: "Dani",
  age: 22,
  greet(massage:string):void {        //types can be defined when you call the function
    console.log(massage);
  }
}
User.greet("Hello");

if(!User.extra) {
  console.log("No extra defined");
} else {
  console.log(User.extra);
}