import {
  BsEnvelopeAtFill,
  BsFillPersonFill,
  BsFillTelephoneFill
} from 'react-icons/bs'
import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: #ff6666;
  border-radius: 20px;
  height: 148px;
  margin-left: 128px;
  padding: 16px 38px;
  width: 638px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: auto;
    padding: 16px;
    margin-left: 0;
  }
`
export const ContactIcon = styled(BsFillPersonFill)`
  font-size: 28px;
  margin-right: 10px;
`
export const PhoneIcon = styled(BsFillTelephoneFill)`
  font-size: 24px;
  margin-right: 10px;
`
export const EmailIcon = styled(BsEnvelopeAtFill)`
  font-size: 24px;
  margin-right: 10px;
`

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`
