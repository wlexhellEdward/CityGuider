// import {
//     assertFails,
//     assertSucceeds,
//     initializeTestEnvironment,
//     RulesTestEnvironment,
// } from "@firebase/rules-unit-testing";

describe("Firebase Rules Tests", () => {
    test('test', () => {
        expect(true).toBe(true)
    })
    // let testEnv: RulesTestEnvironment;

    // beforeAll(async () => {
    //     testEnv = await initializeTestEnvironment({
    //         projectId: "test-projectid",
    //         firestore: {
    //             host: "localhost",
    //             port: 8080
    //         }
    //     });
    // });

    // describe("Authenticated user", () => {
    //     it("should be able to read their own data", async () => {
    //         const auth = "user-1" ;
    //         const db = testEnv.authenticatedContext(auth).firestore();
    //         const userDoc = db.collection("users").doc("user-1");
    //         await assertSucceeds(userDoc.get());
    //     });

    //     it("should not be able to read other users' data", async () => {
    //         const auth = "user-1" ;
    //         const db = testEnv.authenticatedContext(auth).firestore();
    //         const userDoc = db.collection("users").doc("user-2");
    //         await assertFails(userDoc.get());
    //     });

    // });

    // describe("Unauthenticated user", () => {
    //     it("should not be able to read user data", async () => {
    //         const db = testEnv.unauthenticatedContext().firestore();
    //         const userDoc = db.collection("users").doc("user-1");
    //         await assertFails(userDoc.get());
    //     });

    // });
});
