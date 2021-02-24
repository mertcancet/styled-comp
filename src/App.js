import styled from 'styled-components';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BootstrapButtonScreen from './screens/BootstrapButtonScreen';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f0f8fe;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Switch>
          <Route path='/bootstrap-buttons'>
            <BootstrapButtonScreen />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
