const request = require('supertest')
const app = require('../app')

jest.mock('../models/cat')

describe("App", ()=>{
    it("Tests the root path", ()=>{
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it("Lists cats", ()=>{
        return request(app).get("/cats").then(response =>{
            expect(response.statusCode).toBe(200)
            expect(response.body.cats[0].name).toBe('Callaghan')
        })
    })

    it("Creates cats", ()=>{
      return request(app)
      .post("/cats")
      .send({
          name: 'Mr. Meowsington III',
          age: 7,
          location: 'The Hamptons',
          hobby:'Cigars and piano. Also fancy dinner parties.',
          dislikes:'The working class, cold caviar, peasants.',
          quote:'And for that reasons...I am in.',
          lookingFor:'A refined madam to accompany him to fancy dinner parties.'
      })
      .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body.cat.name).toBe('Mr. Meowsington III')
          expect(response.body.cat.age).toBe(7)
          expect(response.body.cat.location).toBe('The Hamptons')
          expect(response.body.cat.hobby).toBe('Cigars and piano. Also fancy dinner parties.')
          expect(response.body.cat.dislikes).toBe('The working class, cold caviar, peasants.')
          expect(response.body.cat.quote).toBe('And for that reasons...I am in.')
          expect(response.body.cat.lookingFor).toBe('A refined madam to accompany him to fancy dinner parties.')
      })
    })

    it("Validates name when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            age: 7,
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'The working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('name')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates Age when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'The working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('age')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates location when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            age: 7,
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'The working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('location')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates hobby when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            age: 7,
            location: 'The Hamptons',
            dislikes:'The working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('hobby')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates dislikes when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            age: 7,
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('dislikes')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates quote when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            age: 7,
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'The working class, cold caviar, peasants.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.'
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('quote')
          expect(error.msg).toBe('is required')
        })
    })

    it("Validates lookingFor when creating cat", ()=>{
      return request(app)
        .post("/cats")
        .send({
            name: 'Mr. Meowsington III',
            age: 7,
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'The working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
        })
        .then(response =>{
          expect(response.statusCode).toBe(400)
          const error = response.body.errors.validations[0]
          expect(error.param).toBe('lookingFor')
          expect(error.msg).toBe('is required')
        })
    })

})
