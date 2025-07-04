import React from 'react'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Vibe Coding with Milo
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Learn to code with style - designed for complete beginners
        </p>
        <button 
          onClick={() => window.open('https://app.courseau.co/projects/dd809d68-0fea-4d38-86d0-e028b55ca531/preview?mode=course', '_blank')}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          🚀 Start Learning Now
        </button>
      </div>
    </div>
  )
}

export default App
