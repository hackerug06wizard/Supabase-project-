import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_ANON_KEY'

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
