import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -25%;
  top: 40px;
  width: 280px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 100;
  padding: 4px 0;
  cursor: default;
  overflow: hidden;
  transition: 0.3s ease;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transform-origin: top;
  transform: ${({ active }) => active ? 'scaleY(1)' : 'scaleY(.3)'};

  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
  }
`
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: .3s ease;
  padding: 12px 16px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0,0,0,.3);
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0,0,0,.3);
  }
`

export const DropDownIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DropDownItemTitle = styled.h2`
  color: #0f1624;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
`

export const DropDownItemDesc = styled.p`
  color: #0f1624;
  opacity: 0.5;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
`