function cadastrarTime(leagueId, season) {
  fetch(
    `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "09ad792b4d63c63d02ca686948a536a5",
      },
    }
  )
    .then((response) => {
      response.json().then((resposta) => {
        console.log(resposta);
        console.log(resposta.response);
        fetch("/cbf/cadastrarTime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            times: resposta.response,
          }),
        })
          .then(function (resposta) {
            if (resposta.status == 200) {
            } else {
              throw "Houve um erro ao tentar realizar o cadastro!";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function cadastrarCampeonatoTime() {
  var campeonato = input_nomeCampeonato.value;
  var patrocinador = input_patrocinador.value;
  var premiacao = input_premiacao.value;

  var rodadas = Number(input_numeroRodadas.value);

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
      // timesFront: times
    }),
  })
    .then(function (resposta) {
      if (resposta.status == 200) {
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function cadastrarJogador() {
  fetch("/cbf/cadastrarJogador", {
    method: "GET",
  }).then(function (resposta) {
    if (resposta.status == 200) {
      resposta.json().then((json) => {
        // console.log(json)
        for (let i = 0; i < json.length; i++) {
          const time = json[i];
          
          
        }
      });


    } else {
      console.log("Houve um erro ao tentar realizar o login!");

      resposta.text().then((texto) => {
        console.error(texto);
      });
    }
  });
}

function buscarJogadores(){
  fetch(
    `https://v3.football.api-sports.io/players?league=71&season=2023`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "09ad792b4d63c63d02ca686948a536a5",
      },
    }
  )
    .then((response) => {
      response.json().then((resposta) => {
        // console.log(resposta);
        console.log(resposta.response);

      });
    })
    .catch((err) => {
      console.log(err);
    });
}


function buscarCampeonatos(){
  fetch("/cbf/buscarCampeonatos", {
    method: "GET",
  }).then(function (resposta) {
    if (resposta.status == 200) {
      resposta.json().then((json) => {
        for (let i = 0; i < json.length; i++) {
          input_camp.innerHTML += `
            <option value="${json[i].id}">${json[i].nome}</option>
          `
        }
        buscarRodadas(input_camp.value)
      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");

      resposta.text().then((texto) => {
        console.error(texto);
      });
    }
  });
}


function buscarRodadas(idCamp){
  fetch(`/cbf/buscarRodadas/${idCamp}`, {
    method: "GET",
  }).then(function (resposta) {
    if (resposta.status == 200) {
      resposta.json().then((json) => {
        for (let i = 0; i < json.length; i++) {
          input_rodadas.innerHTML += `
            <option value="${json[i].id}">${json[i].id}</option>
          `
        }
        alimentarJogos()
      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");

      resposta.text().then((texto) => {
        console.error(texto);
      });
    }
  });
}

function alimentarJogos(){
   fetch(`/cbf/buscarTimes`, {
    method: "GET",
  }).then(function (resposta) {
    if (resposta.status == 200) {
      resposta.json().then((json) => {
        var selectTimes = document.querySelectorAll('#jogos>div>select')
        for (let i = 0; i < selectTimes.length; i++) {
          selectTimes[i].innerHTML = ``
        }

        for (let i = 0; i < selectTimes.length; i++) {
          selectTimes[i].innerHTML += `
            <option value=""></option>
            `
          for (let y = 0; y < json.length; y++) {
            const time = json[y];
            selectTimes[i].innerHTML += `
            <option value="${time.id}">${time.nome}</option>
            `
          }
        }
      });
    } else {
      console.log("Houve um erro ao tentar realizar o login!");

      resposta.text().then((texto) => {
        console.error(texto);
      });
    }
  });
}

function cadastrarJogos(){

  var divJogo = document.querySelectorAll('#jogos>div');
  var jogos = []

  for (let i = 0; i < divJogo.length; i++) {
    var jogo = {
      mandante: divJogo[i].children[0].value,
      visitante: divJogo[i].children[1].value
    }
    jogos.push(jogo)
  }

  fetch("/cbf/cadastrarJogos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      camp: input_camp.value,
      rodada: input_rodadas.value,
      jogos
    }),
  })
    .then(function (resposta) {
      if (resposta.status == 200) {
        var selectTimes = document.querySelectorAll('#jogos>div>select')

        for (let i = 0; i < selectTimes.length; i++) {
          selectTimes[i].innerHTML = `
            <option value=""></option>
            `
        }
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

