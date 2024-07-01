import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;

    input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

    }
    input[type=number] {
      -moz-appearance: textfield;
      appearance: textfield;

    }
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 288px auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const Input = styled.input`
  padding: 8px 8px 8px 20px;
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 50px;
  background-color: white;
`

export const Title = styled.h1`
  display: block;
  font-size: 2.2rem;
  margin-top: 25px;
  margin-left: 74px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 20px;
  }
`

export const Info = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 4px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-left: 20px;
  }
`

export const EditButton = styled.button`
  margin: 10px;
  padding: 8px 28px;
  border-radius: 80px;
  border: none;
  background-color: #242fc9;
  color: white;
  cursor: pointer;
`

export const SaveButton = styled(EditButton)`
  background-color: #242fc9;
`

export const DeleteCancelButton = styled(EditButton)`
  background-color: #ff0000;
`

export default EstiloGlobal
