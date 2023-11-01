import { getAuth } from 'firebase/auth';

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(() => ({
      signInWithEmailAndPassword: jest.fn((email, password) => {
        if (email === 'test@example.com' && password === 'validPassword') {
          return Promise.resolve({ user: { email, uid: '123' } });
        } else {
          return Promise.reject(new Error('Invalid credentials'));
        }
      }),
      signOut: jest.fn(() => Promise.resolve()),
    })),
  };
});

export { getAuth };

