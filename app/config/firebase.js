
import { initializeApp } from 'firebase'
// import { addItemSuccess, removeItemSuccess, goOnline, goOffline } from './actions/items'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCVJEyjjIqciFOFmpKr6oEorlPml-LhHLM",
    authDomain: "homeapp-4fe1e.firebaseapp.com",
    databaseURL: "https://homeapp-4fe1e.firebaseio.com",
    projectId: "homeapp-4fe1e",
    storageBucket: "homeapp-4fe1e.appspot.com",
    messagingSenderId: "1075857736847"
})

export const itemsRef = firebaseApp.database().ref('items')
// const connectedRef = firebaseApp.database().ref('.info/connected')

export function syncFirebase(store) {
  itemsRef.on('child_added', (snapshot) => {
    store.dispatch(addItemSuccess(snapshot.val()))
  })

  itemsRef.on('child_removed', (snapshot) => {
    store.dispatch(removeItemSuccess(snapshot.val().id))
  })

//   connectedRef.on('value', snap => {
//     if (snap.val() === true) {
//       store.dispatch(goOnline())
//     } else {
//       store.dispatch(goOffline())
//     }
//   })
}

export function doFireTest(test){
    firebaseApp.database().ref('/test').set(test)
}