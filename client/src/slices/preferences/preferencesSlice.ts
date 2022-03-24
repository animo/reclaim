import { createSlice } from '@reduxjs/toolkit'

interface PreferencesState {
  darkMode: boolean
}

const initialState: PreferencesState = {
  darkMode: false,
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      localStorage.setItem('theme', action.payload ? 'dark' : 'light')

      if (action.payload) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      state.darkMode = action.payload ?? !state.darkMode
    },
  },
  extraReducers: (builder) => {
    builder.addCase('dashboard/RESET', (state) => {
      state.darkMode = localStorage.getItem('theme') === 'dark'
    })
  },
})

export const { setDarkMode } = preferencesSlice.actions

export default preferencesSlice.reducer
