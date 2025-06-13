import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';

@Injectable()
export class CatsService {
    //Atributo cats que e sla colección de cats
   
    #cats: Cat[]; //Atributo publico pribado con #

    //Cats por defecto tiene un registro, lo asignamos
    constructor() {
        this.#cats = [
            {
                id: 1,
                name: 'Eufelia',
                color: 'Atigrado',
            },
        ];
    }

    //Metodo para devolver todos los registros
    findAll(): Cat[] {
        return this.#cats;
    }

    //Metodo para crear un nuevo registro
    create(cat: CatDto): Cat {
        // Asignarle un id
        const newCat = {
            id: this.#cats.length + 1,
            ...cat,
        };
        // Agregar el nuevo registro a la colección
        this.#cats.push(newCat);
        // Devolver el nuevo registro
        return newCat;
    }

    //Metodo para buscar un registro por id
    findOne(id: number): Cat | undefined {
        return this.#cats.find(cat => cat.id === id);
    }

    //Metodo para actualizar parcialmente el nombre de un registro
    updateName(id: number, name: string): Cat | undefined {
        const cat = this.#cats.find(cat => cat.id === id);
        if (cat) {
            cat.name = name;
        }
        return cat;
    }

    //Metodo para eliminar un registro por id
    delete(id: number): boolean {
        const index = this.#cats.findIndex(cat => cat.id === id);
        if (index !== -1) {
            this.#cats.splice(index, 1);
            return true;
        }
        return false;
    }
}
