# Sistema de Exibição de Painel

Este sistema foi desenvolvido para o evento Troféu Mesa Redonda. Ele tem como principal funcionalidade o cadastro e a exibição do nome do participante que deseja ter sua foto tirada com seu nome sendo exibido no painel.

## Funcionalidades

- Cadastro de nomes de participantes.
- Exibição do nome do participante no painel.

## Armazenamento de Dados

Os dados são armazenados em um arquivo TXT. A cada atualização, o conteúdo do arquivo é sobreescrito com os novos dados.

## Requisitos
* [Docker](https://docs.docker.com/engine/install/)
* [Docker Compose](https://github.com/docker/compose)

# Instalação

```
docker-compose up --build -d
```

# URL de acesso

http://localhost:8891