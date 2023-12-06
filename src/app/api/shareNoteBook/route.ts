// /pages/api/shareNote.js

import { NextApiResponse, NextApiRequest } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://iehsmuxjlrzfwordijiy.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllaHNtdXhqbHJ6ZndvcmRpaml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzkzNjcsImV4cCI6MjAxNjkxNTM2N30.8hmf2igDjxqcd6WH0LgxLhhzp1z5ll4TZ1hTEiKYRYM');
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Método não permitido
  }

  try {
    const { noteId } = req.body;

    // Aqui você pode adicionar lógica para gerar um link partilhável
    // Vou usar um exemplo simples apenas para ilustrar
    const shareableLink = `https://tinkwrite.vercel.app/notebook/${noteId}`;

    console.log('link partilhavel: ',shareableLink);
    return res.status(200).json({ link: shareableLink });
  } catch (error) {
    console.error('Erro ao gerar link partilhável:', error);
    return res.status(500).json({ error: 'Erro interno' });
  }
}
