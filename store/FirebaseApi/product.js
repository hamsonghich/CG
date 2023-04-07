// nuxtjs vuex
import firebase from "@/plugins/Firebase";
import {convertDataFirebase} from "@/utils/Firebase/convert";
import {sortFn} from "@/utils/function/basic";

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
      sortFn(_state.dataProduct, 'name')
    }else{
      sortFn(_state.dataProduct, 'nameRev')
    }
  },
  sortDateDataProduct(_state, _payload){
    if(_payload){
      sortFn(_state.dataProduct, 'date')
    }else{
      sortFn(_state.dataProduct, 'dateRev')
    }

  },

  sortNameDataProductLevel2(_state, _payload){
    _state.dataProduct = _state.dataProduct.map(item => {
      if(item.key === _payload.key){
        if(_payload.isToggle){
          return {...item,'product-sub': sortFn(item['product-sub'],'name')}
        }else{
          return {...item,'product-sub': sortFn(item['product-sub'],'nameRev')}
        }

      }else{
        return item
      }
    })
  },
  sortDateDataProductLevel2(_state, _payload){
    _state.dataProduct = _state.dataProduct.map(item => {
      if(item.key === _payload.key){
        if(_payload.isToggle){
          return {...item,'product-sub': sortFn(item['product-sub'],'date')}
        }else{
          return {...item,'product-sub': sortFn(item['product-sub'],'dateRev')}
        }

      }else{
        return item
      }
    })
  },

  sortNameDataProductLevel3(_state, _payload){
   _state.dataProduct = _state.dataProduct.map(item => {
      if(item.key === _payload.keyId){
        return {...item, 'product-sub': item['product-sub'].map(itemC => {
          if(itemC.key === _payload.key){
            if(_payload.isToggle){
              return {...itemC, 'product-details': sortFn(itemC['product-details'], 'name')}
            }else{
              return {...itemC, 'product-details': sortFn(itemC['product-details'], 'nameRev')}
            }
          }else return itemC
          })}
      }else return item
    })
  },

  sortDateDataProductLevel3(_state, _payload){
    _state.dataProduct = _state.dataProduct.map(item => {
      if(item.key === _payload.keyId){
        return {...item, 'product-sub': item['product-sub'].map(itemC => {
            if(itemC.key === _payload.key){
              if(_payload.isToggle){
                return {...itemC, 'product-details': sortFn(itemC['product-details'], 'date')}
              }else{
                return {...itemC, 'product-details': sortFn(itemC['product-details'], 'dateRev')}
              }
            }else return itemC
          })}
      }else return item
    })
  },

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
