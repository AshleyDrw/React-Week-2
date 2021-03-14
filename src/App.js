import './App.css';
import MovieWidget from './components/movie-widget';
import MovieList from './components/movie-list';
import ReviewList from './components/review-list';
import ReviewForm from './components/review-form';
import StarRating from './components/star-rating';
import Navigation from './components/navigation';

function App() {
  return (
      <Navigation />,
      <MovieWidget />,
      <MovieList />,
      <ReviewList />,
      <ReviewForm />,
      <StarRating />
  );
}

export default App;
