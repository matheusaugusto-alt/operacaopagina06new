'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.replace('/landing.html');
  }, []);

  return <p>Redirecionando...</p>;
}
