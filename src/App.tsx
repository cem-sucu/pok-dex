import React, {FunctionComponent, useState} from 'react';
  
const App: FunctionComponent = () => {
 const [name, setName] = useState<String>('react');
    
 return (
  <h1>Bonjour, {name} !</h1>
 )
}
  
export default App;