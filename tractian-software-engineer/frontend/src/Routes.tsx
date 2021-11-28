import Admin from 'pages/Admin';
import Home from 'pages/Home';
import { BrowserRouter, Navigate, Route, Routes as Switch } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;