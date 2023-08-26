import { useState } from 'react'

const WorkoutForm = () => {

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    // POST (create) a new workout
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workout)
      })
      const jsonData = await response.json();

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      console.log('new workout added', jsonData);
    }
    else {
      setError(jsonData.error);
      console.log('error:', error)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label htmlFor="">Exercise Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

      <label htmlFor="">Load (in kg):</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

      <label htmlFor="">Reps:</label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} />

      <button>Add Workout</button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default WorkoutForm
