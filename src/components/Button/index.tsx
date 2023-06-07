'use client'

type ButtonProps = {
  text: string
  handleClick: () => void
}

const Button = (props: ButtonProps) => {
  const { text, handleClick } = props

  return (
    <div>
      <button type='button' onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
