const quizData = [{
        question: '1) Что случилось с Энакином Скайуокером во время битвы с графом Дуку?',
        a: 'Он потерял левую ногу',
        b: 'Он потерял правую руку',
        c: 'Он потерял правую ногу',
        d: 'Он потерял левую руку',
        correct: 'b'
    }, {
        question: '2) Кто играл роль командира Коди?',
        a: 'Джей Лагайя',
        b: 'Темуэра Моррисон',
        c: 'Ахмед Бест',
        d: 'Джоэл Эдгертон',
        correct: 'b'
    }, {
        question: '3) Что Люк Скайуокер потерял в битве с Дартом Вейдером',
        a: 'Он потерял левую ногу',
        b: 'Он потерял правую руку',
        c: 'Он потерял правую ногу',
        d: 'Он потерял левую руку',
        correct: 'b'
    }, {
        question: '4) По словам Императора, в чем заключалась слабость Люка Скайуокера?',
        a: 'Его вера в светлую сторону силы',
        b: 'Его вера в своих друзей',
        c: 'Его отсутствие видения',
        d: 'Его сопротивление Темной стороне Силы',
        correct: 'b'
    }, {
        question: '5) Где начались Войны клонов?',
        a: 'Татуин',
        b: 'Геонозис',
        c: 'Набу',
        d: 'Корусант',
        correct: 'b'
    }, {
        question: '6) В каком фильме из «Звездных войн» есть такая цитата: «Я участвовал в этой битве с шести лет!»',
        a: 'Звездные войны: новая надежда',
        b: 'Звездные войны: Восхождение Скайуокера',
        c: 'Разбойник One: Star Wars история',
        d: 'Соло: история звездных войн',
        correct: 'c'
    }, {
        question: '7) Чем Джар Джар Бинкс в конечном итоге обязан Куай-Гону Джинну после того, как тот же спас его во время вторжения на Набу?',
        a: 'Поездка в Ото Гунга',
        b: 'Бонго',
        c: 'Долг чести',
        d: '9,000 кредитов',
        correct: 'c'
    }, {
        question: '8) Что Оуэн Ларс рассказал Люку Скайуокеру о своем отце?',
        a: 'Он был рыцарем-джедаем',
        b: 'Он был лордом ситхов',
        c: 'Он был штурманом на грузовом судне специй',
        d: 'Он был летчиком-истребителем',
        correct: 'c'
    }, {
        question: '9) Кто сказал эту цитату: «Я предпочитаю жить для своего народа».',
        a: 'Падме Амидала',
        b: 'Риё Чучи',
        c: 'Королева Джамилия',
        d: 'Гера Синдулла',
        correct: 'b'
    }, {
        question: '10) Какое оружие предпочитает Чубакка?',
        a: 'Бластерная винтовка',
        b: 'Лазерный меч',
        c: 'Металлическая дубина',
        d: 'Энергетический арбалет',
        correct: 'd'
    }

];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// js

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    // chek to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onClick="location.reload();">Reload</button>`


        }
    }

});