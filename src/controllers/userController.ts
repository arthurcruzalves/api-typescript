/*
O controlador de dados lida com as requisições do 
usuário e, também faz as respostas ao usuário.
Portanto, iremos importar as bibliotecas: 
Request e Response do framework Express
*/
import { Request, Response } from "express";
/*
Importar a função que traz todos os usuarios
*/
import { getAllUsers, createUser, updateUser, deleteUser, User } from "../models/userModel";

export async function getUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(`Erro ao listar os usuarios -> ${error}`);
    }
}

/*
a função create cadastra novos usuários a partir dos dados enviados pelo frontend. Estes dados serão passados via request */
export async function create(req: Request, res: Response): Promise<void> {
    try {
        //a constante user, guarda o usuario enviado pelo frontend e passa para o método createUser
        const user: Omit<User, "id"> = req.body
        const rs = await createUser(user);
        res.status(201).json(`Cadastro realizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const user: Omit<User, "id"> = req.body
        const rs = await updateUser(parseInt(req.params.id), user)
        res.status(201).json(`Atualizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}

export async function deleta(req: Request, res: Response): Promise<void> {
    try {
        const rs = await deleteUser(parseInt(req.params.id))
        res.status(201).json(`Apagado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}