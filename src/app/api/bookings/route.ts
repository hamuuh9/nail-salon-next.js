import { NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'bookings.json')

async function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await writeFile(dataDir + '/.gitkeep', '')
  }
  if (!existsSync(DATA_FILE)) {
    await writeFile(DATA_FILE, JSON.stringify([]))
  }
}

async function readBookings(): Promise<Booking[]> {
  await ensureDataFile()
  const data = await readFile(DATA_FILE, 'utf-8')
  return JSON.parse(data)
}

async function writeBookings(bookings: Booking[]) {
  await ensureDataFile()
  await writeFile(DATA_FILE, JSON.stringify(bookings, null, 2))
}

export async function GET() {
  try {
    const bookings = await readBookings()
    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time, notes } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const bookings = await readBookings()

    const newBooking: Booking = {
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone,
      service,
      date,
      time,
      notes: notes || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    bookings.push(newBooking)
    await writeBookings(bookings)

    return NextResponse.json(
      { message: 'Booking created successfully', booking: newBooking },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}