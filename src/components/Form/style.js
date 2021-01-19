import styled from 'styled-components';
import iconArrowTop from '@/assets/images/global/icon_arrow_top.svg';
import iconArrowBottom from '@/assets/images/global/icon_arrow_bottom.svg';

export const SelectSC = styled.div`
  position: relative;
  background-color: #fff;
  border: 2px solid #000;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;

  .select-selected{
    &::after{
      position: absolute;
      content: "";
      top: 13px;
      right: 13px;
      width: 14px;
      height: 14px;
      background-image: url(${iconArrowBottom});
      background-repeat: no-repeat;
    }

    &.select-arrow-active{
      &::after{
        background-image: url(${iconArrowTop});
      }
    }
  }

  .select-items{
    width: calc(100% + 4px);
    position: absolute;
    background-color: white;
    border: 2px solid black;
    top: 100%;
    left: -2px;
    right: 0;
    z-index: 99;

    & > div{
      padding: 8px 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.8);
      transition: all .3s ease-in;

      &:hover{
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    & > div:last-child{
      border-bottom: none;
    }
  }

  .select-hide{
    display: none;
  }
`;

export const ButtonSC = styled.div`
  a{
    display: block;
    color: black;
    background-color: white;
    border: 2px solid black;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 38px;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover{
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
