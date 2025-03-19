import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const generateRandomData = (min: number, max: number, count: number) => {
  return Array.from({ length: count }, () => 
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const labels = Array.from({ length: 20 }, (_, i) => `${i}m ago`).reverse();

export function ResourceMonitor() {
  const [cpuData, setCpuData] = useState(generateRandomData(20, 80, 20));
  const [ramData, setRamData] = useState(generateRandomData(40, 70, 20));
  const [diskData] = useState(generateRandomData(25, 35, 20));
  const [networkData, setNetworkData] = useState(generateRandomData(10, 90, 20));

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuData(prev => [...prev.slice(1), Math.floor(Math.random() * 60) + 20]);
      setRamData(prev => [...prev.slice(1), Math.floor(Math.random() * 30) + 40]);
      setNetworkData(prev => [...prev.slice(1), Math.floor(Math.random() * 80) + 10]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#94a3b8'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#94a3b8',
          maxRotation: 0
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const createChartData = (data: number[], color: string) => ({
    labels,
    datasets: [
      {
        data,
        borderColor: color,
        backgroundColor: `${color}33`,
        fill: true,
        tension: 0.4
      }
    ]
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">CPU Usage</h3>
        <div className="h-[200px]">
          <Line data={createChartData(cpuData, '#3b82f6')} options={chartOptions} />
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Memory Usage</h3>
        <div className="h-[200px]">
          <Line data={createChartData(ramData, '#10b981')} options={chartOptions} />
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Disk Usage</h3>
        <div className="h-[200px]">
          <Line data={createChartData(diskData, '#f59e0b')} options={chartOptions} />
        </div>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Network Traffic</h3>
        <div className="h-[200px]">
          <Line data={createChartData(networkData, '#8b5cf6')} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}