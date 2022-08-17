import { sortSentence } from "./sortSentence";

describe('sortSentence', () => {
    it('should return the sentence sorted - I', () => {
        const sentence = 'cola4 ti2 pa1 mi3';
        const expected = 'pa ti mi cola';

        const sut = sortSentence(sentence);

        expect(sut).toEqual(expected)
    })
    it('should return the sentence sorted - II', () => {
        const sentence = 'mira1 mi2 picha3';
        const expected = 'mira mi picha';

        const sut = sortSentence(sentence);

        expect(sut).toEqual(expected)
    })
    it('should return the sentence sorted - III', () => {
        const sentence = 'una2 Pideme1 PiñaColada3';
        const expected = 'Pideme una PiñaColada';

        const sut = sortSentence(sentence);

        expect(sut).toEqual(expected)
    })
    it('should return blank', () => {
        const sentence = '';
        const expected = '';

        const sut = sortSentence(sentence);

        expect(sut).toEqual(expected)
    })
    it('should return white space', () => {
        const sentence = ' ';
        const expected = ' ';

        const sut = sortSentence(sentence);

        expect(sut).toEqual(expected)
    })
})