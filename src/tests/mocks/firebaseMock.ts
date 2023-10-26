import { getAuth } from 'firebase/auth';

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(() => ({
      createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({})),
      signInWithEmailAndPassword: jest.fn(() => Promise.resolve({})),
      signOut: jest.fn(() => Promise.resolve()),
    })),
  };
});

export { getAuth };
