// nuxtjs vuex
import firebase from "@/plugins/Firebase";
import {convertDataFirebase} from "@/utils/Firebase/convert";

export const state = () => ({
  dataProduct: []
})

export const getters = {
  _dataProduct: _state => _state.dataProduct
}

export const mutations = {
  SET_DATA_PRODUCT(_state, _payload) {
    _state.dataProduct = _payload
  },
  sortNameDataProduct(_state, _payload){
    if(_payload){
      _state.dataProduct.sort((a, b) => a.name.localeCompare(b.name));
    }else{
      _state.dataProduct.sort((a, b) => b.name.localeCompare(a.name));
    }
  },
  sortDateDataProduct(_state, _payload){
    if(_payload){
      _state.dataProduct.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
    }else{
      _state.dataProduct.sort((a, b) => new Date(a.createDate) - new Date(b.createDate));
    }

  }
}

export const actions = {
  async getDataProduct({commit}) {
    try {
      firebase.database().ref('data-product')
        .on('value', (snapshot) => {
        commit('SET_DATA_PRODUCT', convertDataFirebase(Object.values(snapshot.val())))
      })
    } catch (error) {
      console.log(error)
    }
  }
}
