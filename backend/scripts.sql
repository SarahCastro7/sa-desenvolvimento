select * from categorias
select * from equipamentos
select * from funcionarios
select * from setores

CREATE TABLE IF NOT EXISTS categorias
(
    id_categoria uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_categoria text COLLATE pg_catalog."default" NOT NULL,
    lote_categoria integer NOT NULL,
    CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria)
);

CREATE TABLE IF NOT EXISTS setores
(
    id_setor uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_setor text COLLATE pg_catalog."default" NOT NULL,
    categoria_setor uuid NOT NULL,
    CONSTRAINT setor_pkey PRIMARY KEY (id_setor),
    CONSTRAINT setor_categoria_fkey FOREIGN KEY (categoria_setor)
        REFERENCES categorias (id_categoria)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS equipamentos
(
    id_equipamento uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_equipamento text COLLATE pg_catalog."default" NOT NULL,
    quantidade_equipamento integer NOT NULL DEFAULT 0,
    id_categoria uuid NOT NULL,
    id_setor uuid NOT NULL,
    CONSTRAINT equipamentos_pkey PRIMARY KEY (id_equipamento),
    CONSTRAINT fk_equipamento_categoria FOREIGN KEY (id_categoria)
        REFERENCES categorias (id_categoria) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT fk_equipamento_setor FOREIGN KEY (id_setor)
        REFERENCES setores (id_setor) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT chk_quantidade_nao_negativa CHECK (quantidade_equipamento >= 0)
);

CREATE TABLE IF NOT EXISTS funcionarios
(
    id_funcionario uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_funcionario character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    cargo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    setor_funcionario uuid NOT NULL,
    id_equipamento uuid NOT NULL,
    CONSTRAINT funcionarios_pkey PRIMARY KEY (id_funcionario),
    CONSTRAINT funcionarios_setor_fkey FOREIGN KEY (setor_funcionario)
        REFERENCES setores (id_setor)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT funcionarios_equipamento_fkey FOREIGN KEY (id_equipamento)
        REFERENCES equipamentos (id_equipamento)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
