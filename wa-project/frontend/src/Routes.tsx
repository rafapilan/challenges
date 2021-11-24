import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Check from './pages/Check';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/check/:amount" element={<Check />} />
                    <Route path="/quiz/:amount" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;