import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { Login } from './components/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}

export default App;
