import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainMenu, ModalRoot } from './widgets';
import { UnitsPage } from './pages/UnitsPage';
import { RulesPage } from './pages/RulesPage';
import { ListsPage } from './pages/ListsPage';
import { AboutPage } from './pages/AboutPage';
import { ScenariosPage } from './pages/ScenariosPage';
import { CommandersPage } from './pages/CommandersPage';
import { ListPage } from './pages/ListPage';

function App() {

    return (
        <BrowserRouter basename="/black-powder-adjunct">
            <ModalRoot>
                <MainMenu />
                <Routes>
                    <Route path="/" element={<UnitsPage />} />
                    <Route path="/units" element={<UnitsPage />} />
                    <Route path="/commanders" element={<CommandersPage />} />
                    <Route path="/scenarios" element={<ScenariosPage />} />
                    <Route path="/rules" element={<RulesPage />} />
                    <Route path="/lists" element={<ListsPage />} />
                    <Route path="/list/:listId" element={<ListPage />}/>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </ModalRoot>
        </BrowserRouter>
    );
}

export default App
