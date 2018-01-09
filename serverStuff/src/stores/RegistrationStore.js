class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = []
  }

  getFields(){
    return this.fields
  }

  getErrors(){
      {firstName:'is required'}
      return this.errors
  }

  validate(){
      this.errors = []
      this.validatePresence('firstName')
      this.validatePresence('lastName')
      this.validatePassLength('password')
      this.validateChar('password')
      this.validateEmail('email')
  }

  validatePresence(fieldName){
      if(this.fields[fieldName] === ''){
          this.addError(fieldName, 'is required')
      }
  }

  validateEmail(fieldName){
      const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
      }
    }

    validatePassLength(fieldName){
        if(this.fields[fieldName].length < 8){
            this.addError(fieldName, ' must be 8 or more characters.')
        }
    }

    validateChar(fieldName){
        const filter = /[0-9]/;
        const alpha = /[a-zA-Z]/;
        if(!(filter.test(this.fields[fieldName]) && alpha.test(this.fields[fieldName]))){
            this.addError(fieldName, 'needs Alpha & Numeric characters')
        }
    }

    addError(fieldName, message){
        this.errors[fieldName] = message
    }
  }



const store = new RegistrationStore()
export default store
