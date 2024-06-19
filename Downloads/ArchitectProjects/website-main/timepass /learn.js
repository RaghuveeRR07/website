// array map
// map() creates a new array from calling a function for every array element.
const numbers = [4,9,16,25];

const newArr = numbers.map(function(val){
    return val * 10;
});

console.log(newArr);

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  console.log(persons.map(getFullName));
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" + ");
  }

