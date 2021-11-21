import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Check from './pages/Check';
import Home from './pages/Home';
import Query from './pages/Query';

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/check/:amount" element={<Check />} />
                    <Route path="/query" element={<Query />} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;