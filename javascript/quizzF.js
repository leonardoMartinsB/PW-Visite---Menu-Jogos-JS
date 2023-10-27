const quizData = [
    {
        pergunta: "Qual é o maior planeta do Sitema Solar",
        a: "Saturno",
        b: "Vênus",
        c: "Netuno",
        d: "Jupiter",
        correta: "d",
    },
    {
        pergunta: "Quem pintou a (Mona Lisa) ?",
        a: "Vicent Van Gohg",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correta: "c",
    },
    {
        pergunta: "Qual é o maior Oceano do mundo?",
        a: "Oceano Pacífico ",
        b: "Oceano Atlântica ",
        c: "Oceano Índico",
        d: "Oceano Ártico ",
        correta: "a",
    },
    {
        pergunta: "Quem escreveu ( Romeu e Julieta) ?",
        a: "Charles Dickens",
        b: "William Shakespear",
        c: "Jane Austen",
        d: "F.Scott Fitzgerald",
        correta: "b",
    },
       {
        pergunta: "Qual é o símbolo químico do ouro?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Hg",
        correta: "a",
    },
      {
        pergunta: "Qual é a capital da Italia?",
        a: "Paris",
        b: "Madrid",
        c: "Roma",
        d: "Berlin",
        correta: "c",
    },
    {
        pergunta: "Quem foi o primeiro presidente dos estados unidos?",
        a: "Thomas Jefferson",
        b: "Abraham Lincoln",
        c: "Jhon F. Kennedy",
        d: "George Washington",
        correta: "d",
    },
    {
        pergunta: "Qual é a cor do sangue humano quando está oxigenado",
        a: "Roxo",
        b: "Vermelho",
        c: "Azul",
        d: "Verde",
        correta: "b",
    },
    {
        pergunta: "Qual é o maior órgão do corpo humano ?",
        a: "Pele",
        b: "Coração",
        c: "Cerebro",
        d: "Pulmão",
        correta: "a",
    },
    {
        pergunta: "Qual é o planeta mais próximo do Sol?",
        a: "Vênus",
        b: "Marte",
        c: "Mercúrio",
        d: "Netuno",
        correta: "c",
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
