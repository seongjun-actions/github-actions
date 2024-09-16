import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          test 시나리오3!! CICD로 AWS EKS에 배포한다. 이전에 배포된건 v5.0.0
          태그를 매겼는데 이번꺼는 v6.0.0으로 태그를 매길 것이다. why? 태그를
          통한 롤백 활용법 숙지를 위해서
        </a>
      </header>
    </div>
  );
}

export default App;
