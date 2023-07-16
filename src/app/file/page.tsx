'use client'

import { useState } from 'react'

export default function Page() {
  const [uploadFile, setUploadFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadFile(file)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!uploadFile) return
    const formData = new FormData()
    formData.append('file', uploadFile)

    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })
    const message = await res.json()
    console.log(message)
  }

  return (
    <div>
      <h1>ファイルアップロード</h1>
      <form onSubmit={handleSubmit}>
        <input name='fil' type='file' onChange={handleChange} />
        <button type='submit'>アップロード</button>
      </form>
    </div>
  )
}
