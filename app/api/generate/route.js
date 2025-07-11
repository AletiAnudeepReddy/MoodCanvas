// app/api/generate/route.js
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  const { mood } = await req.json()

  try {
    const quoteResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Generate a short motivational quote based on the user\'s mood.',
        },
        {
          role: 'user',
          content: `My mood is: ${mood}`,
        },
      ],
    })

    const quote = quoteResponse.choices[0].message.content

    const imageResponse = await openai.images.generate({
      prompt: `An artistic wallpaper representing the mood: ${mood}`,
      n: 1,
      size: '1024x1024',
    })

    const imageUrl = imageResponse.data[0].url

    return Response.json({ quote, imageUrl })
  } catch (err) {
    console.error('[OPENAI ERROR]', err)
    return new Response(JSON.stringify({ error: 'OpenAI error occurred' }), { status: 500 })
  }
}
