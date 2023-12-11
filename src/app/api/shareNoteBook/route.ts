// /pages/api/shareNote.js

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient('https://iehsmuxjlrzfwordijiy.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaHNtdXhqbHJ6ZndvcmRpaml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzkzNjcsImV4cCI6MjAxNjkxNTM2N30.8hmf2igDjxqcd6WH0LgxLhhzp1z5ll4TZ1hTEiKYRYM');
 
export const runtime = "edge";

export async function POST(req: Request) {

  try {
    
    const { noteId } = req.json();

    // Aqui você pode adicionar lógica para gerar um link partilhável
    // Vou usar um exemplo simples apenas para ilustrar
    const shareableLink = `https://tinkwrite.vercel.app/notebook`;

    console.log('link partilhavel: ',shareableLink);
    return NextResponse.json({ link: shareableLink });
  } catch (error) {
    console.error('Erro ao gerar link partilhável:', error);
    return NextResponse.json({ error: 'Erro interno' });
  }
}
