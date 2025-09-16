USE supercelldle;
DROP TABLE clashroyale;

CREATE TABLE clashroyale (
	id INT AUTO_INCREMENT PRIMARY KEY,
    foto TEXT,
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
(nome, foto, genero, tipo, raridade, elixir, lancamento, arena, ataque) VALUES
("Cavaleiro", "Knight", "Masculino", "Tropa", "Comum", 3, 2016, "Training Camp", "Corpo a corpo"),
("Arqueiras", "Archers", "Feminino", "Tropa", "Comum", 3, 2016, "Training Camp", "À distância"),
("Goblins", "Goblins", "Masculino", "Tropa", "Comum", 2, 2016, "Goblin Stadium", "Corpo a corpo"),
("Spear Goblins", "SpearGobs", "Masculino", "Tropa", "Comum", 2, 2016, "Goblin Stadium", "À distância"),
("Mini P.E.K.K.A", "MP", "Masculino", "Tropa", "Raro", 4, 2016, "Training Camp", "Corpo a corpo"),
("Mosqueteira", "Musk", "Feminino", "Tropa", "Raro", 4, 2016, "Training Camp", "À distância"),
("Giant", "Giant", "Masculino", "Tropa", "Raro", 5, 2016, "Training Camp", "Ataque de edifício"),
("Príncipe", "Prince", "Masculino", "Tropa", "Épico", 5, 2016, "Training Camp", "Corpo a corpo"),
("Bruxa", "Witch", "Feminino", "Tropa", "Épico", 5, 2016, "Training Camp", "À distância"),
("Bebê Dragão", "BabyD", "Masculino", "Tropa", "Épico", 4, 2016, "Training Camp", "Área (Aéreo)"),
("Valkíria", "Valkyrie", "Feminino", "Tropa", "Raro", 4, 2016, "Goblin Stadium", "Área (Corpo a corpo)"),
("Arqueiro Mágico", "MagicArcher", "Masculino", "Tropa", "Lendária", 4, 2018, "Rascal's Hideout", "À distância"),
("Princesa", "Princess", "Feminino", "Tropa", "Lendária", 3, 2016, "Goblin Stadium", "À distância"),
("Mago", "Wizard", "Masculino", "Tropa", "Raro", 5, 2016, "Spell Valley", "Área (À distância)"),
("Zap", "Zap", "Neutro", "Feitiço", "Comum", 2, 2017, "Spell Valley", "Instantâneo"),
("Fogo", "Fireball", "Neutro", "Feitiço", "Raro", 4, 2016, "Training Camp", "Área"),
("Lava Hound", "Lava", "Masculino", "Tropa", "Lendária", 7, 2016, "P.E.K.K.A's Playhouse", "Aéreo"),
("Golem", "Golem", "Neutro", "Tropa", "Épico", 8, 2016, "Builder's Workshop", "Corpo a corpo");

SELECT * FROM clashroyale;
