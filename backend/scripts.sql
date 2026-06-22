--as tabelas ficam aqui, para facilictar o acesso delas e as suas aplicações
BEGIN;


CREATE TABLE IF NOT EXISTS public.categorias
(
    id_categotia uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_categoria text COLLATE pg_catalog."default" NOT NULL,
    lote_categoria integer NOT NULL,
    setor_categoria character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categorias_pkey PRIMARY KEY (id_categotia)
);

CREATE TABLE IF NOT EXISTS public.equipamentos
(
    id_equipamento uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_equipamento text COLLATE pg_catalog."default" NOT NULL,
    quantidd_equipamento integer NOT NULL,
    equipamento_categoria character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT equipamentos_pkey PRIMARY KEY (id_equipamento, nome_equipamento, quantidd_equipamento)
);

CREATE TABLE IF NOT EXISTS public.funcionarios
(
    id_funcionario uuid NOT NULL,
    nome_funcionario character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    cargo character varying(50) COLLATE pg_catalog."default" NOT NULL,
    setor_funcionario character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT funcionarios_pkey PRIMARY KEY (id_funcionario)
);

CREATE TABLE IF NOT EXISTS public.setores
(
    id_setor uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome_setor text COLLATE pg_catalog."default" NOT NULL,
    categoria_setor uuid NOT NULL,
    CONSTRAINT setor_pkey PRIMARY KEY (id_setor)
);

ALTER TABLE IF EXISTS public.setores
    ADD CONSTRAINT fk_setor_categoria FOREIGN KEY (categoria_setor)
    REFERENCES public.categorias (id_categotia) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

END;