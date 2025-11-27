// src/pages/Dashboard.jsx
export default function Dashboard() {
  const token = localStorage.getItem('token');

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4">
          Dashboard
        </h1>
        {token ? (
          <p className="text-sm text-slate-600">
            Tu es connecte. Ton token est stocke dans le navigateur.
          </p>
        ) : (
          <p className="text-sm text-red-600">
            Aucun token trouve. Tu devrais te connecter.
          </p>
        )}
      </div>
    </div>
  );
}
