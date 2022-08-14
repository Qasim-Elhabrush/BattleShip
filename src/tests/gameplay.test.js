import Gameplay from "../gameplay"
describe('gameplay functions',()=>{
    let exampleGameplay
    beforeEach(()=>{
        exampleGameplay = new Gameplay()
    });
    it('initializes the gameboard',()=>{
        exampleGameboard.initialize();
        expect(exampleGameboard.board[0][5]).toEqual({shipName:undefined,shipIndex:undefined});
        expect(exampleGameboard.board[5][7]).toEqual({shipName:undefined,shipIndex:undefined});
    })})