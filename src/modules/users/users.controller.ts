
import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/core/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async register(@Body() userData: { name?: string; email: string; password: string }) {
        const user = await this.usersService.registerUser(userData);
        return this.authService.jwt_generator({ username: user.email, userId: user.id });
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
