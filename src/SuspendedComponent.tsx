import type { FC } from 'react'

type Status = 'pending' | 'error' | 'success'

let status: Status = 'pending'
let result: string | null = null

const suspender = new Promise((resolve) => {
  setTimeout(() => resolve('Done'), 3000)
}).then((data) => {
  status = 'success'
  result = data as string
})

const fetchData = () => {
  if (status === 'pending') {
    throw suspender
  }
  if (status === 'error') {
    throw result
  }
  return result
}

const SuspendedComponent: FC = () => {
  const data = fetchData()

  return <div>{data}</div>
}

export default SuspendedComponent
