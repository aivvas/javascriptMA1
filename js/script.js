//Question 1
const cat = {
    complain: "meow!"
};

console.log(cat["complain"]);

//Question 2, question 3, Question 4
var h3 = document.querySelector("h3");
var heading = document.querySelector("heading");

function h3heading(){
    h3.innerHTML = "Updated heading";
    h3.style.fontSize = "2em";
    h3.classList.add("subheading");
};
h3heading();

//Question 5
var paragraphs = document.querySelector("p");
for (var i=0, max=paragraphs.clientHeight; i < max; i++){
    paragraphs.style.backgroundColor = "red";
};


//Question 6
var resultsContainer = document.querySelector(".results");
function resultsC(){
    resultsContainer.innerHTML = "<p>New paragraph</p>";
    resultsContainer.style.backgroundColor = "yellow";
};
resultsC();

//Question 7
function listpar(list){

}

//Question 8
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



