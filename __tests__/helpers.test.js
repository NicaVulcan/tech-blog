const { format_date, format_plural } = require('../utils/helpers');

test('formate_date returns MM/DD/YYYY', () => {
    const date = new Date('1992-12-03 14:14:00');
    expect(format_date(date)).toBe('12/3/1992')
});

test('format_plural returns properly pluralized word', () => {
    const word1 = 'starship';
    expect(format_plural(word1, 3)).toBe('starships');

    const word2 = 'black hole';
    expect(format_plural(word2, 1)).toBe('black hole');
})