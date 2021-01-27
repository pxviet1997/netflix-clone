import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
      <h1>Hey Clever Programmer! Let's build Netflix Clone Front-end today!</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      {/* {requests.fetchNetflixOriginals} */}
      {/* <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
      /> */}
    </div>
  );
}

export default App;
