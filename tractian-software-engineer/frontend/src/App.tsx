import 'App.css'
import Footer from 'components/template/Footer'
import Header from 'components/template/Header'
import Routes from 'Routes'

function App() {
    return (
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    )
}

export default App