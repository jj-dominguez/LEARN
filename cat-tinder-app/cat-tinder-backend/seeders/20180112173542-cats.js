'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cats',
        [
          {
            id: 1,
            name: 'Mr. Meowsington III',
            age: 7,
            location: 'The Hamptons',
            hobby:'Cigars and piano. Also fancy dinner parties.',
            dislikes:'Water, the working class, cold caviar, peasants.',
            quote:'And for that reasons...I am in.',
            lookingFor:'A refined madam to accompany him to fancy dinner parties.',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id:2,
            name:'Callaghan',
            age:3,
            location:'Ireland',
            hobby:'Juggling ducks',
            dislikes:'Water, Jake, the English',
            quote:'Live fast, die young.',
            lookingFor:'A good time and a pint of guiness',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id:3,
            name:'TacoCat Dominguez',
            age:1,
            location:'Pacific Beach',
            hobby:'Biting, Watching Planet Earth, Eating Pepperonis',
            dislikes:'Water, wind, being put under blankets.',
            quote:'Meooowwwwwwwwww',
            lookingFor:'Someone to watch planet earth and bite things with.',
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cats', null, {})
  }
};
