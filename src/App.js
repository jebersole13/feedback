import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats";
import AboutIconLink from './Components/AboutIconLink';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';


function App(){

return(
  <FeedbackProvider>
  <Router>
    <Header />
    <div className='container'>
      <Routes>
        <Route
        path='/'
        element={
          <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList  />
          </>
        }
        ></Route>
        <Route path='/about'element={<AboutPage/>} />
      </Routes>
      <AboutIconLink/>
    </div>
  </Router>
  </FeedbackProvider>
)

}
 

export default App