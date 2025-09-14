'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Header } from './header';

export function PortalHeader({ show }: { show: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !show) return null; // don't render while loading
  return createPortal(<Header />, document.body);
}
