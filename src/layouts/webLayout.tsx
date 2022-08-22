import React from 'react'
import {Outlet} from 'react-router-dom'

type Props = {}

const webLayout = (props: Props) => {
  return (
    <div>webLayout
        <main>
        <Outlet />
        </main>
    </div>
  )
}

export default webLayout