import Signup from './components/Signup/Signup';
import Signin from './components/Singin/Signin';
import { HandleSubmitType, RegisterSubmitType } from './types/types';

// function App() {
  const handleSubmit : HandleSubmitType = (email, password) => {
    console.log(email, password)
  }
  const handleRegister: RegisterSubmitType = (text, sex, password, name, email) => {
    console.log(text, sex, password, name, email);
    // api.register(data)
};
function App() {
  return (
    <div className="App" style={{padding: "50px"}}>
      <Signup handleRegister = {handleRegister}/>
      <Signin handleSubmit = {handleSubmit}/>
    </div>
  );
}

export default App;
