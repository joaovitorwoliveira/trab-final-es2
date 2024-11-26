//Exemplo de Decorator no Framework NestJS

import { Controller, Get } from "@nestjs/common";
import { SetMetadata } from "@nestjs/common";

// Decorator para definir papéis permitidos
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);

@Controller("users")
export class UserController {
  @Get()
  @Roles("admin") // Apenas usuários com papel 'admin' podem acessar
  findAll() {
    return "Lista de usuários";
  }
}
