import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Check from './page/Check';
import Home from './page/Home';
import Query from './page/Query';

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/check/:amount" element={<Check />} />
                    <Route path="/query/:amount" element={<Query />} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;