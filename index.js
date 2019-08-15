//alert("test");
// ### Exercise 1:
// Create a template string and assign it to the variable ```my_template_string```.
//
//     The template string should contain the following data only:
//
//     ```
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// ```
// ### Exercise 1:
// Create a template string and assign it to the variable ```my_template_string```.
//
//     The template string should contain the following data only:
//
//     ```
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// ```
// let my_name = "marcus";
// let my_id = "student";
// let my_address = "holmes";
//
// let my_template_string = `
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.`;
// console.log(my_template_string);

// ### Exercise 2:
//
// Create a new template string
//
//     ```
// var contestant = "1_M_l337!";
// var score = "9001";
// ```
//
// and use the provided variables to print
//     ```
// Congratulations 1_M_l337! !!, your score is 9001.
// ```
// let contestant = "1_M_l337!";
// let score = "9001";
// let template =`Congratulation ${contestant} !!, your score is ${score}.`;
//
// console.log(template);


// ## Exercise 3:
//
// Using the provided Object literal, create a template string  and iterate through the Parents and Children and print them in a format similar to the following:
//     ```
//
//     	SCHOOL PARENT LISTING
//
//
let parents =
    [
        {
            name: "Mr. Bill",
            children: ["Sluggo", "Spot", "Linda"]
        },
        {
            name: "Nancy R.",
            children: ["Stan"]
        },
        {
            name: "J. Page",
            children: ["Mick", "Robert", "John", "Kenny"]
        },
        {
            name: "Randolh H.",
            children: ["Biffy", "Carl Jr."]
        }
    ];

// Use the Object literal data below. You will need to iterate through each object and print it out with a template.
for(let x = 0; x< parents.length; x++){

    let elName = parents[x].name;
    console.log(elName);
    for(let i = 0; i< parents[x].length; i++)
    {
console.log(parents[x])
    }

}



















