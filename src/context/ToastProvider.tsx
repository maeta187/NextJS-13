'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Toast from '@/app/_components/Toast'

type ToastType = 'success' | 'warning' | 'error'

interface ToastContext {
  showToast: (message: string, type: ToastType) => void
  closeToast: () => void
}

export const ToastContext = createContext<ToastContext>({
  showToast: () => {},
  closeToast: () => {}
})

export const useToast = () => {
  return useContext(ToastContext)
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<string>('')
  const [toastType, setToastType] = useState<ToastType>('success')
  const [isShowToast, setShowToast] = useState<boolean>(false)

  const showToast = (message: string, type: ToastType) => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
  }

  const closeToast = () => {
    setShowToast(false)
  }

  useEffect(() => {
    if (!isShowToast) return
    // 5秒後にToastを非表示にする
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }, [isShowToast])

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {isShowToast && <Toast message={toastMessage} toastType={toastType} />}
      {children}
    </ToastContext.Provider>
  )
}
