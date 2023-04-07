import firebase from '~/plugins/Firebase'

export const postDataFirebase = (params, postData) => {
  const newKey = firebase.database().ref().child(params).push().key;
  let updates = {};
  updates[`/${params}/` + newKey] = {...postData, key: newKey}
  return firebase.database().ref().update(updates, (error) => {
    if (error) {
      console.log(error)
    } else {
      console.log("Data saved successfully!")
    }
  });
}

export const setDataFirebase = (params, id, postData) => {
firebase.database().ref(`${params}/` + id).set(postData, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("Data edit successfully!")
  }
});
}

export const deleteDataFirebase = (params, id) => {
  if(id === null){
    firebase.database().ref(`${params}`)?.remove()
  }else{
    firebase.database().ref(`${params}/`+ id)?.remove()
  }

}
