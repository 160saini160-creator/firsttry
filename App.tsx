
import React, { useState, useEffect } from 'react';
import { AuthState, User, UserRole } from './types';
import { db } from './services/db';
import LoginPage from './pages/LoginPage';
import SalesmanDashboard from './pages/SalesmanDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.init();
    const savedUser = localStorage.getItem('mithai_session');
    if (savedUser) {
      setAuth({
        user: JSON.parse(savedUser),
        isAuthenticated: true
      });
    }
    setLoading(false);
  }, []);

  const handleLogin = (user: User) => {
    setAuth({ user, isAuthenticated: true });
    localStorage.setItem('mithai_session', JSON.stringify(user));
  };

  const handleLogout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('mithai_session');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <p className="text-stone-900 font-bold">Initializing System...</p>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <>
      {auth.user?.role === UserRole.ADMIN ? (
        <AdminDashboard user={auth.user} onLogout={handleLogout} />
      ) : (
        <SalesmanDashboard user={auth.user!} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;
