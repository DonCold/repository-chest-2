import React from 'react'
import Link from 'next/link'

import AppLayout from './../../components/AppLayout';

const Timeline = ({ username }) => {
  return (
    <AppLayout>
      <h1>This is the timeline of { username }</h1>
      <Link href="/"><a>Go home</a></Link>
    </AppLayout>
  )
}

Timeline.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/hello');
  return await response.json();
}

export default Timeline;
