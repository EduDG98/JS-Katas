import { generateHashtag } from './generateHashtag';

describe("GenerateHashtag", () => {
    xit("should return the sentence without spaces", () => {
        //AAA
        //Arrange
        const sentence = 'do we have a hashtag';
        const expected = 'dowehaveahashtag'

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    });
    xit('should return the first letter in uppercase without spaces', () => {
        //Arrange
        const sentence = 'hey big bill';
        const expected = 'HeyBigBill';

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should start with a #', () => {
        //Arrange
        const sentence = 'ding dang dung';
        const expected = '#DingDangDung';

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should return false - I', () => {
        //Arrange
        const sentence = '';
        const expected = false;

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should return false - II', () => {
        //Arrange
        const sentence = ' '.repeat(141);
        const expected = false;

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

});

/**
Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
    Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
 */
