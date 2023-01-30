import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="Barry"></ButtonComponent>
        <ImageComponent src="https://images.unsplash.com/photo-1563409236302-8442b5e644df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVja3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="duck"></ImageComponent>
      </header>
    </div>
  );
}

export default App;
