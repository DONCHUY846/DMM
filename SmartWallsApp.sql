CREATE TABLE Casas (
  id_casas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuarios_id_usuario INTEGER NOT NULL,
  nombre_casa VARCHAR(255) NULL,
  domicilio VARCHAR(255) NULL,
  cp VARCHAR(20) NULL,
  PRIMARY KEY(id_casas),
  INDEX Casas_FKIndex1(usuarios_id_usuario)
);

CREATE TABLE Casas_has_espacios (
  Casas_id_casas INTEGER UNSIGNED NOT NULL,
  espacios_id_espacio INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Casas_id_casas, espacios_id_espacio),
  INDEX Casas_has_espacios_FKIndex1(Casas_id_casas),
  INDEX Casas_has_espacios_FKIndex2(espacios_id_espacio)
);

CREATE TABLE Casas_has_modos (
  Casas_id_casas INTEGER UNSIGNED NOT NULL,
  modos_id_modos INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Casas_id_casas, modos_id_modos),
  INDEX Casas_has_modos_FKIndex1(Casas_id_casas),
  INDEX Casas_has_modos_FKIndex2(modos_id_modos)
);

CREATE TABLE espacios (
  id_espacio INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  cantidad_leds INTEGER NULL,
  cantidad_muros INTEGER NULL,
  PRIMARY KEY(id_espacio)
);

CREATE TABLE modos (
  id_modos INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  modo_iniciado VARCHAR(255) NULL,
  fecha_movimiento DATE NULL,
  hora_movimiento DATE NULL,
  PRIMARY KEY(id_modos)
);

CREATE TABLE usuarios (
  id_usuario INTEGER NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NULL,
  apellidop VARCHAR(50) NULL,
  apellidom VARCHAR(50) NULL,
  telefono VARCHAR(50) NULL,
  correo VARCHAR(255) NULL,
  edad INTEGER(5) NULL,
  contrasena VARCHAR(255) NULL,
  tipo_usuario VARCHAR(255) NULL,
  PRIMARY KEY(id_usuario)
);


