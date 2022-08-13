import gameboard from '../factoryFunctions/gameboardFactory'
import Ship from '../factoryFunctions/shipFactory'
describe('gameboard functions',()=>{
    let exampleGameboard;
    beforeEach(()=>{
        exampleGameboard = new gameboard();
    });
    it('initializes the gameboard',()=>{
        exampleGameboard.initialize();
        expect(exampleGameboard.board[0][5]).toEqual({shipName:undefined,shipIndex:undefined});
        expect(exampleGameboard.board[5][7]).toEqual({shipName:undefined,shipIndex:undefined});
    })

    it('adds ship to ships array',()=>{
        exampleGameboard.initialize();
        exampleGameboard.placeShip(0,6,"Carrier",5);
        expect(exampleGameboard.ships[0]).toEqual({name:"Carrier",lengthOfShip:5,index:0,hits:[]});
    })

    it('returns false if there is an attempt to place ship off board',()=>{
        exampleGameboard.initialize();
        expect(exampleGameboard.placeShip(0,9,"Carrier",5)).toEqual(false);
    })
    it('changes the board array values in respect to ships name/index',()=>{
        exampleGameboard.initialize();
        exampleGameboard.placeShip(0,2,"Carrier",5);
        expect(exampleGameboard.board[0][3]).toEqual({shipName:"Carrier",shipIndex:0})

    })
    it('doesnt allow a ship to be placed if there is another ship taking up its space',()=>{
        exampleGameboard.initialize();
        exampleGameboard.placeShip(0,0,"Submarine",3);
        expect(exampleGameboard.placeShip(0,1,"Carrier",4)).toBe(false);
        expect(exampleGameboard.board[0][1]).toEqual({shipName:"Submarine",shipIndex:0});
        expect(exampleGameboard.board[0][4]).toEqual({shipName:undefined,shipIndex:undefined});       
    })
    it('receives an attack and if it misses a boat, it adds it to missedShots array',()=>{
        exampleGameboard.initialize();
        exampleGameboard.receiveAttack(0,1);
        expect(exampleGameboard.board[0][1]).toEqual({shipName:undefined,shipIndex:undefined});
        expect(exampleGameboard.missedShots[0]).toEqual([0][1]);
    
    })
   
    
    



})