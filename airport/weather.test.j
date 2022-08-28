const Weather = require('./airport.js')
describe('#Weather', () => {
    it('checks whether 0.5 is safe to land', () => {
        const weather = new Weather();
        expect(weather.random(0.5)).toEqual('')
    })
})