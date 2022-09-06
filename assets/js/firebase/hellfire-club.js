import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'
import app from './app.js'

export async function subscribeToHellfire(subscribe) {
    const db = getFirestore(app)
    const hellfireClubCollection =  collection(db, 'hellfire-club')
    const docRef = await addDoc(hellfireClubCollection, subscribe)
    return docRef.id
}
