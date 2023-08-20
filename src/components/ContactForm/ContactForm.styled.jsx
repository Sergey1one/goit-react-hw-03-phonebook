import styled from 'styled-components'
import { Form } from 'formik'

export const Form2=styled(Form)`
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 16px;
  border-radius:${props=>props.theme.radii.sm};
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`

export const SubmitBtn=styled.button`
    background-color: ${props => props.theme.colors.lightGrey};
    width:100px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    border-radius:${props=>props.theme.radii.sm};
`