import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

export const useUsersData = () => {
  const [userData, setUserData] = useState<{
    users: User[];
    isLoading: boolean;
    error: boolean | null;
  }>({
    users: [],
    isLoading: true,
    error: false,
  });

  const { isLoading, error, users } = userData;

  useEffect(() => {
    if (!isLoading) return;

    let messageController: NodeJS.Timeout | null = null;
    let fetchController = new AbortController();

    const fetchPromise = fetch(API_URL, {
      signal: fetchController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          setUserData({ users: [], isLoading: false, error: true });
          return;
        }

        return res.json();
      })
      .then(({ users }) => {
        setUserData({ users, isLoading: false, error: null });
      });

    const messagePromise = new Promise(() => {
      messageController = setTimeout(() => {
        fetchController.abort();
        setUserData({ users: [], isLoading: false, error: true });
      }, 5000);
    });

    Promise.race([fetchPromise, messagePromise]);

    return () => {
      if (fetchController !== null) {
        fetchController.abort();
      }
      if (messageController) clearTimeout(messageController);
    };
  }, [isLoading]);

  const onRetry = () => {
    setUserData({ users: [], isLoading: true, error: false });
  };

  return {
    users,
    isLoading,
    error,
    retry: onRetry,
  };
};
