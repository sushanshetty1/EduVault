const questions = [
    {
        question: "What is the SI unit of electric charge?",
        options: ["Ampere", "Coulomb", "Volt", "Ohm"],
        correctAnswer: "B"
    },
    {
        question: "According to Newton's law of motion, what is the relationship between force (F), mass (m), and acceleration (a)?",
        options: ["F = ma", "F = m/a", "F = m + a", "F = m - a"],
        correctAnswer: "A"
    },
    {
        question: "What is the phenomenon of a sound wave changing direction when it travels from one medium to another?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Time", "Velocity"],
        correctAnswer: "D"
    },
    {
        question: "In the context of optics, what is the process by which a lens brings parallel rays of light to a focus?",
        options: ["Refraction", "Diffraction", "Dispersion", "Convergence"],
        correctAnswer: "D"
    },
    {
        question: "What is the chemical symbol for the element gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "A"
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        correctAnswer: "C"
    },
    {
        question: "What is the pH of a neutral solution?",
        options: ["0", "7", "14", "10"],
        correctAnswer: "B"
    },
    {
        question: "What is the process of conversion of a substance from a gas to a liquid called?",
        options: ["Condensation", "Evaporation", "Sublimation", "Fusion"],
        correctAnswer: "A"
    },
    {
        question: "Which type of reaction involves the combination of a substance with oxygen?",
        options: ["Oxidation", "Reduction", "Combustion", "Precipitation"],
        correctAnswer: "C"
    },
    {
        question: "If a triangle has angles 30°, 60°, and 90°, what is the ratio of the length of the sides opposite to these angles?",
        options: ["1:1:√3", "√3:1:2", "1:√3:2", "2:√3:1"],
        correctAnswer: "A"
    },
    {
        question: "What is the derivative of the function f(x) = sin(x) with respect to x?",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        correctAnswer: "A"
    },
    {
        question: "If log₃(x) = 2, what is the value of x?",
        options: ["3", "6", "9", "27"],
        correctAnswer: "C"
    },
    {
        question: "What is the area of a circle with a radius of 5 units?",
        options: ["25π", "50π", "100π", "125π"],
        correctAnswer: "A"
    },
    {
        question: "In a geometric progression, if the first term is 3 and the common ratio is 2, what is the fifth term?",
        options: ["48", "24", "12", "6"],
        correctAnswer: "A"
    },
    {
        question: "What is the value of sin(π/4)?",
        options: ["0", "1", "√2/2", "√3/2"],
        correctAnswer: "C"
    },
    {
        question: "If a = 4 and b = 3, what is the value of √(a² + b²)?",
        options: ["5", "7", "8", "10"],
        correctAnswer: "A"
    },
    {
        question: "Solve the equation: 2x + 5 = 15",
        options: ["5", "7", "8", "10"],
        correctAnswer: "A"
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.15", "3.16", "3.17"],
        correctAnswer: "A"
    },
    {
        question: "If a quadratic equation has roots α and β, what is the sum of the roots (α + β)?",
        options: ["-b/a", "c/a", "-c/a", "b/a"],
        correctAnswer: "D"
    },
    {
        question: "What is the value of log₂(8)?",
        options: ["2", "3", "4", "8"],
        correctAnswer: "B"
    },
    {
        question: "If f(x) = 2x² - 3x + 1, what is the vertex of the parabola?",
        options: ["(1, 0)", "(-1, 0)", "(3/4, 5/4)", "(0, 1)"],
        correctAnswer: "A"
    },
    {
        question: "What is the value of cos(π/3)?",
        options: ["1/2", "√3/2", "1", "√2/2"],
        correctAnswer: "B"
    },
    {
        question: "If a dice is rolled, what is the probability of getting an even number?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correctAnswer: "C"
    },
    {
        question: "Solve the system of equations: 2x + y = 5, x - y = 1",
        options: ["x = 2, y = 3", "x = 1, y = 2", "x = 3, y = 2", "x = 2, y = 1"],
        correctAnswer: "A"
    },
    {
        question: "What is the integral of the function ∫(3x² - 2x + 1) dx?",
        options: ["x³ - x² + x + C", "x³ - x² + C", "x² - x + C", "x² + x + C"],
        correctAnswer: "A"
    },
    {
        question: "Solve the inequality: 2x - 5 < 7",
        options: ["x < 6", "x < 6/2", "x > 6", "x > 6/2"],
        correctAnswer: "A"
    },
    {
        question: "What is the value of 2⁴ × 2³?",
        options: ["2⁷", "2¹²", "2¹", "2⁶⁴"],
        correctAnswer: "A"
    },
    {
        question: "If a² + b² = 25, and a > 0 and b < 0, what is the possible value for a?",
        options: ["5", "-5", "3", "-3"],
        correctAnswer: "A"
    },
    {
        question: "In a right-angled triangle, if one acute angle is 30°, what is the measure of the other acute angle?",
        options: ["45°", "60°", "90°", "120°"],
        correctAnswer: "B"
    },
];


// Your questions array goes here

let score = 0;
let currentQuestion = 0;
let shuffledQuestions = [];

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    shuffledQuestions = shuffleArray(questions).slice(0, 10);
    nextQuestion();
}

function nextQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");
    const nextBtn = document.getElementById("next-btn");
    const skipBtn = document.getElementById("skip-btn");

    if (currentQuestion < shuffledQuestions.length) {
        const questionData = shuffledQuestions[currentQuestion];

        questionContainer.innerHTML = `<p>${questionData.question}</p>`;

        optionsContainer.innerHTML = '';
        questionData.options.forEach((option, index) => {
            optionsContainer.innerHTML += `
                <label>
                    <input type="radio" name="question" value="${String.fromCharCode(65 + index)}">
                    ${option}
                </label>
            `;
        });

        nextBtn.style.display = "none";
        skipBtn.style.display = "block";

        resultContainer.innerHTML = '';

        optionsContainer.addEventListener('change', function () {
            nextBtn.style.display = "block";
            skipBtn.style.display = "none";
        });
    } else {
        questionContainer.innerHTML = '';
        optionsContainer.innerHTML = '';
        nextBtn.style.display = "none";
        skipBtn.style.display = "none";
        resultContainer.innerHTML = `<p>Your Final Score: ${score}</p>`;
        showCustomOutput(); // Show custom output when the quiz ends

        // Recommend colleges based on the score
        recommendColleges(score);
    }
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="question"]:checked');

    if (selectedOption) {
        if (selectedOption.value === shuffledQuestions[currentQuestion].correctAnswer) {
            score += 4; // Correct answer, add 4 points
        } else {
            score -= 1; // Incorrect answer, deduct 1 point
        }

        currentQuestion++;
        nextQuestion();
    }
}

function skipQuestion() {
    currentQuestion++;
    nextQuestion();
}

function showCustomOutput() {
    // Show your custom output at regular intervals
    let intervalCounter = 1;
    const resultInterval = setInterval(function () {
        if (intervalCounter <= 3) {
            console.log(`Custom output for interval ${intervalCounter}`);
            // You can display the output on the webpage or perform any other action
        } else {
            clearInterval(resultInterval); // Stop the interval after three iterations
        }
        intervalCounter++;
    }, 5000); // 5000 milliseconds = 5 seconds
}

function recommendColleges(score) {
    // College suggestions based on the score range
    const suggestions = {
        '<0': ["Insufficient Score, Study Hard!!!"],
        '0-5': ["Guru Gobind Singh Indraprastha University (GGSIPU) Affiliated Colleges", "Osmania University College of Engineering (OUCE), Hyderabad ", "Shivaji University Affiliated Colleges"],
        '6-10': ["Anna University Affiliated Colleges", "Rajasthan Technical University (RTU) Affiliated College", "Pondicherry University College of Engineering "],
        '11-15': ["Jaya Engineering College (JEC), Chennai", "Dr. K. N. Modi Engineering College, Modinagar", "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad"],
        '16-20': ["CMR Institute of Technology (CMRIT), Bangalore", "Priyadarshini College of Engineering (PCE), Nagpur", "Swami Vivekananda Institute of Science and Technology (SVIST), Kolkata"],
        '21-25': ["Hindustan Institute of Technology and Science (HITS), Chennai", "Bapuji Institute of Engineering and Technology (BIET), Davangere", "Global Institute of Engineering and Technology (GIET), Vellore"],
        '26-30': ["Haldia Institute of Technology (HIT), West Bengal", "College of Engineering and Technology (CET), Bhubaneswar", "Eastern Institute for Integrated Learning in Management (EIILM) University, Sikkim"],
        '31-35': ["St. Stephen's College, Delhi", "Lady Shri Ram College for Women, Delhi", "Hindu College, Delhi"],
        '36-39': ["BITS Pilani (Birla Institute of Technology and Science)", "Indian Statistical Institute (ISI), Kolkata", "Jawaharlal Nehru University (JNU)"],
        '40': ["Scoring full marks is a remarkable feat that reflects not only your intelligence but also your unwavering commitment to excellence.You can certainly try for IIT's."]
    };

    // Determine the score range
    let range = '';
    if (score >= 0 && score <= 5) {
        range = '0-5';
    } else if (score >= 6 && score <= 10)          
    {
        range = '6-10';
    } else if (score < 0) 
    {
        range = '<0';

    } else if (score >= 11 && score <= 15) {
        range = '11-15';
    } else if (score >= 16 && score <= 20) {
        range = '16-20';
    } else if (score >= 21 && score <= 25) {
        range = '21-25';
    } else if (score >= 26 && score <= 30) {
        range = '26-30';
    } else if (score >= 31 && score <= 35) {
        range = '31-35'; 
    } else if (score >= 36 && score <= 39) {
        range = '36-39';   
    } else {
        range = '40';
    }

    // Display only one college recommendation on the webpage
    const suggestedColleges = suggestions[range];
    const randomIndex = Math.floor(Math.random() * suggestedColleges.length);
    const selectedCollege = suggestedColleges[randomIndex];

    document.getElementById("result").innerHTML += `<p>Consider this college: ${selectedCollege}</p>`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
