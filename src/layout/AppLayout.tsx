type AppLayoutProps = { children: React.ReactNode };

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
