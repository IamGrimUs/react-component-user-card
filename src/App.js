import logo from './logo.svg';
import './App.css';
import { UserCard } from './userCard/userCard.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UserCard />
      </header>
    </div>
  );
}

export default App;
