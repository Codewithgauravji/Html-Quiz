const questions = [{
    que: "Which of the following is a markup language?",
    a: "Html",
    b: "Css",
    c: "Jawascript",
    d: "Php",
    correct: "a"
},
{
    que: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
},
{
    que: "what does css stands for?",
    a: "Hpertext Markup language",
    b: "Cascading Style Sheet",
    c: "Jason object notation",
    d: "Jason object notation",
    correct: "b"
},
{
    que: "What is tha use of <ul> tag?",
    a: "italic",
    b: "change line",
    c: "bulet",
    d: "underline",
    correct: "d"
},
{
    que: "What is the purpose of the <html> tag?",
    a: "To define a paragraph",
    b: "To define a hyerlink",
    c: "To define the root element of an HTML document",
    d: "To define a table",
    correct: "c"
},
{
    que: "Which tag is used to display bold text?",
    a: "<i>",
    b: "<b>",
    c: "<strong>",
    d: "<em>",
    correct: "b"
},
{
    que: "Which attribute is used tp specfy the URL of an image?",
    a: "src",
    b: "href",
    c: "alt",
    d: "title",
    correct: "a"
},
{
    que: "What is the perpose of the <body> tag?",
    a: "To define the root element of an HTML document",
    b: "To define metadata for an HTML document",
    c: "To define the content of an HTML document",
    d: "To define a table",
    correct: "c"
},
{
    que: "Which attribute is used to specify the alternative text for an image?",
    a: "src",
    b: "href",
    c: "alt",
    d: "title",
    correct: "c"
},
{
    que: "Which is the porpose of <table> tag?",
    a: "To define a paragraph",
    b: "To define a list",
    c: "To define a table",
    d: "To define an image",
    correct: "c"
}
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()

    if (ans == data.correct) {
        console.log(ans);
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h2>${right} / ${total}</h2>
    <img src='https://i.pinimg.com/originals/65/d4/a3/65d4a33521f6f15d4b8f3b5cdeaec29d.gif '>
    <div class="like">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzdiyB94yv2lFAqOfQ43EfrxIVfXNDfcJtwwTzJU7W1Z6u-sW7mBM8qB3QYqW0vxpLdY&usqp=CAU' onclick="likes()">
    <span id="likeCount">+0</span>
    </div>
    <h3>Please Like</h3>
    `
    let element = document.getElementById("box");
    element.style.color = "red";
    element.style.fontSize = "40px";
    element.style.textAlign = "center";
    element.style.height = "600px";
   
}
let likeCount = 0;
function likes(){
    likeCount++;
document.getElementById("likeCount").textContent = likeCount;
}



loadQuestion();