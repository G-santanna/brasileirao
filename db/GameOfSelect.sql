CREATE DATABASE gameOfSelects;

USE gameOfSelects;

CREATE TABLE Team
(
	idTime int primary key auto_increment,
    nome varchar(45),
    fundacao YEAR,
    cidade varchar(45),
    estado varchar(45),
    patrocinador varchar(45)
);

CREATE TABLE campeonato
(
	idCampeonato int primary key auto_increment,
    nome varchar(45),
    patrocinador varchar(45),
    premiacao float
);

CREATE TABLE rodada
(
	idRodada int,
    fkCampeonato int,
    dateHora datetime,
    
    primary key (idRodada, fkCampeonato),
    foreign key (fkCampeonato) references campeonato (idCampeonato)
);

CREATE TABLE jogo
(
	idJogo int,
    idRodada int,
    idCampeonato int,
    idTime int,
    
    primary key( idJogo, idRodada, idCampeonato, idTime)
);

CREATE TABLE jogador
(
	idJogador int primary key,
    nome varchar(45),
    salario float,
    fkTime int,
    fkTecnico int,
    
    foreign key (fkTime) references team (idTime),
    foreign key (fkTecnico) references jogador (idJogador)
);

CREATE TABLE sumula
(
	fkSumulaJogador int,
    gol int,
    assistencia int,
    cartaoAmarelo int,
    cartaoVermelho int,
    fkSumulaJogo int,
    fkSumulaRodada int,
    fkSumulaCampeonato int,
    fkSumulaTime int,
    
    primary key (fkSumulaJogador, fkSumulaJogo, fkSumulaRodada, fkSumulaCampeonato, fkSumulaTime)
);

create user 'cbf'@'localhost' identified by '87mengao';
grant all privileges on gameOfSelects.* to 'cbf'@'localhost';
flush privileges;