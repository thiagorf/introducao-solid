import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";



class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const userId = user_id as string;

      const users = this.listAllUsersUseCase.execute({user_id: userId});

      return response.json(users);
      
    } catch (error) {
      return response.status(400).json({error: "User isn't admin"}) 
    }
  }
}

export { ListAllUsersController };
