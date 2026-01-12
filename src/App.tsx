import { lazy, Suspense } from 'react'

const SuspendedComponent = lazy(() => import('./SuspendedComponent'))

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexGrow: '1',
      }}
    >
      <h1>Suspense demo</h1>

      <Suspense fallback="Loading...">
        <SuspendedComponent />
      </Suspense>
    </div>
  )
}

export default App
