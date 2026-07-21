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


-- CATEGORIAS
INSERT INTO categorias (id_categoria, nome_categoria, lote_categoria) VALUES
('11111111-1111-1111-1111-111111111111', 'Informática', 1),
('22222222-2222-2222-2222-222222222222', 'Mobiliário', 2),
('33333333-3333-3333-3333-333333333333', 'Eletrodomésticos', 3);

-- SETORES
INSERT INTO setores (id_setor, nome_setor, categoria_setor) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'TI', '11111111-1111-1111-1111-111111111111'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Administrativo', '22222222-2222-2222-2222-222222222222'),
('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Cozinha', '33333333-3333-3333-3333-333333333333');

-- EQUIPAMENTOS
INSERT INTO equipamentos (id_equipamento, nome_equipamento, quantidade_equipamento, id_categoria, id_setor) VALUES
('e1111111-e111-e111-e111-e11111111111', 'Notebook Dell', 10, '11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
('e2222222-e222-e222-e222-e22222222222', 'Mesa de escritório', 15, '22222222-2222-2222-2222-222222222222', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'),
('e3333333-e333-e333-e333-e33333333333', 'Microondas', 3, '33333333-3333-3333-3333-333333333333', 'cccccccc-cccc-cccc-cccc-cccccccccccc');

-- FUNCIONARIOS
INSERT INTO funcionarios (id_funcionario, nome_funcionario, email, cargo, setor_funcionario, id_equipamento) VALUES
('f1111111-f111-f111-f111-f11111111111', 'João Silva', 'joao.silva@empresa.com', 'Analista de TI', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'e1111111-e111-e111-e111-e11111111111'),
('f2222222-f222-f222-f222-f22222222222', 'Maria Souza', 'maria.souza@empresa.com', 'Assistente Administrativo', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'e2222222-e222-e222-e222-e22222222222'),
('f3333333-f333-f333-f333-f33333333333', 'Carlos Lima', 'carlos.lima@empresa.com', 'Cozinheiro', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'e3333333-e333-e333-e333-e33333333333');