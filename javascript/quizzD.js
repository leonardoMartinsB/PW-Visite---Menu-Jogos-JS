const quizData = [
    {
        pergunta: "Quem foi a única pessoa na história a receber o Prêmio Nobel em áreas científicas diferentes?",
        a: "Albert Einstein",
        b: "Linus Pauling",
        c: "Stephen Hawking",
        d: "Marie Curie",
        correta: "d",
    },
    {
        pergunta: "Qual o país mais novo do mundo",
        a: "Timor Leste",
        b: "Sudão do Sul",
        c: "Montenegro",
        d: "Kosovo",
        correta: "b",
    },
    {
        pergunta: "Quem foi a primeira mulher a viajar para o espaço?",
        a: "Valentina Tereshkova",
        b: "Sally Ride",
        c: "Mae Jemison",
        d: "Kathryn D. Sullivan",
        correta: "a",
    },
    
     {
        pergunta: "Quantos pares de costelas um ser humano, normalmente, possui?",
        a: "12",
        b: "36",
        c: "15",
        d: "9",
        correta: "a",
    },
    
      {
        pergunta: "Que país sediará os jogos olímpicos de 2024?",
        a: "Nova Zelândia",
        b: "Canadá",
        c: "Egito",
        d: "França",
        correta: "d",
    },
    
    
      {
        pergunta: "Qual animal produz o som mais alto?",
        a: "Bugio",
        b: "Leão",
        c: "Baleia azul",
        d: "Elefante africano",
        correta: "c",
    },
    
      {
        pergunta: "Em que ano os filmes deixaram de ser mudos?",
        a: "1927",
        b: "1880",
        c: "1977",
        d: "2005",
        correta: "a",
    },
    
    {
        pergunta: "De quem é a famosa frase (Penso, logo existo)",
        a: "Platão",
        b: "Descartes",
        c: "Galileu Galilei",
        d: "Sócrates",
        correta: "b",
    },
    
      
    {
        pergunta: "qual o nome do presidente do brasil que ficou conhecido como Jango?)",
        a: "Jânio Quadros",
        b: "Getúlio Vargas",
        c: "Jacinto Anjos",
        d: "João Goulart",
        correta: "d",
    },
    
    {
        pergunta: "Qual o lugar mais profundo dos oceanos?",
        a: "Fossa de Tonga",
        b: "Fossa de Java",
        c: "Fossa das Marianas",
        d: "Fossa das Ilhas Sandwich",
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
