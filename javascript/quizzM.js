const quizData = [
    {
        pergunta: "Qual é a montanha mais alta do mundo? ",
        a: "Pico da Neblina",
        b: "Mauna Kea",
        c: "Monte Everest",
        d: "Monte Chimborazo",
        correta: "c",
    },
    {
        pergunta: "Qual pais tem a forma de uma bota?",
        a: "Belgica",
        b: "Cazaquistão",
        c: "Chile ",
        d: "Itália",
        correta: "d",
    },
    {
        pergunta: "Quem inventou a lâmpada?",
        a: "Thomas Edison",
        b: "Nikola Tesla",
        c: "Steve Jobs",
        d: "Santos Dumont",
        correta: "a",
    },
    {
        pergunta: "Quanto tempo a terra demora para dar uma volta completa em torno dela mesma?",
        a: "24 horas",
        b: "365 dias",
        c: "7 dias",
        d: "31 dias",
        correta: "a",
    },
      {
        pergunta: "Quantos ossos um ser humano tem? ",
        a: "126",
        b: "206",
        c: "18",
        d: "314",
        correta: "b",
    },
    {
        pergunta: "Quantos continentes existem?",
        a: "9",
        b: "12",
        c: "6",
        d: "4",
        correta: "c",
    },
    {
        pergunta: "Qual é a maior floresta tropical do mundo?",
        a: "Mata Atlântica",
        b: "Pantanal",
        c: "Deserto",
        d: "Floresta amazônica",
        correta: "d",
    },
    {
        pergunta: "Qual monumento é famoso por sua inclinação?",
        a: "Torre de pisa",
        b: "Esfinge",
        c: "Estatua da Liberdade",
        d: "Torre Eiffel",
        correta: "a",
    },
    {
        pergunta: "Qual o nome popular do cloreto de sódio",
        a: "Vinagre",
        b: "Sal de Cozinha",
        c: "Fermento",
        d: "Água",
        correta: "b",
    },
    {
        pergunta: "Qual é o elemento com mais abundância na terra?",
        a: "Enxofre",
        b: "Oxigênio",
        c: "Ouro",
        d: "Silício",
        correta: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;


carregarQuiz();

function carregarQuiz() {
    deselecionarRespostas();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = (currentQuiz + 1) + ". " + currentQuizData.pergunta;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselecionarRespostas() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelecionada() {
    let resposta;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            resposta = answerEl.id;
        }
    });
    return resposta;
}

submitBtn.addEventListener('click', () => {
    const resposta = getSelecionada();
    if (resposta) {
        if (resposta === quizData[currentQuiz].correta) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            carregarQuiz();
        } else {
            quiz.innerHTML = `
           <h2>Você respondeu ${score}/${quizData.length} perguntas corretamente</h2>
           <button style="background-color: #03cae4; color: white;" onclick="location.reload()">Recarregar</button>
<button style="background-color: #E70E02; color: white;" onclick="window.location.href='../pages/Quizz1.html'">Voltar ao Menu</button>
`;
        }
    }
});
