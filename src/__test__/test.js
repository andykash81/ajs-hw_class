import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('Character correct', () => {
  const character = new Character('hero', 'Bowman');
  const correct = {
    name: 'hero', type: 'Bowman', health: 100, level: 1, attack: 0, defence: 0,
  };
  expect(character).toEqual(correct);
});

test('Name not correct', () => {
  expect(() => new Character('h', 'Bowman')).toThrow(Error);
});

test('Type not correct', () => {
  expect(() => new Character('hero', 'Swordsmans')).toThrow(Error);
});

test('Bowman correct', () => {
  const bowman = new Bowman('hero', 'Bowman');
  const correct = {
    name: 'hero', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(bowman).toEqual(correct);
});

test('Swordsman correct', () => {
  const swordsman = new Swordsman('hero', 'Swordsman');
  const correct = {
    name: 'hero', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(swordsman).toEqual(correct);
});

test('Magician correct', () => {
  const magician = new Magician('hero', 'Magician');
  const correct = {
    name: 'hero', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(magician).toEqual(correct);
});

test('Daemon correct', () => {
  const daemon = new Daemon('hero', 'Daemon');
  const correct = {
    name: 'hero', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(daemon).toEqual(correct);
});

test('Undead correct', () => {
  const undead = new Undead('hero', 'Undead');
  const correct = {
    name: 'hero', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(undead).toEqual(correct);
});

test('Zombie correct', () => {
  const zombie = new Zombie('hero', 'Zombie');
  const correct = {
    name: 'hero', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(zombie).toEqual(correct);
});
