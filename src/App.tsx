import React, { useState } from 'react';
import { MapPin, Navigation2, Clock, Wallet, Shield, Star, Menu, X, Bell } from 'lucide-react';
import Navbar from './components/Navbar';
import BookingPanel from './components/BookingPanel';
import Map from './components/Map';
import EmergencyButton from './components/EmergencyButton';
import UserProfile from './components/UserProfile';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onProfileClick={() => setIsProfileOpen(true)} />
      
      <main className="relative h-[calc(100vh-4rem)]">
        <Map />
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="container mx-auto h-full">
            <div className="relative h-full">
              {/* Booking Panel */}
              <div className={`absolute top-4 left-4 pointer-events-auto transition-transform duration-300 ${isBookingOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
                <BookingPanel onClose={() => setIsBookingOpen(false)} />
              </div>

              {/* Toggle Booking Button */}
              <button 
                onClick={() => setIsBookingOpen(true)}
                className={`absolute top-4 left-4 bg-white shadow-lg rounded-full p-3 pointer-events-auto transition-opacity duration-300 ${isBookingOpen ? 'opacity-0' : 'opacity-100'}`}
              >
                <Navigation2 className="w-6 h-6 text-indigo-600" />
              </button>

              {/* Emergency Button */}
              <div className="absolute bottom-8 right-8 pointer-events-auto">
                <EmergencyButton />
              </div>
            </div>
          </div>
          
        </div>
      </main>

      {/* User Profile Slide-over */}
      <UserProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  );
}

export default App;