import React from 'react';
import RegistrationForm from './registrationForm';
import Currency from './Currency';
import CurrencyError from './CurrencyError';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm />

        <CurrencyError>
          Germany: <Currency value={21} locale="de-DE" currency="USD" />
          USA: <Currency value={21} locale="en-US" currency="USD" />
        </CurrencyError>
      </div>
    );
  }
}

export default App;
