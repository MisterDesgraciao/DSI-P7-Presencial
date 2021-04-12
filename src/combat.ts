/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/**
 * Clase Combat que simula un combate entre dos Pokémon.
 */
import {Pokémon} from '../src/pokemon';
import {tiposPokémon} from '../src/pokemon';

/**
 * Función que calcula la efectividad de un movimiento sobre el tipo del
 * Pokémon contrincante. Puede devolver los valores: 0, 0.5, 1 o 2.
 * @returns Multiplicador del daño del ataque.
 */
export function efectividad(tipoPrimerPKM: tiposPokémon,
    tipoSegundoPKM: tiposPokémon) {
  switch (tipoPrimerPKM) {
    case 'Acero':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Agua' ||
        tipoSegundoPKM == 'Eléctrico' || tipoSegundoPKM == 'Fuego') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Hada' || tipoSegundoPKM == 'Hielo' ||
                tipoSegundoPKM == 'Roca') {
        return 2;
      } else {
        return 1;
      }
    case 'Agua':
      if (tipoSegundoPKM == 'Agua' || tipoSegundoPKM == 'Dragón' ||
        tipoSegundoPKM == 'Planta') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Fuego' || tipoSegundoPKM == 'Roca' ||
                tipoSegundoPKM == 'Tierra') {
        return 2;
      } else {
        return 1;
      }
    case 'Bicho':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Fantasma' ||
        tipoSegundoPKM == 'Fuego' || tipoSegundoPKM == 'Hada' ||
        tipoSegundoPKM == 'Lucha' || tipoSegundoPKM == 'Veneno' ||
        tipoSegundoPKM == 'Volador') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Planta' || tipoSegundoPKM == 'Psíquico' ||
                tipoSegundoPKM == 'Siniestro') {
        return 2;
      } else {
        return 1;
      }
    case 'Dragón':
      if (tipoSegundoPKM == 'Acero') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Dragón') {
        return 2;
      } else if (tipoSegundoPKM == 'Hada') {
        return 0;
      } else {
        return 1;
      }
    case 'Eléctrico':
      if (tipoSegundoPKM == 'Dragón' || tipoSegundoPKM == 'Eléctrico' ||
        tipoSegundoPKM == 'Planta') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Agua' || tipoSegundoPKM == 'Volador') {
        return 2;
      } else if (tipoSegundoPKM == 'Tierra') {
        return 0;
      } else {
        return 1;
      }
    case 'Fantasma':
      if (tipoSegundoPKM == 'Siniestro') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Fantasma' || tipoSegundoPKM == 'Psíquico') {
        return 2;
      } else if (tipoSegundoPKM == 'Normal') {
        return 0;
      } else {
        return 1;
      }
    case 'Fuego':
      if (tipoSegundoPKM == 'Agua' || tipoSegundoPKM == 'Dragón' ||
        tipoSegundoPKM == 'Fuego' || tipoSegundoPKM == 'Roca') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Bicho' ||
                tipoSegundoPKM == 'Hielo' || tipoSegundoPKM == 'Planta') {
        return 2;
      } else {
        return 1;
      }
    case 'Hada':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Fuego' ||
        tipoSegundoPKM == 'Veneno') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Dragón' || tipoSegundoPKM == 'Lucha' ||
                tipoSegundoPKM == 'Planta') {
        return 2;
      } else {
        return 1;
      }
    case 'Hielo':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Agua' ||
        tipoSegundoPKM == 'Fuego' || tipoSegundoPKM == 'Lucha') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Dragón' || tipoSegundoPKM == 'Planta' ||
                tipoSegundoPKM == 'Tierra' || tipoSegundoPKM == 'Volador') {
        return 2;
      } else {
        return 1;
      }
    case 'Lucha':
      if (tipoSegundoPKM == 'Bicho' || tipoSegundoPKM == 'Hada' ||
        tipoSegundoPKM == 'Psíquico' || tipoSegundoPKM == 'Veneno' ||
        tipoSegundoPKM == 'Volador') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Hielo' ||
      tipoSegundoPKM == 'Normal' || tipoSegundoPKM == 'Roca' ||
      tipoSegundoPKM == 'Siniestro') {
        return 2;
      } else if (tipoSegundoPKM == 'Fantasma') {
        return 0;
      } else {
        return 1;
      }
    case 'Normal':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Roca') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Fantasma') {
        return 0;
      } else {
        return 1;
      }
    case 'Planta':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Bicho' ||
        tipoSegundoPKM == 'Dragón' || tipoSegundoPKM == 'Fuego' ||
        tipoSegundoPKM == 'Planta' || tipoSegundoPKM == 'Veneno' ||
        tipoSegundoPKM == 'Volador') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Agua' || tipoSegundoPKM == 'Roca' ||
                tipoSegundoPKM == 'Tierra') {
        return 2;
      } else {
        return 1;
      }
    case 'Psíquico':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Psíquico') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Lucha' || tipoSegundoPKM == 'Veneno') {
        return 2;
      } else if (tipoSegundoPKM == 'Siniestro') {
        return 0;
      } else {
        return 1;
      }
    case 'Roca':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Lucha' ||
        tipoSegundoPKM == 'Tierra') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Bicho' || tipoSegundoPKM == 'Fuego' ||
                tipoSegundoPKM == 'Hielo' || tipoSegundoPKM == 'Volador') {
        return 2;
      } else {
        return 1;
      }
    case 'Siniestro':
      if (tipoSegundoPKM == 'Hada' || tipoSegundoPKM == 'Lucha' ||
        tipoSegundoPKM == 'Siniestro') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Fantasma' || tipoSegundoPKM == 'Psíquico') {
        return 2;
      } else {
        return 1;
      }
    case 'Tierra':
      if (tipoSegundoPKM == 'Bicho' || tipoSegundoPKM == 'Planta') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Eléctrico' ||
                tipoSegundoPKM == 'Fuego' || tipoSegundoPKM == 'Roca' ||
                tipoSegundoPKM == 'Veneno') {
        return 2;
      } else if (tipoSegundoPKM == 'Volador') {
        return 0;
      } else {
        return 1;
      }
    case 'Veneno':
      if (tipoSegundoPKM == 'Fantasma' || tipoSegundoPKM == 'Roca' ||
        tipoSegundoPKM == 'Tierra' || tipoSegundoPKM == 'Veneno') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Hada' || tipoSegundoPKM == 'Planta') {
        return 2;
      } else if (tipoSegundoPKM == 'Acero') {
        return 0;
      } else {
        return 1;
      }
    case 'Volador':
      if (tipoSegundoPKM == 'Acero' || tipoSegundoPKM == 'Eléctrico' ||
      tipoSegundoPKM == 'Roca') {
        return 0.5;
      } else if (tipoSegundoPKM == 'Bicho' || tipoSegundoPKM == 'Lucha' ||
                tipoSegundoPKM == 'Normal') {
        return 2;
      } else {
        return 1;
      }
  }
}

export class Combat {
  primerPKM: Pokémon;
  segundoPKM: Pokémon;
  /**
   * Constructor de la Clase. Recibe los dos Pokémon a pelear.
   * @param primerPKM Primer Pokémon de la pelear. Este siempre ataca primero.
   * @param segundoPKM Segundo Pokémon de la pelea. Ataca segundo.
   */
  constructor(primerPKM: Pokémon, segundoPKM: Pokémon) {
    this.primerPKM = primerPKM;
    this.segundoPKM = segundoPKM;
  }

  getPrimerPKM(): Pokémon {
    return this.primerPKM;
  }

  getSegundoPKM(): Pokémon {
    return this.segundoPKM;
  }
  /**
   * Función que calcula el daño realizado.
   * @param nombrePKMAtacante Nombre del Pokémon Atacante.
   * @param tipoPKMAtacante Tipo del Pokémon Atacante.
   * @param ataquePKMAtacante Ataque del Pokémon Atacante.
   * @param nombrePKMDefensor Nombre del Pokémon Defensor.
   * @param tipoPKMDefensor Tipo del Pokémon Defensor.
   * @param defensaPKMDefensor Defensa del Pokémon Defensor.
   * @returns Retorna el daño (en nº de puntos de vida) del ataque.
   */
  calcularDaño(nombrePKMAtacante: string, tipoPKMAtacante: tiposPokémon,
      ataquePKMAtacante: number, nombrePKMDefensor: string,
      tipoPKMDefensor: tiposPokémon, defensaPKMDefensor: number) {
    const efectividadAtaque = efectividad(tipoPKMAtacante, tipoPKMDefensor);
    const daño =
        50 *(ataquePKMAtacante / defensaPKMDefensor) * efectividadAtaque;
    const dañoRedondeado = Math.round(daño);
    console.log('¡' + nombrePKMAtacante + ' ha realizado ' + dañoRedondeado +
      ' Puntos de vida a ' + nombrePKMDefensor + '!');
    return dañoRedondeado;
  }

  /**
   * Función que simula el combate entre dos Pokémon.
   * Se realiza una copia de los Puntos de Vida de cada Pokémon y es
   * a esta copia a la que se restan los puntos de daño. Si alguno de
   * estos valores llega a cero o valores negativos, el otro Pokémon es
   * declarado vencedor.
   * @param primerPKM Este Pokémon ataca siempre primero.
   * @param segundoPKM Este Pokémon ataca segundo.
   * @returns Retorna un mensaje al estilo de los juegos que anuncia
   *          el ganador del combate.
   */
  start() {
    console.log('¡Comienza el combate!');
    let vidaPrimerPKM = this.primerPKM.puntosDeVida;
    let vidaSegundoPKM = this.segundoPKM.puntosDeVida;
    while (vidaPrimerPKM > 0 || vidaSegundoPKM > 0) {
      vidaSegundoPKM -= this.calcularDaño(this.primerPKM.nombre,
          this.primerPKM.tipo, this.primerPKM.ataque,
          this.segundoPKM.nombre, this.segundoPKM.tipo,
          this.segundoPKM.defensa);
      console.log('¡Los puntos de vida restantes de ' +
      this.segundoPKM.nombre + ' son: ' + vidaSegundoPKM + '!');
      if (vidaSegundoPKM <= 0) {
        console.log('¡' + this.segundoPKM.nombre + ' ha sido derrotado!');
        return '¡El ganador del combate es: ' + this.primerPKM.nombre + '!';
      }
      vidaPrimerPKM -= this.calcularDaño(this.segundoPKM.nombre,
          this.segundoPKM.tipo, this.segundoPKM.ataque,
          this.primerPKM.nombre, this.primerPKM.tipo,
          this.primerPKM.defensa);
      console.log('¡Los puntos de vida restantes de ' +
      this.primerPKM.nombre + ' son: ' + vidaPrimerPKM + '!');
      if (vidaPrimerPKM <= 0) {
        console.log('¡' + this.primerPKM.nombre + ' ha sido derrotado!');
        return '¡El ganador del combate es: ' + this.segundoPKM.nombre + '!';
      }
    }
  }
}
