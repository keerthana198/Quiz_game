let questions = [
{
question:"Which language is mainly used for web page structure?",options:["CSS","HTML","Python","Java"],answer:1
},
{
question:"Which HTML tag is used to create a hyperlink?",options:["link","href","a","hyper"],answer:2
},
{
question:"Which company created Java?",options:["Google","Microsoft","Sun Microsystems","Apple"],answer:2
},
{
question:"Which symbol is used for comments in Python?",options:["//","#","/* */","--"],answer:1
},
{
question:"Which data structure uses LIFO?",options:["Queue","Stack","Tree","Graph"],answer:1
},
{
question:"Which data structure uses FIFO?",options:["Stack","Queue","Array","Tree"],answer:1
},
{
question:"HTML stands for?",options:["Hyper Text Markup Language","High Transfer Machine Language","Hyper Transfer Markup Language","None"],answer:0
},
{
question:"Which tag is used for image?",options:["img","image","pic","src"],answer:0
},
{
question:"Which keyword is used for function in JavaScript?",options:["func","function","define","method"],answer:1
},
{
question:"Which database is used with Python?",options:["MySQL","Oracle","MongoDB","All"],answer:3
},
{
question:"Which company created Python?",options:["Guido van Rossum","James Gosling","Dennis Ritchie","Mark"],answer:0
},
{
question:"Which method is used to print in JavaScript console?",options:["print()","console.log()","echo()","display()"],answer:1
},
{
question:"Which memory is volatile?",options:["ROM","Hard Disk","RAM","SSD"],answer:2
},
{
question:"Which programming language is known for AI and Machine Learning?",options:["Python","HTML","CSS","SQL"],answer:0
},
{
question:"Which symbol is used for single line comments in JavaScript?",options:["#","//","<!-- -->","**"],answer:1
},
{
question:"Which keyword is used to declare a variable in JavaScript?",options:["var","int","string","float"],answer:0
},
{
question:"Which operator is used for comparison in programming?",options:["=","==","+","/"],answer:1
},
{
question:"Which company created the Windows operating system?",options:["Apple","Microsoft","Google","IBM"],answer:1
},
{
question:"Which keyword is used for conditional statements?",options:["if","check","when","case"],answer:0
},
{
question:"Which operating system is open source?",options:["Windows","Linux","macOS","DOS"],answer:1
},
{
question:"Which OS is developed by Apple?",options:["Windows","Linux","macOS","Android"],answer:2
},
{
question:"Which of the following is an operating system?",options:["Windows","Python","HTML","MySQL"],answer:0
},
{
question:"Which company developed the C language?",options:["Microsoft","Apple","Bell Labs","IBM"],answer:2
},
{
question:"Which symbol is used to end a statement in C and Java?",options:[":",".",";","!"],answer:2
},
{
question:"Which programming language is used for Android app development?",options:["Java","Python","HTML","SQL"],answer:0
},
{
question:"Which loop is guaranteed to run at least once?",options:["for","while","do-while","foreach"],answer:2
},
{
question:"Which OS feature allows multiple programs to run at the same time?",options:["Multiprocessing","Multitasking","Multiuser","Multithreading"],answer:1
},
{
question:"Which database is a NoSQL database?",options:["MySQL","Oracle","MongoDB","SQL Server"],answer:2
},
{
question:"Which keyword is used to stop a loop?",options:["stop","break","exit","end"],answer:1
},
{
question:"Which keyword is used to return a value from a function?",options:["return","send","give","back"],answer:0
},
{
question:"Which part of the OS interacts directly with hardware?",options:["Shell","Kernel","Application","Compiler"],answer:1
},
{
question:"Which OS function controls program execution?",options:["Process Management","Memory Management","File System","Security"],answer:0
},
{
question:"Which OS scheduling method gives each process equal time?",options:["FCFS","Round Robin","Priority","SJF"],answer:1
},
{
question:"Which HTML tag is used to create a paragraph?",options:["p","para","text","pg"],answer:0
},
{
question:"Which HTML tag is used for inserting video?",options:["media","video","movie","vid"],answer:1
},
{
question:"Which programming language is object-oriented?",options:["Java","HTML","CSS","SQL"],answer:0
},
{
question:"Which data structure stores elements in contiguous memory?",options:["Array","Tree","Graph","Queue"],answer:0
},
{
question:"Which operating system is widely used on servers?",options:["Linux","Windows 98","DOS","macOS"],answer:0
},
{
question:"Which HTML tag is used for headings?",options:["h1","head","title","heading"],answer:0
},
{
question:"Which keyword is used to create a function in Python?",options:["function","def","create","fun"],answer:1
},
{
question:"Which HTML tag is used to insert a line break?",options:["break","lb","br","line"],answer:2
},
{
question:"Which data structure uses First In First Out?",options:["Stack","Queue","Tree","Graph"],answer:1
},
{
question:"Which data structure stores data in hierarchical form?",options:["Array","Tree","Queue","Stack"],answer:1
},
{
question:"Which company developed JavaScript?",options:["Microsoft","Netscape","Google","IBM"],answer:1
},
{
question:"Which keyword is used to define a class in Java?",options:["object","class","define","structure"],answer:1
},
{
question:"Which symbol represents modulus operation?",options:["%","/","*","+"] ,answer:0
},
{
question:"Which HTML tag is used to create a table?",options:["table","tr","td","tab"],answer:0
},
{
question:"Which HTML tag is used for unordered list?",options:["ul","ol","li","list"],answer:0
},
{
question:"Which programming language was developed by Dennis Ritchie?",options:["Java","C","Python","Ruby"],answer:1
},
{
question:"Which device is used to store data permanently?",options:["RAM","ROM","Hard Disk","Cache"],answer:2
},
{
question:"Which language is used for styling web pages?",options:["HTML","CSS","Python","C"],answer:1
}
]

let currentQuestion = 0
let score = 0

function loadQuestion(){
    for(let i=0;i<=3;i++){
        let button= document.getElementById("opt"+i);
        button.style.backgroundColor="#3498db";
        button.disabled=false;
    }
    document.getElementById("question").innerText =questions[currentQuestion].question
    document.getElementById("opt0").innerText =questions[currentQuestion].options[0]
    document.getElementById("opt1").innerText =questions[currentQuestion].options[1]
    document.getElementById("opt2").innerText =questions[currentQuestion].options[2]
    document.getElementById("opt3").innerText =questions[currentQuestion].options[3]
}

function checkAnswer(option){
    let correctAnswer = questions[currentQuestion].answer;
    let buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.disabled = true);
    if(option == questions[currentQuestion].answer){
        document.getElementById("opt"+option).style.backgroundColor="green";
        score++
    }
    else{
        document.getElementById("opt"+option).style.backgroundColor="red";
        document.getElementById("opt"+correctAnswer).style.backgroundColor="green";
    }
}
function endquiz(){

    let percentage = (score/questions.length)*100
    let a
    if(percentage>=90){
            a="Excellent!!";
    }
    else if(percentage>=75 && percentage<=89){
        a="Very Good";
    }
    else if(percentage>=60 && percentage<=74){
        a="Very Good";
    }
    else if(percentage>=40 && percentage<=59){
        a="Average";
    }
    else{
        a="Needs practice";
    }

    document.getElementById("quiz-box").style.display="none"

    document.getElementById("result").innerHTML =
    a+"<br>"+
    "Your Score: "+score+" / "+questions.length+
    "<br>Percentage: "+percentage+"%"+
    "<br><br><button onclick='playAgain()'>Play Again</button>";
}
function playAgain(){
    location.reload();
}
let time = 10;

setInterval(function(){
    time--;
    document.getElementById("timer").innerText = "Time: " + time;

    if(time == 0){
        nextQuestion();
        time = 10;
    }
},1000);
function nextQuestion(){
    currentQuestion++
    if(currentQuestion < questions.length){
        loadQuestion()
    }
    else{
        let percentage = (score/questions.length)*100
        if(percentage>=90){
            a="Excellent!!";
        }
        else if(percentage>=75 && percentage<=89){
            a="Very Good";
        }
        else if(percentage>=60 && percentage<=74){
            a="Very Good";
        }
        else if(percentage>=40 && percentage<=59){
            a="Average";
        }
        else{
            a="Needs practice";
        }
        document.getElementById("quiz-box").style.display="none"

        document.getElementById("result").innerHTML=
        a+"<br>"+
        "Your Score: "+score+" / "+questions.length+
        "<br>Percentage: "+percentage+"%"+
        "<br><br><button onclick='playAgain()'>Play Again</button>";
    }
}
questions.sort(() => Math.random() - 0.5);
loadQuestion()