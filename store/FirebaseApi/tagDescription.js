// nuxtjs vuex
import firebase from "@/plugins/Firebase";
import {handleTagDes} from "@/utils/Firebase/convert";


export const state = () => ({
  dataTagDescription: [],
  dataTagDescriptionLocal: []
})

export const getters = {
  _dataTagDescription: _state => _state.dataTagDescription,
  _dataTagDescriptionLocal: _state => _state.dataTagDescriptionLocal
}


export const mutations = {
  SET_DATA_TAG_DESCRIPTION(_state, _payload) {
    _state.dataTagDescription = _payload
  },
  SET_DATA_TAG_DESCRIPTION_LOCAL(_state, _payload) {
    _state.dataTagDescriptionLocal = _payload
  },
  updateFormTagDes(_state, _payload){
    if(_payload.type === 'name'){
      _state.dataTagDescription[_payload.index].name = _payload.val
    }else{
      _state.dataTagDescription[_payload.index].value = _payload.val
    }
  },
  editFormTagDescription(_state, _payload) {
    if(_payload.option === 'add'){
      _state.dataTagDescription.push({name: '', value: ''})
    }else{
      _state.dataTagDescription.splice(_payload.index, 1)
    }
  }

}

export const actions = {
  async getDataTagDescription({commit}) {
    try {
      firebase.database().ref('data-tag-description')
        .on('value',  (snapshot) => {
          commit('SET_DATA_TAG_DESCRIPTION', handleTagDes(snapshot.val()))
        })
    } catch (error) {
      console.log(error)
    }
  },
  getDataTagDescriptionLocal({commit}, _payload){
    commit('SET_DATA_TAG_DESCRIPTION_LOCAL', _payload)
  }
}
