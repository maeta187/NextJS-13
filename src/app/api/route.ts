import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export async function GET(request: Request) {
  // paramsの値
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const id = searchParams.get('id')
  // headersの値
  const headersList = headers()
  // cookieの値
  const cookieStore = cookies()
  console.log(name)
  console.log(id)
  console.log('headersList', headersList)
  console.log('cookieStore', cookieStore)
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const res = await request.json()
  return NextResponse.json({ res })
}
