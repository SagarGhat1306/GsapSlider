import React, { useState } from 'react';
import { 
  LayoutDashboard, BarChart3, Mail, Bell, 
  Folder, Users, Settings, ChevronDown, 
  FileText, Database, UserPlus, Shield, Key, ChevronLeft 
} from 'lucide-react'; // Using lucide-react for icons

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50 hover:text-black'}`}>
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const NavGroup = ({ title, icon: Icon, children, isOpenDefault = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div className="mt-4">
      <div 
        className="flex items-center justify-between px-3 py-2 text-gray-500 cursor-pointer hover:text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && <div className="ml-9 mt-1 space-y-1">{children}</div>}
    </div>
  );
};

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col relative">
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-lg">Acet Labs</span>
          </div>
          <button className="absolute -right-3 top-7 bg-white border border-gray-200 rounded-md p-1 shadow-sm">
            <ChevronLeft size={14} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={BarChart3} label="Analytics" />
          <SidebarItem icon={Mail} label="Messages" />
          <SidebarItem icon={Bell} label="Notifications" />

          <NavGroup title="Content" icon={Folder}>
            <SidebarItem icon={FileText} label="Documents" active />
            <SidebarItem icon={Database} label="Database" />
          </NavGroup>

          <NavGroup title="Team" icon={Users}>
            <SidebarItem icon={Users} label="Members" />
            <SidebarItem icon={UserPlus} label="Invitations" />
          </NavGroup>

          <NavGroup title="Settings" icon={Settings}>
            <SidebarItem icon={Settings} label="General" />
            <SidebarItem icon={Shield} label="Security" />
            <SidebarItem icon={Key} label="API Keys" />
          </NavGroup>
        </nav>
      </aside>

      {/* MAIN DASHBOARD */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-gray-200/50 border border-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>

          {/* Large Content Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[600px] bg-gray-200/50 border border-gray-100 rounded-2xl animate-pulse" />
            <div className="h-[600px] bg-gray-200/50 border border-gray-100 rounded-2xl animate-pulse" />
          </div>

        </div>
      </main>

    </div>
  );
}