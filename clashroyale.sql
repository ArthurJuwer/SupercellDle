USE supercelldle;
DROP TABLE clashroyale;

CREATE TABLE clashroyale (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    genero VARCHAR(20),
    tipo VARCHAR(50),
    raridade VARCHAR(30),
    elixir INT,
    lancamento INT,
    arena VARCHAR(100),
    ataque VARCHAR(30)
);

INSERT INTO clashroyale 
(nome, genero, tipo, raridade, elixir, lancamento, arena, ataque) VALUES
("Cavaleiro", "Masculino", "Tropa", "Comum", 3, 2016, "Treinamento", "Corpo a corpo"),
("Arqueiras", "Feminino", "Tropa", "Comum", 3, 2016, "Treinamento", "À distância"),
("Gigante", "Masculino", "Tropa", "Raro", 5, 2016, "Treinamento", "Estruturas"),
("Bebê Dragão", "Masculino", "Tropa", "Épico", 4, 2016, "Arena 2 - Fosso dos Ossos", "Área"),
("Mago", "Masculino", "Tropa", "Raro", 5, 2016, "Arena 5 - Vale dos Feitiços", "Área"),
("Mosqueteira", "Feminino", "Tropa", "Raro", 4, 2016, "Arena 1 - Estádio Goblin", "Único"),
("P.E.K.K.A", "Feminino?", "Tropa", "Épico", 7, 2016, "Arena 4 - Parque da P.E.K.K.A", "Corpo a corpo"),
("Lenhador", "Masculino", "Tropa", "Lendário", 4, 2016, "Arena 8 - Pico Congelado", "Corpo a corpo");

SELECT * FROM clashroyale;
