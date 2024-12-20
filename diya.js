let currentQuestion = 1;

const nextButton = document.getElementById('next-button');
const resultDiv = document.getElementById('result');
const quizForm = document.getElementById('quiz-form');

nextButton.addEventListener('click', () => {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    const nextQuestionDiv = document.getElementById(`question${currentQuestion + 1}`);
    
    if (currentQuestion <= 2) {
        currentQuestionDiv.style.display = 'none';
        nextQuestionDiv.style.display = 'block';
        currentQuestion++;
    } else {
        quizForm.style.display = 'none';
        resultDiv.style.display = 'block';
    }
});
