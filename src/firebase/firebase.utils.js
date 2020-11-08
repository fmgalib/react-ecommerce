import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDVTc7dlrpzlBrd2Nw7F5z9qHwd3vZLF5w',
	authDomain: 'reactecommerce-db.firebaseapp.com',
	databaseURL: 'https://reactecommerce-db.firebaseio.com',
	projectId: 'reactecommerce-db',
	storageBucket: 'reactecommerce-db.appspot.com',
	messagingSenderId: '832249503781',
	appId: '1:832249503781:web:1f4e894080f4b3802d5fcc',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
