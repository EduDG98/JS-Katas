import { isomorph, getIsomorphPosition } from './isomorph';

describe('isomorph', () => {
    it('should return true when both string change character at the same position - I', () => {
        const stringToTestOne = 'COOL';
        const stringToTestTwo = 'LEET';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeTruthy();
    })
    it('should return true when both string change character at the same position - II', () => {
        const stringToTestOne = 'COOLOOC';
        const stringToTestTwo = 'LEETEEL';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeTruthy();
    })
    it('should return true when both string change character at the same position - III', () => {
        const stringToTestOne = 'ESTATE';
        const stringToTestTwo = 'DUELED';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeTruthy();
    })
    it('should return true when both string are bigger than ten characters', () => {
        const stringToTestOne = 'ababababab';
        const stringToTestTwo = 'ioioioioio';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeTruthy();
    })
    it('should return false when both string are empty', () => {
        const stringToTestOne = '';
        const stringToTestTwo = '';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return false when both string NOT change character at the same position', () => {
        const stringToTestOne = 'edddd';
        const stringToTestTwo = 'aaabb';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return false when one string is empty - I', () => {
        const stringToTestOne = '';
        const stringToTestTwo = 'aa';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })


    it('should return true when both string change character at the same position - IV', () => {
        const stringToTestOne = 'dcbubbm';
        const stringToTestTwo = 'yibayyr';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return true when both string change character at the same position - V', () => {
        const stringToTestOne = 'bmhvtzm';
        const stringToTestTwo = 'ovpmhlb';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return true when both string change character at the same position - VI', () => {
        const stringToTestOne = 'gflo';
        const stringToTestTwo = 'ywyt';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return true when both string change character at the same position - VII', () => {
        const stringToTestOne = 'pjpmt';
        const stringToTestTwo = 'vlzbh';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return true when both string change character at the same position - VIII', () => {
        const stringToTestOne = 'hojhjma';
        const stringToTestTwo = 'peaptyu';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
    it('should return true when both string change character at the same position - IX', () => {
        const stringToTestOne = 'xsjuwt';
        const stringToTestTwo = 'vprunr';

        const sut = isomorph(stringToTestOne, stringToTestTwo);

        expect(sut).toBeFalsy();
    })
})