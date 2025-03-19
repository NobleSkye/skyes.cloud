import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud } from 'lucide-react';

export function DemoLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username === 'demo@demo.demo' && formData.password === 'demo') {
      sessionStorage.setItem('demo_username', formData.username);
      sessionStorage.setItem('demo_password', formData.password);
      navigate('/demo');
    } else {
      setError('Invalid credentials. Use demo@demo.demo / demo');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Cloud className="h-12 w-12 text-sky-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white">Demo Login</h2>
          <p className="text-gray-400 mt-2">Access the cloud hosting demo environment</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg">
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-sky-400 focus:outline-none"
                placeholder="demo@demo.demo"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-sky-400 focus:outline-none"
                placeholder="demo"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
            >
              Access Demo
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          © 2025 NobleSkyE. All rights reserved.
        </p>
      </div>
    </div>
  );
}