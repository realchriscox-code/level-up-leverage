import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import WhatWeBuild from './pages/WhatWeBuild';
import DiscoverThankYou from './pages/DiscoverThankYou';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/what-we-build" element={<WhatWeBuild />} />
        <Route path="/discover-thank-you" element={<DiscoverThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
