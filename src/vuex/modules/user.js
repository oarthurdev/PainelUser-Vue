const state = {
  main: {
    name: localStorage.getItem('nome'),
    position: localStorage.getItem('dataCadastro'),
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  }
}

const mutations = {

}

export default {
  state,
  mutations
}
