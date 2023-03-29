import { Controller, HttpStatus, Post } from '@nestjs/common';
import { Req, Body, HttpCode } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
