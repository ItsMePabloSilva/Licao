document.getElementById('baixarLicao').addEventListener('click', () => {
    const data = document.getElementById('dataSelecionada').value;

    // Exibir mensagem caso nenhuma data seja selecionada
    if (!data) {
        exibirMensagem("Por favor, selecione uma data!", "red");
        return;
    }

    // Formatar o nome do arquivo baseado na data selecionada
    const arquivo = `downloads/${data}.pdf`;

    // Verificar se o arquivo existe
    fetch(arquivo)
        .then(response => {
            if (response.ok) {
                // Se o arquivo existir, redireciona para o download
                window.location.href = arquivo;
            } else {
                // Caso o arquivo não exista
                exibirMensagem("Lição indisponível para a data selecionada.", "red");
            }
        })
        .catch(() => {
            // Exibir mensagem de erro genérico
            exibirMensagem("Erro ao verificar a lição. Tente novamente mais tarde.", "red");
        });
});

// Função para exibir mensagens
function exibirMensagem(texto, cor) {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = texto;
    mensagem.style.color = cor;
    mensagem.classList.remove('hidden');
      }
