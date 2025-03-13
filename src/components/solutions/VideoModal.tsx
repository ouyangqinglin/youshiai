'use client';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-gray-950/75 transition-opacity" onClick={onClose} />

        <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl transition-all dark:bg-gray-900">
          <div className="relative">
            <button
              type="button"
              className="absolute right-2 top-2 z-10 rounded-md bg-white/10 p-2 text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <video className="w-full rounded-lg" controls autoPlay src={videoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
