import React, { Component } from 'react';
import './Register.css';

interface State{
  newUsername: string;
  newEmail: string;
  newPassword: string;
  newPasswordAgain: string;
}

class App extends Component<{}, State>{
  constructor(props: {}){
    super(props);
  
  
  this.state = {
    newUsername: "",
    newEmail: "",
    newPassword: "",
    newPasswordAgain: "",
    }
  }

  newUser =async () => {
  const {newUsername, newEmail, newPassword, newPasswordAgain} = this.state;
    
  const adat = {
    username: newUsername,
    email: newEmail,
    password: newPassword,
    passwordAgain: newPasswordAgain,
  }

  await fetch ('http://localhost:3000/register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(adat)
  });  
  }
    

  render(){
    const {newUsername, newEmail, newPassword, newPasswordAgain} = this.state;
    return <div>
        <form>
          <div className='form-group'>
            Felhasználónév: <input type="text" value={newUsername} onChange={e => this.setState({ newUsername : e.currentTarget.value})}/><br/>
          </div>
          <div className='form-group'>
            E-mail cím: <input type="email" value={newEmail} onChange={e => this.setState({ newEmail : e.currentTarget.value})}/><br/>
          </div>
          <div className='form-group'>
            Jelszó:<input type="password" value={newPassword} onChange={e => this.setState({ newPassword : e.currentTarget.value})}/><br/>
          </div>
          <div className='form-group'>
            Jelszó újra:<input type="password" value={newPasswordAgain} onChange={e => this.setState({ newPasswordAgain : e.currentTarget.value})}/><br/>
          </div>
          <button onClick={this.newUser} className="button" >Regisztáció</button>
        </form>
      </div>
  }
}
export default App;
