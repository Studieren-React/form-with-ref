import './App.css';
import { FormWithRef } from './components/formWithRef/FormWithRef';
import { UncontrolledForm } from './components/formWithRef/UncontrolledForm';

function App() {
  return (
    <div className="App">
      <FormWithRef />
      <UncontrolledForm />
    </div>
  );
}

export default App;
