import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-900/75 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">BrnTipster</Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-slate-200 hover:text-white transition-colors">Home</Link>
          <Link to="/palpites" className="text-slate-200 hover:text-white transition-colors">Palpites</Link>
          <Link to="/ranking" className="text-slate-200 hover:text-white transition-colors">Ranking</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;