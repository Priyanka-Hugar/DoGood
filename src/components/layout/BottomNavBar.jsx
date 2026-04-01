import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Image, Plus, MessageCircle, User, Users } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/Home' },
  { icon: Image, label: 'Gallery', path: '/Gallery' },
  { icon: Plus, label: 'Add', path: '/AddPost', isCenter: true },
  { icon: MessageCircle, label: 'Messages', path: '/Messages' },
  { icon: User, label: 'Profile', path: '/Profile' },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-0.5 -mt-3"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md border-2 transition-all ${
                  isActive
                    ? 'bg-dogood-blue border-dogood-blue text-white'
                    : 'bg-white border-dogood-blue text-dogood-blue'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-semibold ${isActive ? 'text-dogood-blue' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-0.5 py-1 px-3"
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-dogood-blue' : 'text-muted-foreground'}`} />
              <span className={`text-[10px] font-semibold ${isActive ? 'text-dogood-blue' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}