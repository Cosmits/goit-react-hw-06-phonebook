const { createSlice } = require('@reduxjs/toolkit');

const defContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defContacts,
  reducers: {
    setContactSlice(state, action) {
      //state.contacts = [...state.contacts, action.payload]
      state.contacts.push(action.payload);
    },
    delContactSlice(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },

  },
});

export const { setContactSlice, delContactSlice } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
