// app/api/sendMessage/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const botToken = '5406382183:AAHvbQNPclzCJnacvRztGUrBdcbilfvfvZU';
  const chatId = '1333653828';
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const { name, email, message } = await req.json();

    // ساخت پیام
    const text = `
    📨 پیام جدید:
    👤 نام: ${name}
    📧 ایمیل: ${email}
    📝 پیام: ${message}
    `;

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ success: false, error: data.description }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
