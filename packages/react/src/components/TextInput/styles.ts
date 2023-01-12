import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:diabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamilt: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamilt: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:placeholder': {
    color: '$gray400',
    letterSpacing: 1,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
