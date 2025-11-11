import React from 'react'
import type { MouseEventHandler, ReactNode } from 'react'

interface BoutonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Bouton: React.FC<BoutonProps> = ({
  children,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className,
}) => {

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Bouton