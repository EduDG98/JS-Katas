import { isSolved, WINS_ONE, WINS_TWO, DRAW } from './isSolved';

describe('isSolved', () => {
    it('should return 0 beause it is a draw', () => {
        const inputBoard = [[2, 1, 2], [2, 1, 1], [1, 2, 1]];
        const expected = DRAW;

        const sut = isSolved(inputBoard);

        expect(sut).toEqual(expected);
    })


    it('should return 1 beause it wins one - I', () => {
        const inputBoard = [[1, 1, 1], [0, 2, 2], [0, 0, 0]];
        const expected = WINS_ONE;

        const sut = isSolved(inputBoard);

        expect(sut).toEqual(expected);
    })

    it('should return 1 beause it wins one - II', () => {
        const inputBoard = [[1, 2, 0], [0, 1, 2], [0, 0, 1]]
        const expected = WINS_ONE;

        const sut = isSolved(inputBoard);

        expect(sut).toEqual(expected);
    })


    it('should return 2 beause it wins two - I', () => {
        const inputBoard = [[2, 2, 2], [0, 1, 1], [1, 0, 0]];
        const expected = WINS_TWO;

        const sut = isSolved(inputBoard);

        expect(sut).toEqual(expected);
    })

    it('should return 2 beause it wins two - II', () => {
        const inputBoard = [[2, 1, 1], [0, 1, 1], [2, 2, 2]];
        const expected = WINS_TWO;

        const sut = isSolved(inputBoard);

        expect(sut).toEqual(expected);
    })


})