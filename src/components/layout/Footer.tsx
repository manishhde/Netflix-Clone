/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 px-4 md:px-12 text-gray-500">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex gap-6">
          <Instagram className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Twitter className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Youtube className="cursor-pointer hover:text-white transition-colors" size={24} />
          <Github className="cursor-pointer hover:text-white transition-colors" size={24} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium">
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">Audio Description</p>
            <p className="hover:underline cursor-pointer">Help Centre</p>
            <p className="hover:underline cursor-pointer">Gift Cards</p>
            <p className="hover:underline cursor-pointer">Media Centre</p>
          </div>
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">Investor Relations</p>
            <p className="hover:underline cursor-pointer">Jobs</p>
            <p className="hover:underline cursor-pointer">Terms of Use</p>
            <p className="hover:underline cursor-pointer">Privacy</p>
          </div>
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">Legal Notices</p>
            <p className="hover:underline cursor-pointer">Cookie Preferences</p>
            <p className="hover:underline cursor-pointer">Corporate Information</p>
            <p className="hover:underline cursor-pointer">Contact Us</p>
          </div>
          <div className="space-y-3">
            <p className="hover:underline cursor-pointer">Security</p>
            <p className="hover:underline cursor-pointer">Ad Choices</p>
            <p className="hover:underline cursor-pointer">Speed Test</p>
            <p className="hover:underline cursor-pointer">Service Status</p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <button className="border border-gray-600 px-2 py-1 text-[10px] hover:text-white hover:border-white transition-all uppercase tracking-wider">
            Service Code
          </button>
          <p className="text-[10px]">© 2024-2026 Lumina Stream, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
