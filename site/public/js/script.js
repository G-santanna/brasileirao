function buscar() {

  const url = "https://api.api-futebol.com.br/v1/partidas/1";

  const options = {
    headers: {
      Authorization: "Bearer test_16e13b0fd7f93144172da00e11684a",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data));
}


function cadastrarCampeonatoTime(){

    var campeonato = input_nomeCampeonato.value;
    var patrocinador = input_patrocinador.value;
    var premiacao = input_premiacao.value;


    var rodadas = Number(input_numeroRodadas.value)
    var times = txt_times.value.split(',')

    fetch("/cbf/cadastrarCampTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campeonatoFront: campeonato,
          patrocinadorFront: patrocinador,
          premiacaoFront: premiacao,
          rodadasFront: rodadas,
          timesFront: times
        }),
      }).then(function (resposta){
          if(resposta.status == 200){
             
          } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
          }
      })
      .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
