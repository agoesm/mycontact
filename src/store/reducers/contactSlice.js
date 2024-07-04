import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  addContactData,
  deleteContactData,
  editContactData,
  getContactData,
} from '@services/api';

export const fetchContact = createAsyncThunk('fetchContact', async () => {
  const contacts = await getContactData();
  return contacts;
});

export const addContact = createAsyncThunk('addContact', async payload => {
  const newContact = await addContactData(payload);
  return newContact;
});

export const editContact = createAsyncThunk('editContact', async payload => {
  const newContact = await editContactData(payload);
  return newContact;
});

export const deleteContact = createAsyncThunk('deleteContact', async id => {
  const newContact = await deleteContactData(id);
  return newContact;
});

const initialState = {
  data: [],
  status: 'idle',
  error: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    // get data contact
    builder
      .addCase(fetchContact.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // add contact
    builder
      .addCase(addContact.pending, state => {
        state.status = 'loading';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // edit contact
    builder
      .addCase(editContact.pending, state => {
        state.status = 'loading';
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = action.payload;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // delete contact
    builder
      .addCase(deleteContact.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = state.data.filter(
          contact => contact.id !== action.payload,
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {getData} = createSlice.actions;
export default contactSlice.reducer;
