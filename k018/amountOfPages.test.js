import { pageDigits } from './amountOfPages';

describe('amountOfPages', () => {
    it('should return all the digits since 1 till the input number - I', () => {
        const inputNumber = 17;
        const expected = 25;

        const sut = pageDigits(inputNumber);

        expect(sut).toEqual(expected)
    })

    it('should return all the digits since 1 till the input number - II', () => {
        const inputNumber = 100;
        const expected = 192;

        const sut = pageDigits(inputNumber);

        expect(sut).toEqual(expected)
    })
})