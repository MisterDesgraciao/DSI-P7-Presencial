import 'mocha';
import {expect} from 'chai';
import {Combat} from '../src/combat';
import {PikachuCreator} from '../src/ejercicio-prueba';
import {SquirtleCreator} from '../src/ejercicio-prueba';

describe('Pruebas del combate', () => {
  const PikachuCreador = new PikachuCreator(
      'Pikachu', 6, 0.4, 'Eléctrico', 35, 55, 40, 90,
  );
  const Pikachu = PikachuCreador.factoryMethod();
  const SquirtleCreador = new SquirtleCreator(
      'Squirtle', 8, 0.4, 'Agua', 50, 60, 60, 20,
  );
  const Squirtle = SquirtleCreador.factoryMethod();
  const SquirtleVSPikachu = new Combat(Squirtle, Pikachu);
  it('Llamada a Pokémon', () => {
    expect(SquirtleVSPikachu.getPrimerPKM().getNombre()).to.be.eql('Squirtle');
    expect(SquirtleVSPikachu.getSegundoPKM().getNombre()).to.be.eql('Pikachu');
  });
  it('Ganador es Pikachu', () => {
    expect(SquirtleVSPikachu.start()).to.be.eql(
        '¡El ganador del combate es: Squirtle!');
  });
});
