import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import QuestionsProvider from './context/Questions';
import Routes from './Routes';

function App() {
    return (
        <div className="App">
            <QuestionsProvider>
                <Header />
                <Routes />
                <Footer />
            </QuestionsProvider>
        </div>
    );
}

export default App;
