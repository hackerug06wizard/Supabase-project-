import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://sxlzurclzmjngrzhcmld.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4bHp1cmNsem1qbmdyemhjbWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MzcwODYsImV4cCI6MjA4NjMxMzA4Nn0.fdUAJZekG8BVHprKzrv-ySzrDSpsJ2Ct7vYneK58VuA'

const supabase = createClient(supabaseUrl, supabaseKey)

async function loadNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')

  if (error) {
    console.error(error)
    return
  }

  const app = document.querySelector('#app')
  app.innerHTML = data.map(n => `<p>${n.title}</p>`).join('')
}

loadNotes()
