import styled from '@emotion/styled/macro';

export const Input = styled.input({
  display: 'block',
  width: '100%',
  padding: '.4em .8em',
  fontSize: '1em',
  color: '#555',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #ccc',
  borderRadius: '.3em',
  boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
  transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  ':focus': {
    borderColor: '#66afe9',
    outline: '0',
    boxShadow:
      'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
  },
});

export const Button = styled.button({
  display: 'inline-block',
  padding: '.4em .8em',
  fontSize: '1em',
  fontWeight: 'normal',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',
  border: '1px solid #ccc',
  borderRadius: '.3em',
  textDecoration: 'none',
  color: '#333',
  transition: 'box-shadow ease-in-out .15s',
  '&:hover,&:active,&:focus': {
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    outline: 0,
  },
});

export const PrimaryButton = styled(Button)({
  color: '#fff',
  backgroundColor: '#337ab7',
  borderColor: '#2e6da4',
  transition:
    'border-color ease-in-out .15s, background-color ease-in-out .15s',
  '&:hover,&:active,&:focus': {
    backgroundColor: '#286090',
    borderColor: '#204d74',
  },
});

export const Error = styled.div({
  padding: '.7em .5em',
  color: '#fff',
  backgroundColor: '#d75f68',
  border: '2px solid #b60101',
  borderRadius: '.2em',
  textAlign: 'center',
  fontWeight: 'bold',
});
