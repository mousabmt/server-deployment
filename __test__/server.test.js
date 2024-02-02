`use strict`;
describe(`testing server`, () => {
    it(`says hi`, () => {
        expect('hi').toBe('hi')
    })
})
const supertest = require('supertest')
const { app } = require('../server')
const req = supertest(app)
// const getTime = require('./middleware/time')
describe('server Testing ', () => {
    it('handle Not found ', async () => {
        const res = await req.get('/items');
        expect(res.status).toBe(404)
    })
    it('handle root page ', async () => {
        const res = await req.get('/')
        
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('Welcome To Home Page !')
   
    })
}

)