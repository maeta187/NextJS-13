'use client'
/** APIなどのErrorが発生すると自動的に表示されるページ */
export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <p>{error.message}</p>
      <button type='button' onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
