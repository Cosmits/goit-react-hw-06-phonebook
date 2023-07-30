const defContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const initialState = {
  contacts: defContacts,
  filter: ''
}

// {type: 'contacts/setContacts', payload: {}
// {type: 'contacts/delContacts', payload: id
// {type: 'contacts/seFilter', payload: ''

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/setContacts': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
      // togglerTest: !state.togglerTest
    }

    case 'contacts/delContacts': {
      const filtered = state.contacts.filter(contact => contact.id !== action.payload)
      return {
        ...state,
        contacts: [...filtered]
      }
    }

    case 'contacts/seFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
}

export const setContacts = payload => {
  return {
    type: 'contacts/setContacts',
    payload
  }
}

export const delContacts = payload => {
  return {
    type: 'contacts/delContacts',
    payload
  }
}


export const seFilter = payload => {
  return {
    type: 'contacts/seFilter',
    payload
  }
}