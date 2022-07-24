import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
