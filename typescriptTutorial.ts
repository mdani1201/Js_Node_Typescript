//                       union
const printID = (id: string|number) => {
  console.log("ID: " + id);
} 
// Can be Both types that we defined
printID("id123");
printID(12345678);

// Custom Types
type IDField = string|number;

const printID2 = (id: IDField) => {
  console.log("ID: " + id);
} 

interface BusinessPartner {
  name: string
  creditScore: number
}

interface UserIdentity {
  id:number
  email: string
}

type Employee = BusinessPartner & UserIdentity //In intersection you can call both fields from both interfaces

const signContract = (employee: Employee):void => {
  console.log("Contract signed by" + employee.name + "with email: " + employee.email);
}
