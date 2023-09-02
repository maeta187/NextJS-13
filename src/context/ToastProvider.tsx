'use client'

import { createContext, useContext, useState } from 'react'
import Toast from '@/app/@components/Toast'

type ToastType = 'success' | 'error'

interface ToastContext {
  showToast: (message: string, type?: ToastType) => void
  closeToast: () => void
}

export const ToastContext = createContext<ToastContext>({
  showToast: () => {},
  closeToast: () => {}
})

export const useToast = () => {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMessage, setToastMessage] = useState<string>('')
  const [toastType, setToastType] = useState<ToastType>('success')
  const [isShowToast, setShowToast] = useState<boolean>(false)

  const showToast = (message: string, type: ToastType = 'success') => {
    setToastMessage(message)
    setToastType(type)

    setShowToast(true)
    // 5秒後にToastを非表示にする
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  const closeToast = () => {
    setShowToast(false)
  }

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {isShowToast && <Toast message={toastMessage} type={toastType} />}
      {children}
    </ToastContext.Provider>
  )
}
