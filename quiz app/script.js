
const quizData = [
	{
		question: "most popular programming language?",
		a: "javascript",
		b: "c",
		c:"python",
		d:"java",
		correct: "a",
	},
	{
		question: "How old am I?",
		a:"17",
		b:"20",
		c:"24",
		d:"28",
		correct:"c", 
	},
	{
		question: "how long does an average person takes to learn js?",
		a: "1 month",
		b: "2 month",
		c: "7 month",
		d: "3 years",
		correct:"b",
	}
];
const quiz = document.getElementById("quiz");
const answerE1s =document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();	

	const currentQuizData = quizData[currentQuiz];
	
	questionE1.innerText = currentQuizData.question;
	a_text.innerText =currentQuizData.a;
	b_text.innerText =currentQuizData.b;
	c_text.innerText =currentQuizData.c;
	d_text.innerText =currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerE1s.forEach((answerE1) => {
		if (answerE1.checked) {
			answer = answerE1.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerE1s.forEach((answerE1) => {
			answerE1.checked = false;
		
	});

}

submitBtn.addEventListener("click", () => {
	// check to see the answer
	let answer = getSelected();

	console.log(answer);
	if (answer) {
		if (answer 	=== quizData[currentQuiz].correct) {
		score++;
		}

		currentQuiz++;

		if (currentQuiz <quizData.length) {
			loadQuiz();
		} else{
		quiz.innrHTML =`<h2>YOu answered correctly to ${score}/${quizData.length}questions</h2>`;
		}
	}

});
