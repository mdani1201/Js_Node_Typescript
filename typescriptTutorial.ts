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