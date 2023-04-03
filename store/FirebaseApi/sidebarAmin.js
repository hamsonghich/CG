import firebase from '~/plugins/Firebase/index.js'

export const state = () => ({
  dataSelected:{},
  dataSidebarFirebase: []
})

export const getters = {
  _dataSelected: _state => _state.dataSelected,
  _dataSidebarFirebase: _state => _state.dataSidebarFirebase
}

export const mutations = {
  SET_DATA_SIDEBAR_FIREBASE(state, _payload) {
    state.dataSidebarFirebase = _payload
  },
  SET_DATA_SELECTED_FIREBASE(state, _payload) {
    state.dataSelected = _payload
  }
}

export const actions = {
   async getDataSidebarFirebase({commit}) {
     try {
       await firebase.database().ref('side-bar-admin').on('value', (snapshot) => {
         if(snapshot.val()){
           commit('SET_DATA_SIDEBAR_FIREBASE', Object.values(snapshot.val()))
         }
       })
     }catch (error){
       console.log(error)
     }
   },

  getDataSelected({commit}, _payload){
    commit('SET_DATA_SELECTED_FIREBASE', _payload)
  }

}
