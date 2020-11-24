import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";

function App() {
  return (
    <Router>
      <Header />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/note/:id" component={SingleNote} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
