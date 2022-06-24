import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBa_coOLzZBKEvvNdN5Wyh4_rR1TgKSF0E',
  authDomain: 'ecommerce-d1b1a.firebaseapp.com',
  projectId: 'ecommerce-d1b1a',
  storageBucket: 'ecommerce-d1b1a.appspot.com',
  messagingSenderId: '36926912715',
  appId: '1:36926912715:web:1086c7ee2d2dd3e34f034e',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const crearDocumentoUsuarios = async (usuario, informacionAdicional) => {
  if (!usuario) return;
  const usuarioDocRef = doc(db, 'usuarios', usuario.uid);
  const usuarioSnapshot = await getDoc(usuarioDocRef);

  if (!usuarioSnapshot.exists()) {
    const { displayName: nombre, email } = usuario;
    const fecha_creacion = new Date();

    try {
      setDoc(usuarioDocRef, {
        nombre,
        email,
        fecha_creacion,
        ...informacionAdicional,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return usuarioDocRef;
};

export const createUserWithEmailPasswordForFirestore = async (
  email,
  password
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailPasswordForFirestore = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUsuario = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = async (callback) => {
  return await onAuthStateChanged(auth, callback);
};
