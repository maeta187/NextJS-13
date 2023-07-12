'use client'

type ButtonProps = {
  text: string
  type?: 'button' | 'submit' | 'reset'
  handleClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { text, type = 'button', handleClick } = props

  return (
    <div>
      <button type={type} onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
