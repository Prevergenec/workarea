import {Component} from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Text here';
//   const styleField = {
//     width: '300px'
//   };

//   return <input 
//           placeholder={holder} 
//           type="text"
//           style={styleField} />
// }

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

class Field extends Component {
  render() {
    const holder = 'Text here';
    const styleField = {
      width: '300px'
    };

  return <input 
          placeholder={holder} 
          type="text"
          style={styleField} />
  }
}

export {Header};
export default App;
