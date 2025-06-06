import { useAppSelector, useAppDispatch } from './hooks/redux'
import { increment, decrement, incrementByAmount } from './redux/store/slices/counterSlice'
import Header from './components/Header/Header'
import './App.scss'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Redux Counter Test</h1>
        <h2>Count: {count}</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Add 5
          </button>
        </div>
      </div>
    </>
  )
}

export default App
