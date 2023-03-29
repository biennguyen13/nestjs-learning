import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  signup(req): any {
    return req;
  }
  signin(): { msg: string } {
    return { msg: 'sign in' };
  }
}
