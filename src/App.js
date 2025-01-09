import logo from './logo.svg';
import './App.css';
import CarouselSlider from './components/carousel-slider';

function App() {
  return (
    <div className="carousel-container">
        <h1 className='heading'>What User says</h1>
        <p className='sub-title'>Testimonials that speak louder than words! Customer stories that light up our day.</p>
        <CarouselSlider />
    </div>
  );
}

export default App;
