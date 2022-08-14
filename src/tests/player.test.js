import Player from "../factoryFunctions/playerFactory"
describe('Player functions',()=>{
    let examplePlayer;
    let exampleComputer;
    beforeEach(()=>{
        examplePlayer = new Player();
        exampleComputer = new Player();
    });
    it('can attack other player/computer',()=>{
        examplePlayer.attack(exampleComputer,0,2);
        exampleComputer.attack(examplePlayer,0,6);
        expect(examplePlayer.gameboard.missedShots[0]).toBe([0][6]);
        expect(exampleComputer.gameboard.missedShots[0]).toBe([0][2]);

    })})