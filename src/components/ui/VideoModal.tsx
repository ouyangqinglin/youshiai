'use client';

import { Dialog } from '@headlessui/react';

import Icon from './Icon';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-4xl rounded-2xl bg-white">
          <button
            onClick={onClose}
            className="absolute -right-4 -top-4 flex size-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:text-gray-900"
          >
            <Icon name="x" className="size-5" />
          </button>

          <div className="aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
