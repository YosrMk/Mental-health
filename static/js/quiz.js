const questions = {
  individual: [
    {
      question: "How often do you feel overwhelmed by your emotions?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel lonely or isolated?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you struggle to concentrate or make decisions?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel fatigued or lack energy?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you experience changes in appetite or sleep patterns?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel hopeless or lose interest in activities you once enjoyed?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel irritable or angry?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel anxious or worried?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel physically unwell without a clear cause?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel disconnected from others?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not good enough?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re losing control?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not enjoying life?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re stuck in a rut?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not making progress in life?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    

  ],
  couple: [
    {
      question: "How often do you and your partner argue or have conflicts?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel emotionally connected to your partner?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel supported by your partner?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel misunderstood by your partner?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel appreciated by your partner?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like you and your partner are on the same page?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner listens to you?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner respects your boundaries?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner prioritizes your relationship?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner understands your needs?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner is emotionally available?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner values your opinions?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner is committed to the relationship?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner is willing to work on the relationship?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like your partner makes you feel loved?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    // Add 13 more questions for couples...
  ],
  teen: [
    {
      question: "How often do you feel pressure from school or peers?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel misunderstood by adults?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you don’t fit in with your peers?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel stressed about your future?",
      answers: [
        { text: "Always", value: 1 }, // Lower value for positive answers
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 3 },
      ],
    },
    {
      question: "How often do you feel like you’re not good enough?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re being judged by others?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you don’t have anyone to talk to?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not in control of your life?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not meeting expectations?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re struggling with your self-esteem?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not enjoying your teenage years?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re being pressured to grow up too fast?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not being heard by adults?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re struggling with your identity?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    {
      question: "How often do you feel like you’re not getting enough support?",
      answers: [
        { text: "Always", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 },
      ],
    },
    // Add 13 more questions for teens...
  ],
};

let currentQuestionIndex = 0;
let totalScore = 0;
let selectedSituation = null;

// Get the selected situation from the URL
const urlParams = new URLSearchParams(window.location.search);
selectedSituation = urlParams.get('situation');

function showQuestion() {
  const quizContainer = document.getElementById('quiz-container');
  const question = questions[selectedSituation][currentQuestionIndex];

  quizContainer.innerHTML = `
    <div class="question">
      <p>${question.question}</p>
      <div class="answer-buttons">
        ${question.answers
          .map(
            (answer) => `
          <button onclick="selectAnswer(${answer.value})">${answer.text}</button>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  updateProgressBar();
}

function selectAnswer(value) {
  totalScore += value;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions[selectedSituation].length) {
    setTimeout(() => {
      showQuestion();
    }, 300); // Delay for animation
  } else {
    setTimeout(() => {
      showResult();
    }, 300); // Delay for animation
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions[selectedSituation].length) * 100;
  document.getElementById('progress').style.width = `${progress}%`;
}

function showResult() {
  const quizContainer = document.getElementById('quiz-container');
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const suggestionText = document.getElementById('suggestion-text');
  const resourcesDiv = document.getElementById('resources');

  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  let suggestion = '';
  let resources = '';

  if (selectedSituation === 'individual') {
    if (totalScore >= 35) {
      suggestion = "Your responses suggest that you may be experiencing significant mental health challenges. It’s important to reach out to a mental health professional for support.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/find-therapist" target="_blank">Find a Therapist</a></li>
          <li><a href="https://www.example.com/crisis-hotline" target="_blank">Crisis Hotlines</a></li>
        </ul>
      `;
    } else if (totalScore >= 20) {
      suggestion = "You may be experiencing moderate stress or emotional difficulties. Consider exploring self-care practices and reaching out to a counselor if needed.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/mindfulness" target="_blank">Mindfulness Exercises</a></li>
          <li><a href="https://www.example.com/self-care-tips" target="_blank">Self-Care Tips</a></li>
        </ul>
      `;
    } else {
      suggestion = "You seem to be doing well! Keep up the good work and continue practicing healthy habits.";
      resources = `
        <p>Here are some resources to maintain your mental well-being:</p>
        <ul>
          <li><a href="https://www.example.com/healthy-habits" target="_blank">Healthy Habits Guide</a></li>
          <li><a href="https://www.example.com/sports-activities" target="_blank">Sports and Physical Activities</a></li>
        </ul>
      `;
    }
  } else if (selectedSituation === 'couple') {
    if (totalScore >= 35) {
      suggestion = "Your responses suggest that you and your partner may be experiencing significant relationship challenges. Consider seeking couples therapy or counseling.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/couples-therapy" target="_blank">Find a Couples Therapist</a></li>
          <li><a href="https://www.example.com/relationship-tips" target="_blank">Relationship Tips</a></li>
        </ul>
      `;
    } else if (totalScore >= 20) {
      suggestion = "You and your partner may be experiencing some communication or emotional difficulties. Consider exploring relationship-building exercises.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/communication-tips" target="_blank">Communication Tips</a></li>
          <li><a href="https://www.example.com/relationship-exercises" target="_blank">Relationship Exercises</a></li>
        </ul>
      `;
    } else {
      suggestion = "Your relationship seems to be doing well! Keep nurturing your connection and practicing healthy communication.";
      resources = `
        <p>Here are some resources to maintain a healthy relationship:</p>
        <ul>
          <li><a href="https://www.example.com/healthy-relationship-tips" target="_blank">Healthy Relationship Tips</a></li>
          <li><a href="https://www.example.com/date-ideas" target="_blank">Date Ideas</a></li>
        </ul>
      `;
    }
  } else if (selectedSituation === 'teen') {
    if (totalScore >= 35) {
      suggestion = "Your responses suggest that you may be experiencing significant stress or emotional challenges. It’s important to talk to a trusted adult or counselor.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/teen-counseling" target="_blank">Teen Counseling</a></li>
          <li><a href="https://www.example.com/teen-support-groups" target="_blank">Teen Support Groups</a></li>
        </ul>
      `;
    } else if (totalScore >= 20) {
      suggestion = "You may be experiencing some stress or emotional difficulties. Consider exploring self-care practices and talking to someone you trust.";
      resources = `
        <p>Here are some resources to help you:</p>
        <ul>
          <li><a href="https://www.example.com/teen-self-care" target="_blank">Teen Self-Care Tips</a></li>
          <li><a href="https://www.example.com/teen-mental-health" target="_blank">Teen Mental Health Resources</a></li>
        </ul>
      `;
    } else {
      suggestion = "You seem to be doing well! Keep up the good work and continue practicing healthy habits.";
      resources = `
        <p>Here are some resources to maintain your mental well-being:</p>
        <ul>
          <li><a href="https://www.example.com/teen-healthy-habits" target="_blank">Healthy Habits for Teens</a></li>
          <li><a href="https://www.example.com/teen-activities" target="_blank">Fun Activities for Teens</a></li>
        </ul>
      `;
    }
  }


  suggestionText.textContent = suggestion;
  resourcesDiv.innerHTML = resources;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  totalScore = 0;
  document.getElementById('result-container').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  showQuestion();
  updateProgressBar();
}

// Initialize the quiz
if (selectedSituation) {
  showQuestion();
} else {
  window.location.href = 'situation-selection.html'; // Redirect if no situation is selected
}
