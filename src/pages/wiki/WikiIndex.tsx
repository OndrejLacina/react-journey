import { Link } from "react-router-dom";

export default function WikiIndex() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-cyan-200">WikiCodeTips</h1>
      <p className="text-slate-300 mt-2">Osobní mini-encyklopedie.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Link
          className="rounded-xl border border-slate-800 p-4 hover:border-cyan-500/50"
          to="/wiki/react"
        >
          <div className="font-semibold text-cyan-200">React</div>
          <div className="text-sm text-slate-400 mt-1">
            props, useState, useEffect
          </div>
        </Link>

        <Link
          className="rounded-xl border border-slate-800 p-4 hover:border-purple-500/50"
          to="/wiki/typescript"
        >
          <div className="font-semibold text-purple-200">TypeScript</div>
          <div className="text-sm text-slate-400 mt-1">types, props, union</div>
        </Link>

        <Link
          className="rounded-xl border border-slate-800 p-4 hover:border-cyan-500/50"
          to="/wiki/tailwind"
        >
          <div className="font-semibold text-cyan-200">Tailwind</div>
          <div className="text-sm text-slate-400 mt-1">cheat sheet, tips</div>
        </Link>
      </div>
    </section>
  );
}
