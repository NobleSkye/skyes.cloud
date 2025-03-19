import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal } from '../components/demo/Terminal';
import { ResourceMonitor } from '../components/demo/ResourceMonitor';
import { ServerStatus } from '../components/demo/ServerStatus';

export function DemoPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem('demo_username');
    const password = sessionStorage.getItem('demo_password');
    
    if (username === 'demo@demo.demo' && password === 'demo') {
      setIsAuthenticated(true);
    } else {
      navigate('/demo/login');
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Cloud Control Panel</h1>
        <button
          onClick={() => {
            sessionStorage.removeItem('demo_username');
            sessionStorage.removeItem('demo_password');
            navigate('/demo/login');
          }}
          className="text-gray-400 hover:text-white"
        >
          Logout
        </button>
      </div>

      <div className="space-y-8">
        <ServerStatus />
        
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-6">System Resources</h2>
          <ResourceMonitor />
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-6">Terminal Access</h2>
          <Terminal />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 NobleSkyE. All rights reserved.
      </div>
    </div>
  );
}