import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Button,
  Row,
  HelpBlock,
  Alert
} from 'react-bootstrap';

class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                age: '',
                location: '',
                hobby: '',
                dislikes: '',
                quote: '',
                lookingFor: ''
            }
        }
    }

    handleChange(event){
        const formState = Object.assign({}, this.state.form)
        formState[event.target.name] = event.target.value
        this.setState({form: formState})
    }

    handleSubmit(){
        this.props.onSubmit(this.state.form)
        console.log(this.state.form)
    }

    errorsFor(attribute){
        var errorString = ""
        if(this.props.errors){
            const errors = this.props.errors.filter(error => error.param === attribute )
            if(errors){
                errorString = errors.map(error => error.msg ).join(", ")
            }
        }
        return errorString === "" ? null : errorString
    }

    render(){
        return (
            <form>
                <Row>
                    <Col xs={6}>
                        {this.props.errors &&
                            <Alert bsStyle="danger">
                                Please check the form and try again.
                            </Alert>
                        }
                    </Col>
                </Row>

            <div class='forms'>
                 <Row>
                   <Col xs={6}>
                   <FormGroup
                     id="name-form-group"
                     validationState={this.errorsFor('name') && 'error'}>
                     <ControlLabel id="name">Name</ControlLabel>
                     <FormControl
                       type="text"
                       name="name"
                       value={this.state.form.name}
                       onChange={this.handleChange.bind(this)}
                     />
                    {this.errorsFor('name') &&
                        <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
                    }
                   </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                    <FormGroup
                        id="age-form-group"
                        validationState={this.errorsFor('age') && 'error'}>
                       <ControlLabel id="age">Age</ControlLabel>
                       <FormControl
                       type="integer"
                       name="age"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.age}
                       />
                       {this.errorsFor('age') &&
                       <HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>
                   }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="location-form-group"
                        validationState={this.errorsFor('location') && 'error'}>
                       <ControlLabel id="location">Location</ControlLabel>
                       <FormControl
                       type="text"
                       name="location"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.location}
                       />
                       {this.errorsFor('location') &&
                       <HelpBlock id="location-help-block">{this.errorsFor('location')}</HelpBlock>
                        }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="hobby-form-group"
                        validationState={this.errorsFor('hobby') && 'error'}>
                       <ControlLabel id="hobby">Hobby</ControlLabel>
                       <FormControl
                       type="text"
                       name="hobby"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.hobby}
                       />
                       {this.errorsFor('hobby') &&
                       <HelpBlock id="hobby-help-block">{this.errorsFor('hobby')}</HelpBlock>
                        }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="dislikes-form-group"
                        validationState={this.errorsFor('dislikes') && 'error'}>
                        <ControlLabel id="dislikes">Dislikes</ControlLabel>
                        <FormControl
                            type="text"
                            name="dislikes"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.form.dislikes}
                        />
                        {this.errorsFor('dislikes') &&
                        <HelpBlock id="dislikes-help-block">{this.errorsFor('dislikes')}</HelpBlock>
                    }
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="quote-form-group"
                        validationState={this.errorsFor('quote') && 'error'}>
                       <ControlLabel id="quote">Quote</ControlLabel>
                       <FormControl
                       componentClass="textarea"
                       name="quote"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.quote}
                       />
                       {this.errorsFor('quote') &&
                       <HelpBlock id="quote-help-block">{this.errorsFor('quote')}</HelpBlock>
                   }
                     </FormGroup>
                   </Col>
                 </Row>


                 <Row>
                   <Col xs={6}>
                     <FormGroup
                        id="lookingFor-form-group"
                        validationState={this.errorsFor('lookingFor') && 'error'}>
                       <ControlLabel id="lookingFor">Looking For...</ControlLabel>
                       <FormControl
                       componentClass="textarea"
                       name="lookingFor"
                       onChange={this.handleChange.bind(this)}
                       value={this.state.form.lookingFor}
                       />
                       {this.errorsFor('lookingFor') &&
                       <HelpBlock id="lookingFor-help-block">{this.errorsFor('lookingFor')}</HelpBlock>
                   }
                     </FormGroup>
                   </Col>
                 </Row>

                </div>

                 <Row>
                   <Col xs={6}>
                     <Button
                         id="submit"
                         onClick={this.handleSubmit.bind(this)}
                     >Create a Kitty</Button>
                   </Col>
                 </Row>

               </form>
        );
    }
}

export default NewCat
