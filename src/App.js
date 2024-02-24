import './App.css';
import Row from './components/Row';
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import config from './config.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row i
        title='NETFLIX ORIGINAL' 
        fetchUrl={config.fetchNetflixOriginals}
        isLargeRow  
      />
      <Row title='Trending Now' fetchUrl={config.fetchTrending} />
      <Row title='Top Rated' fetchUrl={config.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={config.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={config.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={config.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={config.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={config.fetchDocumentaries} />
    </div>
  );
}

export default App;
