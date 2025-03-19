import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Cloud, Server, Shield, Zap, Database, Clock, CreditCard, ArrowRight } from 'lucide-react';
import { DemoPage } from './pages/DemoPage';
import { DemoLogin } from './pages/DemoLogin';

function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-sky-400" />
          <span className="text-2xl font-bold text-white">skyes.cloud</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-gray-300">
          <Link to="/solutions" className="hover:text-sky-400">Solutions</Link>
          <Link to="/pricing" className="hover:text-sky-400">Pricing</Link>
          <Link to="/docs" className="hover:text-sky-400">Documentation</Link>
          <Link to="/contact" className="hover:text-sky-400">Contact</Link>
        </div>
        <Link to="/signup" className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Cloud Infrastructure
          <span className="text-sky-400"> Made Simple</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Deploy your applications with confidence using our reliable, scalable, and secure cloud infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/signup')}
            className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="h-5 w-5" />
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Pricing
          </button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Server className="h-8 w-8 text-sky-400" />}
            title="High Performance"
            description="Enterprise-grade hardware ensuring maximum performance for your applications."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-sky-400" />}
            title="Advanced Security"
            description="Industry-leading security measures to protect your data and applications."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-sky-400" />}
            title="Instant Deployment"
            description="Deploy your applications in seconds with our streamlined platform."
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 text-sky-400" />}
            title="Managed Databases"
            description="Fully managed database solutions for all your storage needs."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-sky-400" />}
            title="99.9% Uptime"
            description="Guaranteed uptime with redundant infrastructure and constant monitoring."
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8 text-sky-400" />}
            title="Pay As You Go"
            description="Flexible pricing that scales with your usage. No hidden fees."
          />
        </div>
      </section>

      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="99.9%*" text="Uptime" />
            <StatCard number="150+" text="Countries" />
            <StatCard number="50k+" text="Customers" />
            <StatCard number="24/7" text="Support" />
          </div>
        </div>
      </section>
    </>
  );
}

function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Ideation</h2>
          <p className="text-sky-400 text-4xl font-bold mb-6">$15<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">2 CPU Cores</li>
            <li className="text-gray-300">8GB RAM</li>
            <li className="text-gray-300">100GB SSD Storage</li>
            <li className="text-gray-300">1TB Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-sky-400 transform scale-105">
          <h2 className="text-2xl font-bold text-white mb-4">Startup</h2>
          <p className="text-sky-400 text-4xl font-bold mb-6">$35<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">4 CPU Cores</li>
            <li className="text-gray-300">16GB RAM</li>
            <li className="text-gray-300">200GB SSD Storage</li>
            <li className="text-gray-300">3TB Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Growth</h2>
          <p className="text-sky-400 text-4xl font-bold mb-6">$75<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">8 CPU Cores</li>
            <li className="text-gray-300">32GB RAM</li>
            <li className="text-gray-300">400GB SSD Storage</li>
            <li className="text-gray-300">5TB Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Established</h2>
          <p className="text-sky-400 text-4xl font-bold mb-6">$139<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">14 CPU Cores</li>
            <li className="text-gray-300">64GB RAM</li>
            <li className="text-gray-300">1TB NVMe Storage</li>
            <li className="text-gray-300">8TB Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Expansion</h2>
          <p className="text-sky-400 text-4xl font-bold mb-6">$225<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">20 CPU Cores</li>
            <li className="text-gray-300">128GB RAM</li>
            <li className="text-gray-300">2TB NVMe Storage</li>
            <li className="text-gray-300">12TB Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Enterprise</h2>
          <p className="text-gray-300">starting at</p>
          <p className="text-sky-400 text-4xl font-bold mb-6">$400+<span className="text-lg text-gray-400">/mo</span></p>
          <ul className="space-y-4 mb-8">
            <li className="text-gray-300">36 CPU Cores</li>
            <li className="text-gray-300">256GB RAM</li>
            <li className="text-gray-300">4TB NVMe Storage</li>
            <li className="text-gray-300">Unlimited* Transfer</li>
          </ul>
          <Link to="/signup" className="block text-center bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}




function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd85d624b-6bee-4c63-856e-8bc0e7fd597b ', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'contact@skyes.cloud'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h1>
      <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-xl">
        {status === 'success' ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">Message Sent!</h2>
            <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-sky-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white h-32 focus:border-sky-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-center">Something went wrong. Please try again later.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Create Your Account</h1>
      <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-xl">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input type="email" className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input type="password" className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input type="password" className="w-full bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <button className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

function DocsPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Documentation</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
          <ul className="space-y-3">
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Quick Start Guide</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Platform Overview</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Basic Concepts</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">API Reference</h2>
          <ul className="space-y-3">
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">REST API</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">SDK Documentation</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">API Authentication</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Tutorials</h2>
          <ul className="space-y-3">
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Deployment Guide</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Database Setup</li>
            <li className="text-sky-400 hover:text-sky-300 cursor-pointer">Security Best Practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SolutionsPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Cloud Solutions</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Compute</h2>
          <p className="text-gray-300 mb-6">
            Scalable compute resources designed for any workload. From basic web apps to complex microservices.
          </p>
          <Link to="/signup" className="text-sky-400 hover:text-sky-300">Learn more →</Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Storage</h2>
          <p className="text-gray-300 mb-6">
            Secure and reliable storage solutions. Object storage, block storage, and managed databases.
          </p>
          <Link to="/signup" className="text-sky-400 hover:text-sky-300">Learn more →</Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Networking</h2>
          <p className="text-gray-300 mb-6">
            Global network infrastructure. Load balancing, CDN, and DDoS protection included.
          </p>
          <Link to="/signup" className="text-sky-400 hover:text-sky-300">Learn more →</Link>
        </div>
        <div className="bg-slate-800 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
          <p className="text-gray-300 mb-6">
            Enterprise-grade security features. SSL certificates, firewall rules, and access controls.
          </p>
          <Link to="/signup" className="text-sky-400 hover:text-sky-300">Learn more →</Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 hover:border-sky-400 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StatCard({ number, text }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-sky-400 mb-2">{number}</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="h-6 w-6 text-sky-400" />
            <span className="text-xl font-bold text-white">skyes.cloud</span>
          </Link>
          <div className="text-sm">
            © 2025 <a href="https://nobleskye.dev" className="text-sky-400 hover:underline">NobleSkye. All rights reserved.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/demo/login" element={<DemoLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;