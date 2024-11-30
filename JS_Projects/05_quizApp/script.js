
document.addEventListener('DOMContentLoaded',
    () => {

        const displayQuiz = document.getElementById('quiz');
        const displayQuestion = document.getElementById('question-container')
        const displayResult = document.getElementById('result-container')
        const questionText = document.getElementById('question-text');
        const choicesList = document.getElementById('choices-list');
        const restartBtn = document.getElementById('restart-btn');
        const startBtn = document.getElementById('start-btn')
        const nextBtn = document.getElementById('next-btn')
        const scoreDisplay = document.getElementById('score');


        const questions = [
            {
                question: "Which programming language is known as the backbone of web development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: "JavaScript"
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
                correctAnswer: "Harper Lee"
            },
            {
                question: "What is the largest planet in our Solar System?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                correctAnswer: "Jupiter"
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Gold", "Oxygen", "Hydrogen", "Carbon"],
                correctAnswer: "Oxygen"
            },
            {
                question: "What is the speed of light in a vacuum?",
                options: ["299,792 km/s", "150,000 km/s", "1,000 km/s", "99,792 km/s"],
                correctAnswer: "299,792 km/s"
            },
            {
                question: "Which artist painted the Mona Lisa?",
                options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
                correctAnswer: "Leonardo da Vinci"
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correctAnswer: "2"
            },
            {
                question: "Which country hosted the 2020 Summer Olympics?",
                options: ["Japan", "China", "Brazil", "USA"],
                correctAnswer: "Japan"
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "O2", "CH4"],
                correctAnswer: "H2O"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        startBtn.addEventListener('click', startQuiz);

        nextBtn.addEventListener('click',()=>{
            currentQuestion++;
            if(currentQuestion < questions.length){
                showQuestions();
            }
            else{
                showResult();
            }
        })

        restartBtn.addEventListener('click',()=>{
            currentQuestion = 0;
            score = 0;
            startQuiz()
        })

        function startQuiz() {
            startBtn.classList.add('hidden')
            displayQuestion.classList.remove('hidden')
            displayResult.classList.add('hidden')
            showQuestions();
        }

        function showQuestions() {
            questionText.textContent = questions[currentQuestion].question;
            choicesList.textContent = "" //clear previous choices
            questions[currentQuestion].options.forEach((option) => {
                const li = document.createElement('li');
                li.textContent = option;
                li.addEventListener('click', () => selectAnswer(option));
                choicesList.appendChild(li)
            })
        }

        function selectAnswer(selectedOption) {
            let correctAnswer = questions[currentQuestion].correctAnswer;
            if (correctAnswer === selectedOption) {
             score++;
            }
            nextBtn.classList.remove('hidden')
            
        }

        function showResult(){
            displayQuestion.classList.add('hidden')
            displayResult.classList.remove('hidden')
            scoreDisplay.textContent = `${score} out of ${questions.length} answers were correct`
        }

    }

)