'use client';

import { useState } from 'react';
import { PlusCircle, Loader2 } from 'lucide-react';

interface QuestData {
  name: string;
  location: string;
  reward: string;
  description: string;
  status: 'Active' | 'Completed' | 'Cancelled';
  checkIns: number;
}

export function CreateQuestForm({ onQuestCreated }: { onQuestCreated: (quest: QuestData) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const questData: QuestData = {
      name: formData.get('name') as string,
      location: formData.get('location') as string,
      reward: formData.get('reward') as string,
      description: formData.get('description') as string,
      status: 'Active',
      checkIns: 0,
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onQuestCreated(questData);
    setIsLoading(false);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 font-medievalSharp bg-amber-700 text-amber-50 rounded-lg hover:bg-amber-800 transition-colors"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> New Quest
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-md bg-amber-50/95 border-2 border-amber-200 rounded-lg p-6 backdrop-blur-sm">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-amber-900 hover:text-amber-700"
        >
          ×
        </button>
        
        <h2 className="font-medievalSharp text-2xl text-amber-900 mb-6">
          Create New Quest
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block font-medievalSharp text-amber-900" htmlFor="name">
              Quest Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 rounded-md border border-amber-200 bg-amber-100/50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter quest name..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medievalSharp text-amber-900" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              required
              className="w-full px-3 py-2 rounded-md border border-amber-200 bg-amber-100/50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter quest location..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medievalSharp text-amber-900" htmlFor="reward">
              Reward
            </label>
            <input
              id="reward"
              name="reward"
              required
              className="w-full px-3 py-2 rounded-md border border-amber-200 bg-amber-100/50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter reward details..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medievalSharp text-amber-900" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-amber-200 bg-amber-100/50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              placeholder="Enter quest description..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 font-medievalSharp bg-amber-700 text-amber-50 rounded-lg hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...
              </span>
            ) : (
              'Create Quest'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}