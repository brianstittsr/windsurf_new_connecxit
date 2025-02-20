import { useState, useEffect } from 'react';
import { User } from '@/lib/auth';

interface AuthState {
  user: User | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    status: 'loading',
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setAuthState({
            user: data.user,
            status: 'authenticated',
          });
        } else {
          setAuthState({
            user: null,
            status: 'unauthenticated',
          });
        }
      } catch (error) {
        setAuthState({
          user: null,
          status: 'unauthenticated',
        });
      }
    };

    checkAuth();
  }, []);

  const update = async () => {
    const response = await fetch('/api/auth/me');
    if (response.ok) {
      const data = await response.json();
      setAuthState({
        user: data.user,
        status: 'authenticated',
      });
    }
  };

  return { ...authState, update };
}
