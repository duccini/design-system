import { colors } from '@duccini-ignite/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          backgroundColor: color,
          padding: '2rem',
          marginBottom: '0.75rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            fontSize: '1.5rem',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
