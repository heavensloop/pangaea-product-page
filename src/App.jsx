import { BrowserRouter as Router } from 'react-router-dom';

import TopNav from 'components/TopNav';
import Products from 'views/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Products />
      </div>
    </Router>
  );
}

export default App;
