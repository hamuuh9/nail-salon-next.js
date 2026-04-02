import { NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface User {
  id: string
  email: string
  name: string
  password: string // In a real app, this should be hashed
  createdAt: string
}

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json')

async function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await writeFile(dataDir + '/.gitkeep', '')
  }
  if (!existsSync(USERS_FILE)) {
    await writeFile(USERS_FILE, JSON.stringify([]))
  }
}

async function readUsers(): Promise<User[]> {
  await ensureDataFile()
  const data = await readFile(USERS_FILE, 'utf-8')
  return JSON.parse(data)
}

async function writeUsers(users: User[]) {
  await ensureDataFile()
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2))
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, name, action } = body

    if (action === 'register') {
      // Register new user
      if (!email || !password || !name) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      }

      const users = await readUsers()
      
      // Check if user already exists
      const existingUser = users.find((u) => u.email === email)
      if (existingUser) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        )
      }

      const newUser: User = {
        id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        email,
        name,
        password, // In a real app, hash this password
        createdAt: new Date().toISOString(),
      }

      users.push(newUser)
      await writeUsers(users)

      // Return user without password
      const { password: _, ...userWithoutPassword } = newUser
      return NextResponse.json(
        { message: 'User registered successfully', user: userWithoutPassword },
        { status: 201 }
      )
    }

    if (action === 'login') {
      // Login user
      if (!email || !password) {
        return NextResponse.json(
          { error: 'Missing email or password' },
          { status: 400 }
        )
      }

      const users = await readUsers()
      const user = users.find((u) => u.email === email && u.password === password)

      if (!user) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        )
      }

      // Return user without password
      const { password: _, ...userWithoutPassword } = user
      return NextResponse.json(
        { message: 'Login successful', user: userWithoutPassword },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}