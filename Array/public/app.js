document.addEventListener('DOMContentLoaded', function() {
    console.log(firebase)
    const firestore = firebase.firestore();
    firestore.settings({ timestampInSnapshots: true });

    const col = firestore.collection('carts');
})