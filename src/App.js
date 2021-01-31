import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
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
        fetchUrl={requests.fetchHorrorMovies}
      />
      {/* <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
      /> */}
      {/* <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
      /> */}
    </div>
  );
}

export default App;
