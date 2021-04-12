/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
import {Pokémon} from '../src/pokemon';
// import {Combat} from '../src/combat';
import {tiposPokémon} from '../src/pokemon';
import {Pikachu} from '../src/pokemon';
import {Squirtle} from '../src/pokemon';
/**
 * Ejercicio presencial práctica 7.
 */

export interface Pokédex {
  getTipo(): tiposPokémon;
  getPuntosDeVida(): number;
  getAtaque(): number;
}

export class PokémonCreator {
  nombre: string;
  peso: number;
  altura: number;
  tipo: tiposPokémon;
  puntosDeVida: number; // Hit Points (HP)
  ataque: number;
  defensa: number;
  velocidad: number;
  constructor(
      nombre: string, peso: number, altura: number,
      tipo: tiposPokémon, puntosDeVida: number, ataque: number,
      defensa: number, velocidad: number) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.puntosDeVida = puntosDeVida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  public factoryMethod(): Pokédex {
    return new Pokémon(this.nombre, this.peso, this.altura,
        this.tipo, this.puntosDeVida, this.ataque,
        this.defensa, this.velocidad);
  }
}

export class PikachuCreator extends PokémonCreator {
  constructor(nombre: string, peso: number, altura: number,
      tipo: tiposPokémon, puntosDeVida: number, ataque: number,
      defensa: number, velocidad: number) {
    super(nombre, peso, altura, tipo, puntosDeVida,
        defensa, ataque, velocidad);
  }
  public factoryMethod(): Pikachu {
    return new Pikachu(this.nombre, this.peso, this.altura,
        this.tipo, this.puntosDeVida, this.ataque,
        this.defensa, this.velocidad);
  }
}

export class SquirtleCreator extends PokémonCreator {
  constructor(nombre: string, peso: number, altura: number,
      tipo: tiposPokémon, puntosDeVida: number, ataque: number,
      defensa: number, velocidad: number) {
    super(nombre, peso, altura, tipo, puntosDeVida,
        defensa, ataque, velocidad);
  }
  public factoryMethod(): Squirtle {
    return new Squirtle(this.nombre, this.peso, this.altura,
        this.tipo, this.puntosDeVida, this.ataque,
        this.defensa, this.velocidad);
  }
}

