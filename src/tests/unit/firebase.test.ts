import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';


jest.mock('firebase/auth', () => {
    const original = jest.requireActual('firebase/auth');
    return {
        ...original,
        getAuth: jest.fn(() => ({
            signInWithEmailAndPassword: signInWithEmailAndPassword,
            createUserWithEmailAndPassword: createUserWithEmailAndPassword,
            signOut: jest.fn(),
        })),
    };
});

describe('Тесты "firebase/auth', () => {
    let firebaseApp: FirebaseApp;
    let auth: Auth;

    beforeAll(() => {
        const firebaseConfig = {
            apiKey: 'mock',
            authDomain: 'mock',
            projectId: 'mock',
        };

        firebaseApp = initializeApp(firebaseConfig);
        auth = getAuth(firebaseApp);
    });

    test('Создание пользователя с валидными данными', async () => {
        const createUserWithEmailAndPasswordMock = jest.fn().mockResolvedValue({
            user: {
                uid: 'test-uid',
                email: 'test@example.com',
            },
        } as UserCredential);
        (createUserWithEmailAndPassword as jest.Mock) = createUserWithEmailAndPasswordMock;
        const userCredential = await createUserWithEmailAndPassword(auth, 'test@example.com', 'password123');
        expect(userCredential.user.uid).toBe('test-uid');
        expect(userCredential.user.email).toBe('test@example.com');
    });

    test('Получение ошибки при создании с невалидными данными', async () => {
        const error = new Error('User creation failed');
        const createUserWithEmailAndPasswordMock = jest.fn().mockRejectedValue(error);
        (createUserWithEmailAndPassword as jest.Mock) = createUserWithEmailAndPasswordMock;
        await expect(createUserWithEmailAndPassword(auth, 'test@example.com', 'invalidPassword')).rejects.toThrow('User creation failed');
    });
    test('Успешный вход в аккаунт с валидными данными', async () => {
        const signInWithEmailAndPasswordMock = jest.fn().mockResolvedValue({
            user: {
                uid: 'test-uid',
                email: 'test@example.com',
            },
        } as UserCredential);
        (signInWithEmailAndPassword as jest.Mock) = signInWithEmailAndPasswordMock;
        const userCredential = await signInWithEmailAndPassword(auth, 'test@example.com', 'password123');
        expect(userCredential.user.uid).toBe('test-uid');
        expect(userCredential.user.email).toBe('test@example.com');
    });
    test('Получение ошибки при входе в аккаунт с невалидными данными', async () => {
        const error = new Error('User creation failed');
        const signInWithEmailAndPasswordMock = jest.fn().mockRejectedValue(error);
        (signInWithEmailAndPassword as jest.Mock) = signInWithEmailAndPasswordMock;
        await expect(createUserWithEmailAndPassword(auth, 'test@example.com', 'invalidPassword')).rejects.toThrow('User creation failed');
    });
});
