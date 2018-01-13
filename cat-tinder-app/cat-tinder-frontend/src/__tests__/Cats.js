import React from 'react'
import ReactDOM from 'react-dom'
import Cats from '../pages/Cats'
import { mount } from 'enzyme'

const cats = [
    {
      id: 1,
      name: 'Mr. Meowsington III',
      age: 7,
      location: 'The Hamptons',
      hobby:'Cigars and piano. Also fancy dinner parties.',
      dislikes:'Water, the working class, cold caviar, peasants.',
      quote:'And for that reasons...I am in.',
      lookingFor:'A refined madam to accompany him to fancy dinner parties.'
    },
    {
      id:2,
      name:'Callaghan',
      age:3,
      location:'Ireland',
      hobby:'Juggling ducks',
      dislikes:'Water, Jake, the English',
      quote:'Live fast, die young.',
      lookingFor:'A good time and a pint of guiness'
  },
  {
    id:3,
    name:'TacoCat Dominguez',
    age:1,
    location:'Pacific Beach',
    hobby:'Biting, Watching Planet Earth, Eating Pepperonis',
    dislikes:'Water, wind, being put under blankets.',
    quote:'Meooowwwwwwwwww',
    lookingFor:'Someone to watch planet earth and bite things with.'
  }
]

it('Cats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cats cats={cats} />, div);
})

it('Renders the cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4 > .cat-name')
  expect(headings.length).toBe(3)
})

it('Renders the cats name', ()=>{
  const component = mount(<Cats cats={cats} />)
  const name = component.find('h4 > .cat-name').first()
  expect(name.text()).toBe('Mr. Meowsington III')
})

it('Renders the cat age', ()=>{
  const component = mount(<Cats cats={cats} />)
  const age = component.find('h4 > .cat-age').first()
  expect(age.text()).toBe("7 years old")
})

it('Renders what the cat looks for', ()=>{
  const component = mount(<Cats cats={cats} />)
  const lookingFor = component.find('.cat-lookingFor').first()
  expect(lookingFor.text()).toBe('Looking for: A refined madam to accompany him to fancy dinner parties.')
})
