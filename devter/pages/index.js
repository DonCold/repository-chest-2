import Link from 'next/link'

import styles from '../styles/Home.module.css'
import AppLayout from './../components/AppLayout';

export default function Home() {
  return (
    <>
      <AppLayout>
        <h1>devter</h1>
        <nav>
          <Link href="/timeline"><a>devies</a></Link>
        </nav>
      </AppLayout>
    </>
  )
}
