const initialState = {
  contacts: [],
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