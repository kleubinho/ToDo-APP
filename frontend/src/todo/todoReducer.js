// ELE RECEBE O ESTADO ATUAL E UMA ACTION, E SEMPRE QUE UMA ACTION FOR EXECUTADA OS 
// REDUCERS DA SUA APLICAÇÃO SÃO CHAMADOS E VOCÊ DIZ SE QUER MUDAR O ESTADO

const INITIAL_STATE = {
  description: "Ler Livro",
  list: [
    {
      _id: 1,
      description: "Pagar fatura do cartão",
      done: true,
    },
    {
      _id: 2,
      description: "Reunião com a equipe as 10:00",
      done: false,
    },
    {
      _id: 3,
      description: "Consulta médica na terça depois do almoço",
      done: false,
    },
  ],
};



export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
            case 'TODO_CHANGED':
              return {...state, list: action.payload.data}
            default:
                return state
    }
}