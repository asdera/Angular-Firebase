document.addEventListener('DOMContentLoaded', function() {
    const firestore = firebase.firestore();
    console.log(firestore)
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);

    const col = firestore.collection('carts');

    const query = col.where('items', 'array-contains', 'cat')

    query.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            console.log(doc.id, doc.data())
        })
    })
})