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
      <Row
        title="TRENDING NOW"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="TOP RATED"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={requests.fetchHorroMovies}
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
