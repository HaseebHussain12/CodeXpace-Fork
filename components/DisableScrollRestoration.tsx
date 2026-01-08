"use client";

import { useEffect } from 'react';

export default function DisableScrollRestoration() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}
