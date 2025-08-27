import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

// Este sera el escudo para proteger por usuario y contraseña una ruta donde se use LocalAuthGuard