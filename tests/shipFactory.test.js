import Ship from '../factoryFunctions/shipFactory'
describe('ship functions', () => {
	let testShip;
	beforeEach(() => {
		testShip = new Ship("carrier",3,0);
	});
	it('accepts a hit', () => {
		testShip.gotHit([[4],[7]]);
		expect(testShip.hits).toEqual([[[4],[7]]]);
	});
	it('accepts multiple hits', () => {
		testShip.gotHit([[4],[3]]);
		testShip.gotHit([[4],[4]]);
		expect(testShip.hits).toEqual([[[4],[3]],[[4],[4]]]);
	});
	it('shows that the boat is not sunk', () => {
		testShip.gotHit([[4],[5]]);
		testShip.gotHit([[4],[6]]);
		expect(testShip.isSunk()).toBe(false);
	});
	it('shows that a boat is sunk', () => {
		testShip.gotHit([[4],[3]]);
		testShip.gotHit([[4],[4]]);
		testShip.gotHit([[4],[5]]);
		expect(testShip.isSunk()).toBe(true);
	});
});
