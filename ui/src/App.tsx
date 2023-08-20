import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="parent-container">
      <Header />
      <CalendarUI />
      <SearchFilter />
    </div>
  );
}

export default App;
