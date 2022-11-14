'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export const EmailButton = ({ email }: { email: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-primary text-secondary font-humane text-2xl p-2 rounded-md"
        onClick={() => setOpen(true)}
        aria-label="Reveal email"
      >
        <span className="sr-only">Reveal email</span>
        <FaEnvelope />
      </button>
      {open && (
        <div className="flex flex-col items-center">
          <div className="bg-primary text-secondary font-humane text-2xl p-2 rounded-md">
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <button
            className="bg-primary text-secondary font-humane text-2xl p-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
