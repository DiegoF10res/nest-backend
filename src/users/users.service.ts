import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // Metodo para localizar el usuario
    findOne(username: string) {
        return {
            id:"1", 
            name:"Diego",
            username: "diego123", 
            password:"123456", 
            active:true,
        }

        //TODO: Buscar e
    }
}
