const botao = document.getElementById('botao')

botao.addEventListener("click", () => {
    exibeNaTela()
});


function exibeNaTela(){
    const nome = document.getElementById("nomeInput").value

    document.body.innerHTML = `
    <div class="agredecimento">
        <div class="agradecimento-texto">
            <img src="medalha2.jpg" alt="Foto da medalha" class="imagem">
            <h1 class="titulo-parabens">Parabéns!</h1>
            <h2 class="nomeDaPessoa">${nome.toUpperCase()}</h2>
            <p class="texto">VOCÊ PARTICIPOU DO TREINAMENTO DO APLICATIVO HEADSPACE</p>
        </div>

        <div class="link-container">
            <p class="button-info">
                CLICK NO BOTÃO ABAIXO PARA AVALIAR O TREINAMENTO
            </p>
            <a href="https://forms.gle/sUybYcHKw4wr5pJY9" class="link" target="_blank">AVALIE AQUI</a>
        </div>
       
    </div>
`
}