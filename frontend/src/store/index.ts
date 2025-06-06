import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    // Add your slice reducers here
    counter: counterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch