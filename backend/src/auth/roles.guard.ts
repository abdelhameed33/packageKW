import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from './user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles)

    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user:User = request.user;
    console.log(`user role ${user.role}`)

    return this.matchRoles(roles, user.role);
  }

  private matchRoles(roles:string[] , role:string){
      return roles.includes(role);
  }
}