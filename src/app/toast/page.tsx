import ToastContent from '@/app/toast/ToastContent'
import { ToastProvider } from '@/context/ToastProvider'

export default function Page() {
  return (
    <ToastProvider>
      <ToastContent />
    </ToastProvider>
  )
}
