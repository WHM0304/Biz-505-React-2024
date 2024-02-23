import "./css/App.css";
import MemoMain from "./Comps/MemoMain";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>오늘은 내 생의 가장 젊은 날</h3>
      </header>
      <MemoMain />
      <footer>
        <address>CopyRight &copy; whm0304@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
