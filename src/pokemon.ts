/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/**
 * Ejercicio 1: Pokédex
 */
import {Pokédex} from '../src/ejercicio-prueba';
export type tiposPokémon = 'Acero' | 'Agua' | 'Bicho' | 'Dragón' | 'Eléctrico' |
                    'Fantasma' | 'Fuego' | 'Hada' | 'Hielo' | 'Lucha' |
                    'Normal' | 'Planta' | 'Psíquico' | 'Roca' | 'Siniestro'|
                    'Tierra' | 'Veneno' | 'Volador';

/**
 * Clase Pokémon que almacena todos los datos del
 * monstruo de bolsillo.
 */
export class Pokémon implements Pokédex {
  nombre: string;
  peso: number;
  altura: number;
  tipo: tiposPokémon;
  puntosDeVida: number; // Hit Points (HP)
  ataque: number;
  defensa: number;
  velocidad: number;
  /**
   * Constructor de la clase.
   * @param nombre Nombre del Pokémon.
   * @param peso Peso del Pokémon en Kg.
   * @param altura Altura del Pokémon en metros.
   * @param tipo Tipo del Pokémon (De los permitidos en tiposPokémon).
   * @param puntosDeVida Puntos de Vida o Hit Points del Pokémon.
   * @param ataque Ataque del Pokémon.
   * @param defensa Defensa del Pokémon.
   * @param velocidad Velocidad del Pokémon.
   */
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

  getNombre(): string {
    return this.nombre;
  }

  getPeso(): number {
    return this.peso;
  }

  getAltura(): number {
    return this.altura;
  }

  getTipo(): tiposPokémon {
    return this.tipo;
  }

  getPuntosDeVida(): number {
    return this.puntosDeVida;
  }

  getAtaque(): number {
    return this.ataque;
  }

  getDefensa(): number {
    return this.defensa;
  }

  getVelocidad(): number {
    return this.velocidad;
  }
}

export class Pikachu extends Pokémon {
  constructor(nombre: string, peso: number, altura: number,
      tipo: tiposPokémon, puntosDeVida: number, ataque: number,
      defensa: number, velocidad: number) {
    super(nombre, peso, altura,
        tipo, puntosDeVida, ataque,
        defensa, velocidad);
  };
}

export class Squirtle extends Pokémon {
  constructor(nombre: string, peso: number, altura: number,
      tipo: tiposPokémon, puntosDeVida: number, ataque: number,
      defensa: number, velocidad: number) {
    super(nombre, peso, altura,
        tipo, puntosDeVida, ataque,
        defensa, velocidad);
  };
}

