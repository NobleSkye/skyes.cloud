import { Server, Shield, Wifi, HardDrive } from 'lucide-react';

export function ServerStatus() {
  const statuses = [
    {
      icon: Server,
      name: 'Server Status',
      status: 'Running',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      name: 'Firewall',
      status: 'Active',
      color: 'text-green-400'
    },
    {
      icon: Wifi,
      name: 'Network',
      status: 'Connected',
      color: 'text-green-400'
    },
    {
      icon: HardDrive,
      name: 'Backups',
      status: 'Up to date',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statuses.map((item) => (
        <div key={item.name} className="bg-slate-800 p-4 rounded-lg flex items-center space-x-3">
          <item.icon className="h-6 w-6 text-sky-400" />
          <div>
            <div className="text-sm text-gray-400">{item.name}</div>
            <div className={`font-semibold ${item.color}`}>{item.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}