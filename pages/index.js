import Head from 'next/head'

import EventList from '../components/events/event-list'

import { getFeaturedEvents } from '../dummy-data'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <EventList events={featuredEvents} />
      </main>
    </div>
  )
}

export default HomePage
