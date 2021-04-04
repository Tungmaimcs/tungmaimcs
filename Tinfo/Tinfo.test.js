var Tinfo = require('testtools').load('./Tinfo.js', 'Tinfo');

describe('Tinfo', () => {

    test('propertive status', () => {
        expect(Tinfo).toHaveProperty('name');
        expect(Tinfo).toHaveProperty('car');
        expect(Tinfo).toHaveProperty('professional');
    });

    test('name', () => {
        expect(Tinfo.name).toBe('Tung');
    });

    test('car', () => {
        expect(Tinfo.car).toContain('Ford');    
    });

    test('professional', () => {
        expect(Tinfo.pro).toMatch('design');
    });
});