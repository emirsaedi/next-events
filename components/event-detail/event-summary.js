import styles from './event-summary.module.css'

const EventSummary = props => {
  const { title } = props

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  )
}

export default EventSummary
