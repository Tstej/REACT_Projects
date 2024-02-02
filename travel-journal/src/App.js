import React, { useState } from 'react';
import './App.css';

const JournalEntry = ({ entry }) => (
  <div className="journal-entry">
    <h3>{entry.location}</h3>
    <p>{entry.date}</p>
    <p>{entry.description}</p>
  </div>
);

const JournalForm = ({ onAddEntry }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleAddEntry = () => {
    if (location && date && description) {
      onAddEntry({ location, date, description });
      setLocation('');
      setDate('');
      setDescription('');
    }
  };

  return (
    <div className="journal-form">
      <h2>Add New Entry</h2>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={handleAddEntry}>Add Entry</button>
    </div>
  );
};

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Journal</h1>
      </header>
      <main>
        <JournalForm onAddEntry={addEntry} />
        <div className="journal-entries">
          {entries.map((entry, index) => (
            <JournalEntry key={index} entry={entry} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
