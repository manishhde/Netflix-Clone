/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { UserProfile } from '../../types';
import { Plus, X, Pencil } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProfileSelectionProps {
  profiles: UserProfile[];
  onSelect: (profile: UserProfile) => void;
  onAddProfile: () => void;
  onDeleteProfile: (id: string) => void;
  onEditProfile: (id: string) => void;
}

export function ProfileSelection({ profiles, onSelect, onAddProfile, onDeleteProfile, onEditProfile }: ProfileSelectionProps) {
  const [isManaging, setIsManaging] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 md:space-y-12 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-white tracking-wide">
          {isManaging ? 'Manage Profiles:' : "Who's watching?"}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 cursor-pointer group relative"
              onClick={() => isManaging ? onEditProfile(profile.id) : onSelect(profile)}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-white transition-all shadow-2xl">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isManaging && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Pencil size={20} className="text-white" />
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteProfile(profile.id);
                      }}
                      className="absolute top-1 right-1 p-1 bg-brand-red hover:bg-brand-red/80 rounded-full transition-colors z-10"
                      title="Delete Profile"
                    >
                      <X size={14} className="text-white" />
                    </button>
                  </div>
                )}
                {!isManaging && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                )}
              </div>
              <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors flex items-center gap-2">
                {profile.name}
                {isManaging && <Pencil size={14} />}
              </span>
            </motion.div>
          ))}

          {!isManaging && (
            <div 
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={onAddProfile}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-transparent group-hover:border-white bg-white/5 flex items-center justify-center transition-all">
                <Plus size={48} className="text-gray-400 group-hover:text-white" />
              </div>
              <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors">
                Add Profile
              </span>
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsManaging(!isManaging)}
          className={cn(
            "mt-8 border px-8 py-2 transition-all text-sm uppercase tracking-[0.2em]",
            isManaging 
              ? "bg-white text-black border-white hover:bg-gray-200" 
              : "text-gray-500 border-gray-600 hover:text-white hover:border-white"
          )}
        >
          {isManaging ? 'Done' : 'Manage Profiles'}
        </button>
      </motion.div>
    </div>
  );
}
