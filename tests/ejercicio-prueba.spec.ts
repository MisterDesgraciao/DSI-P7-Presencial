import 'mocha';
import {expect} from 'chai';
import {PikachuCreator} from '../src/ejercicio-prueba';
import {SquirtleCreator} from '../src/ejercicio-prueba';

describe('Comprobamos la clase PokémonCreator', () => {
  const PikachuCreador = new PikachuCreator(
      'Pikachu', 6, 0.4, 'Eléctrico', 35, 55, 40, 90,
  );
  const Pikachu = PikachuCreador.factoryMethod();
  const SquirtleCreador = new SquirtleCreator(
      'Squirtle', 8, 0.4, 'Agua', 50, 60, 60, 20,
  );
  const Squirtle = SquirtleCreador.factoryMethod();
  it('Comprobar algunos getters de Pikachu', () => {
    expect(Pikachu.getNombre()).to.be.eql('Pikachu');
    expect(Pikachu.getTipo()).to.be.eql('Eléctrico');
    expect(Pikachu.getVelocidad()).to.be.eql(90);
  });
  it('Comprobar algunos getters de Squirtle', () => {
    expect(Squirtle.getPeso()).to.be.eql(8);
    expect(Squirtle.getDefensa()).to.be.eql(60);
    expect(Squirtle.getTipo()).to.be.eql('Agua');
  });
});
