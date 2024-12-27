import './App.css';
import Header from './components/header/Header'
import Mainfile from './components/mainfile/Mainfile';
import Details from './components/details/Details'
import Startup from './components/startup/Startup'
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Mainfile />
      <Details />
      <Startup />
      <Education />
      <Footer />
    </div>
  );
}
export default App;
