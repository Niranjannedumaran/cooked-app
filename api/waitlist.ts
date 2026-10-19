const emailPattern = /^\S+@\S+\.\S+$/

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!emailPattern.test(email)) return response.status(400).json({ error: 'Enter a valid email address.' })

  const apiKey = process.env.RESEND_API_KEY
  // Resend permits its test sender only when the notification is delivered to
  // the account owner's verified email address. Use a verified domain sender
  // later by setting WAITLIST_FROM_EMAIL in Vercel.
  const from = process.env.WAITLIST_FROM_EMAIL || 'onboarding@resend.dev'
  const recipient = process.env.WAITLIST_RECIPIENT || 'niranjanpersonal1@gmail.com'
  if (!apiKey) return response.status(503).json({ error: 'Waitlist signup is temporarily unavailable.' })

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `COOKED Waitlist <${from}>`,
      to: [recipient],
      reply_to: email,
      subject: 'New COOKED waitlist signup',
      text: `${email} joined the COOKED waitlist.`,
    }),
  })

  if (!resendResponse.ok) return response.status(502).json({ error: 'Unable to join the waitlist right now.' })
  return response.status(200).json({ ok: true })
}
