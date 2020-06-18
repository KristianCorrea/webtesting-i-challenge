const { succeed, fail, repair, get } = require('./enhancer.js');

const sword = { 
  name: 'Excalibur',
  durability: 60,
  enhancement: 15,
};

const shield = { 
  name: 'Obsidian Shield',
  durability: 80,
  enhancement: 20,
};

const armor = { 
  name: 'Chainmail Armor',
  durability: 90,
  enhancement: 13,
}

describe('enhancer', () => {
  it('Is enchancer test running?', () => {
    expect(true).toBe(true);
  });

  // REPAIR---------------
  it('Repair item with 100 durability.', () => {
    expect(repair(sword)).toHaveProperty('durability', 100);
  });

  // SUCCESS--------------
  it('Increase the enhancement level on success', () => {
    expect(succeed(sword)).toHaveProperty('enhancement', 16);
  });

  it('should not increase enhancement if it is level 20', () => {
    expect(succeed(shield)).toHaveProperty('enhancement', 20);
  })

  // FAIL-----------------
  it('Decrease durability by 5 on fail if lvl < 15', () => {
    expect(fail(armor)).toHaveProperty('durability', 85);
  });

  it('Decrease durability by 10 on fail if lvl >= 15', () => {
    expect(fail(sword)).toHaveProperty('durability', 50);
  });

  it('should decrease enhancement level by 1 on fail if lvl > 16', () => {
    expect(fail(shield)).toHaveProperty('enhancement', 19);
  });

}); 