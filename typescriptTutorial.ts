enum LoginError {
  Unauthorized = "Unauthorized", 
  NoUser = "No User",
  WrongCredentials = "Wrong Credentials",
  Internal = "Internal"
}
//enum can be used to define a Custom Types Object


//An error msg can be a lot of thing so to define a type is not easy
const printErrorMsg = (error: LoginError) => {
  if(error == LoginError.Unauthorized) {
    console.log("User not authorized");
  }
  else if(error == LoginError.NoUser) {
    console.log("No User found");
  }
  else if(error == LoginError.WrongCredentials) {
    console.log("Wrong Credentials");
  }
  else {
    console.log("Internal Error");
  }
}