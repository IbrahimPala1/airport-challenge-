const Plane = require('./airport.js');

describe('#Plane', () => {
  it('everyone on board ready to go', () => {
    const plane = new Plane();
    expect(plane.everyoneOnBoard()).toBe(true)
  });
  it('instruct a plane to land at an airport', () => {
    const plane = new Plane();
    expect(plane.everyoneOnBoard()).toBe(true)
    expect(plane.safeToLand()).toBe('Land at the airport')
  });
  it('instruct a plane to take off from an airport and confirm that it is no longer in the airport', () => {
    const plane = new Plane();
    expect(plane.everyoneOnBoard()).toBe(true)
    expect(plane.takenOff()).toBe('Plane is no longer in the airport')
  });
  it('prevents landing when the airport is full ', () => {
    const plane = new Plane();
    expect(plane.portCapacity()).toEqual(100)
    expect(plane.notSafeToLand()).toBe("You can't land, It's not safe to land")
  });
  it('prevents landing if weather condition is not good', () => {
    const plane = new Plane();
    expect(plane.notSafeToLand()).toBe("You can't land, It's not safe to land")
  });
});