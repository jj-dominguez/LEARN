import React from 'react';
import ReactDOM from 'react-dom';
import NewCat from '../pages/NewCat';
import { mount } from 'enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewCat />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a lookingFor input', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('label#lookingFor').text()).toBe("Looking For...")
})

it('has a submit button', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('button#submit').text()).toBe("Create a Kitty")
})

it("calls submitHandler on submit", ()=>{
    const mockSubmitHandler = jest.fn()
    const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
    component.find('button#submit').simulate('click', {button: 0})
    expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('input[name="name"]').simulate('change', {target: {value: 'Taco', name: 'name'}})
  component.find('input[name="age"]').simulate('change', {target: {value: 1, name: 'age'}})
  component.find('input[name="location"]').simulate('change', {target: {value: 'Pacific Beach', name: 'location'}})
  component.find('input[name="hobby"]').simulate('change', {target: {value: 'Eating Pepperonis', name: 'hobby'}})
  component.find('input[name="dislikes"]').simulate('change', {target: {value: 'many things', name: 'dislikes'}})
  component.find('textarea[name="quote"]').simulate('change', {target: {value: 'to be or not to be', name: 'quote'}})
  component.find('textarea[name="lookingFor"]').simulate('change', {target: {value: 'love in all the wrong places', name: 'lookingFor'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]

  expect(submittedValues["name"]).toBe("Taco")
  expect(submittedValues["age"]).toBe(1)
  expect(submittedValues["location"]).toBe("Pacific Beach")
  expect(submittedValues["hobby"]).toBe("Eating Pepperonis")
  expect(submittedValues["dislikes"]).toBe("many things")
  expect(submittedValues["quote"]).toBe("to be or not to be")
  expect(submittedValues["lookingFor"]).toBe("love in all the wrong places")
})

it("shows flash message when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find(".alert-danger").length).toBe(1)
})

it("highlights name input when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find('#name-form-group.has-error').length).toBe(1)
})


//begin error for calls
//name
it("no help message for name when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#name-help-block").length).toBe(0)
})

it("shows help message for name when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'name',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#name-help-block").length).toBe(1)
})


//age
it("no help message for age when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#age-help-block").length).toBe(0)
})

it("shows help message for age when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'age',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#age-help-block").length).toBe(1)
})

//location
it("no help message for location when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#location-help-block").length).toBe(0)
})

it("shows help message for location when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'location',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#location-help-block").length).toBe(1)
})

//hobby
it("no help message for hobby when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#hobby-help-block").length).toBe(0)
})

it("shows help message for hobby when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'hobby',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#hobby-help-block").length).toBe(1)
})
//dislikes
it("no help message for dislikes when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#dislikes-help-block").length).toBe(0)
})

it("shows help message for dislikes when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'dislikes',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#dislikes-help-block").length).toBe(1)
})

//Quote
it("no help message for quote when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#quote-help-block").length).toBe(0)
})

it("shows help message for quote when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'quote',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#quote-help-block").length).toBe(1)
})
//Looking For
it("no help message for lookingFor when there is no error", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  expect(component.find("#lookingFor-help-block").length).toBe(0)
})

it("shows help message for lookingFor when there is an error", ()=>{
  const mockSubmitHandler = jest.fn()
  const validationErrors = [
    {
      param: 'lookingFor',
      msg: 'is required.'
    }
  ]
  const component = mount(<NewCat onSubmit={mockSubmitHandler} errors={validationErrors}/>)
  expect(component.find("#lookingFor-help-block").length).toBe(1)
})
