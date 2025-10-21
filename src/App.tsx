import { useEffect, useMemo, useState } from 'react'
import heros from './SuperHeros.json'

// Type pour le JSON (facultatif mais propre)
type Hero = { id: number; name: string }

export default function App() {
  // Étape 1 — message + variable nom
  const nom = 'Toto'

  // Étape 2 — useState compteur
  const [compteur, setCompteur] = useState(0)

  // Bonus — recherche
  const [recherche, setRecherche] = useState('')

  // Étape 3 — useEffect: maj du titre quand le compteur change
  useEffect(() => {
    document.title = `Compteur: ${compteur}`
    // nettoyage pas nécessaire ici
  }, [compteur])

  // Étape 4 — nombre total de héros (depuis JSON)
  const total = (heros as Hero[]).length

  // Étape 5 — filtrage dynamique via .filter + .map
  const listeFiltree = useMemo(() => {
    const q = recherche.trim().toLowerCase()
    if (!q) return heros as Hero[]
    return (heros as Hero[]).filter(h => h.name.toLowerCase().includes(q))
  }, [recherche])

  return (
    <div style={styles.container}>
      {/* Étape 1 */}
      <h1>Bonjour {nom}, je découvre React !</h1>

      {/* Étape 2 — compteur + boutons */}
      <section style={styles.card}>
        <h2>Compteur</h2>
        <p style={styles.counter}>{compteur}</p>
        <div style={styles.row}>
          <button onClick={() => setCompteur(c => c + 1)}>+</button>
          <button onClick={() => setCompteur(0)}>Réinitialiser</button>
        </div>
        <small>(Regarde l’onglet du navigateur : le titre change avec la valeur)</small>
      </section>

      {/* Étapes 4 & 5 — JSON + affichage + bonus recherche */}
      <section style={styles.card}>
        <h2>Super-héros</h2>
        <p>Il y a {total} super-héros dans la base.</p>

        {/* Bonus — champ de recherche */}
        <input
          placeholder="Rechercher un héros…"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={styles.input}
        />

        <ul>
          {listeFiltree.map(h => (
            <li key={h.id}>{h.name}</li>
          ))}
          {listeFiltree.length === 0 && <li>Aucun résultat.</li>}
        </ul>
      </section>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: { maxWidth: 720, margin: '32px auto', padding: 16, lineHeight: 1.5 },
  card: { border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, marginTop: 16 },
  row: { display: 'flex', gap: 8 },
  counter: { fontSize: 32, margin: '8px 0' },
  input: { padding: '8px 12px', margin: '8px 0', width: '100%', boxSizing: 'border-box' },
}
