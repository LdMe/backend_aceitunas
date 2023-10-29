USE aceitunas;
INSERT INTO aceituna (tipo,peso)
VALUES
("manzanilla",50),("gordal",100),("arbequina",15),("kalamata",40);

INSERT INTO ciudad (nombre)
VALUES ("Bilbado"),("Barcelona"),("Mandril"),("Jaen"),("Guarroman"),("Basauri");



INSERT INTO torneo (nombre,fecha,aceituna_id,ciudad_id)
VALUES 
("XVI Gran Premio de Guarroman de lanzamiento de hueso de aceituna","2023-11-19",1,5),
("i campeonato mundial de lanzamiento de hueso de aceituna","2024-06-15",1,1),
("gran premio de aceitunas doradas","2022-08-27",2,2),
("campeonato nacional de lanzamiento de aceitunas rellenas","2023-03-10",3,3),
("torneo regional de aceitunas verdes","2021-11-02",1,4),
("campeonato internacional de lanzamiento de hueso de aceituna","2025-09-18",4,5),
("torneo de lanzamiento de aceituna negra","2022-05-30",1,6),
("xviii copa de aceitunas de temporada","2023-07-11",2,1),
("torneo nacional de lanzamiento de aceitunas sin hueso","2024-02-04",3,2),
("gran premio de aceitunas de variedad arbequina","2022-10-22",4,3);

INSERT INTO jugador (nombre,apellido,email,fecha_nacimiento,ciudad_id)
VALUES 
("Peter","La Anguila","peter.languila@gmail.com","1990-02-21",6),
("Angela","Merke","angelamerke@mail.com","1950-05-23",3),
("john","doe","john.doe@example.com","1985-09-15",5),
("maria","lopez","marialopez@mail.com","1995-07-10",2),
("pedro","gonzalez","pedro.gonzalez@mail.com","1978-12-30",4),
("laura","martinez","laura.martinez@mail.com","2000-03-05",3),
("carlos","ruiz","carlos.ruiz@mail.com","1992-11-18",1);


INSERT INTO partida (torneo_id)
VALUES (1),(1),(1),(2),(2),(2);


INSERT INTO partida_has_jugador (partida_id,jugador_id)
VALUES
(1,1),(1,2),(2,3),(2,4),(3,5),(3,6);


-- Buscar todos los jugadores que participen en el primer torneo
/*
SELECT jugador.jugador_id,jugador.nombre,jugador.apellido,TIMESTAMPDIFF(YEAR, jugador.fecha_nacimiento, CURDATE()) as edad, torneo.nombre, partida.partida_id,tirada.distancia
FROM jugador
JOIN partida_has_jugador as phj ON jugador.jugador_id=phj.jugador_id
JOIN partida ON phj.partida_id=partida.partida_id
JOIN torneo ON partida.torneo_id=torneo.torneo_id
JOIN tirada ON jugador.jugador_id=tirada.jugador_id AND partida.partida_id=tirada.partida_id;
*/

INSERT INTO tirada (partida_id,jugador_id,distancia)
VALUES 
(1,1,2),(1,2,5),
(2,3,8),(2,4,20),
(3,5,4),(3,6,12);


/*
SELECT MAX(tirada.distancia),partida.partida_id
FROM partida
JOIN partida_has_jugador as phj ON partida.partida_id=phj.partida_id
JOIN jugador ON phj.jugador_id=jugador.jugador_id
JOIN tirada ON partida.partida_id=tirada.partida_id AND jugador.jugador_id=tirada.jugador_id
GROUP BY partida.partida_id
;
*/

/*
SELECT jugador_id
FROM tirada
WHERE (distancia,partida_id) IN (
	SELECT MAX(tirada.distancia),partida.partida_id
	FROM partida
	JOIN partida_has_jugador as phj ON partida.partida_id=phj.partida_id
	JOIN jugador ON phj.jugador_id=jugador.jugador_id
	JOIN tirada ON partida.partida_id=tirada.partida_id AND jugador.jugador_id=tirada.jugador_id
	GROUP BY partida.partida_id
);
*/

-- funcion para actualizar ganador de partida
UPDATE partida
SET ganador_id = (
SELECT jugador_id
FROM tirada
WHERE tirada.partida_id = partida.partida_id
ORDER BY distancia DESC
LIMIT 1
)
, finalizada=1
WHERE partida.partida_id IN (
SELECT partida_id
FROM tirada)
;



-- funcion para guardar el ganador del torneo (ganador de la última partida)
UPDATE torneo
SET ganador_id = (
	SELECT ganador_id
    FROM partida
    WHERE partida.torneo_id=torneo.torneo_id
    ORDER BY partida.partida_id DESC LIMIT 1)
;



SELECT * FROM torneo;
    


