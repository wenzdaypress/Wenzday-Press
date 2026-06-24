import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
  .from('categories')
  .select('id,name')

console.log('DATA:', JSON.stringify(data))
console.log('ERROR:', JSON.stringify(error))

const categories = data

  return (
    <main style={{ padding: '40px' }}>
      <h1>The Wenzday Press</h1>

      <h2>Categories</h2>

      <p>Categories count: {categories?.length ?? 0}</p>

      {error && (
        <p>{error.message}</p>
      )}

      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </main>
  )
}