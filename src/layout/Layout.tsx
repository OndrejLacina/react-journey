import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800">
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-6">
          <div className="font-semibold tracking-wide">
            <span className="text-blue-400">React Journey</span>
          </div>

          <div className="ml-auto flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-200"
              }
            >
              CV
            </NavLink>
            <NavLink
              to="/wiki"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-200"
              }
            >
              Wiki
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-slate-400 flex justify-between">
          <span>© {new Date().getFullYear()} Ondřej Lacina</span>
          <span className="text-slate-500">React • TS • Tailwind • Vite</span>
        </div>
      </footer>
    </div>
  );
}
