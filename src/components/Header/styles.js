import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  
  padding: 0 80px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 24px;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 18px;
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`