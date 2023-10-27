
    function mostrarAlertaSucesso(mensagem) {
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert", "alert-success");
        alertDiv.textContent = mensagem;
        document.querySelector(".container").appendChild(alertDiv);

        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 3000);
    }

     function mostrarAlertaErro(mensagem) {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
}

    function reiniciarJogo() {
        document.querySelectorAll('input[name^="op"]').forEach(input => {
            input.checked = false;
        });
        document.getElementById("resultadoDiv").style.display = "none";

        // Rolagem automática para o topo da página
        window.scrollTo(0, 0);
    }

    function respostas() {
        const tabelas = ['op1', 'op2', 'op3', 'op4', 'op5'];
        let todasTabelasPreenchidas = true;

        for (const tabela of tabelas) {
            if (!peloMenosUmInputSelecionado(tabela)) {
                todasTabelasPreenchidas = false;
                mostrarAlertaErro(`Por favor, complete a tabela ${tabela} com 'Sim' ou 'Não' antes de verificar o resultado.`);
                break;
            }
        }

        if (todasTabelasPreenchidas) {
            let acertos = 0;

            for (const tabela of tabelas) {
                const valorSelecionado = obterValorSelecionado(tabela);
                if (valorSelecionado === 'Sim') {
                    const numeroTabela = parseInt(tabela.slice(2));
                    acertos += Math.pow(2, numeroTabela - 1);
                }
            }

            if (acertos > 0) {
                document.getElementById("resultadoNumero").textContent = acertos;
                document.getElementById("resultadoDiv").style.display = "block";

                // Rolagem automática para o resultado
                window.scrollTo(0, document.getElementById("resultadoDiv").offsetTop);
            } else {
                mostrarAlertaErro("Você não escolheu nenhuma carta");
            }
        }
    }

    function peloMenosUmInputSelecionado(name) {
        const inputs = document.querySelectorAll(`input[name="${name}"]`);
        for (const input of inputs) {
            if (input.checked) {
                return true;
            }
        }
        return false;
    }

    function obterValorSelecionado(name) {
        const inputSelecionado = document.querySelector(`input[name="${name}"]:checked`);
        if (inputSelecionado) {
            return inputSelecionado.value;
        } else {
            return "Não";
        }
    }

    document.getElementById("verificar").addEventListener("click", respostas);
    document.querySelector('a[href="../pages/AdivinhaNumero.html"]').addEventListener("click", reiniciarJogo);    