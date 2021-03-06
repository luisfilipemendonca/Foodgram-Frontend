import styled, { css } from "styled-components";

type InputBorderType = {
  isInvalid: boolean;
};

export const RadioGroupContainer = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const RadioGroupLabel = styled.h3`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.magenta};
`;

export const RadioGroupOptions = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const RadioInputGroup = styled.div`
  position: relative;
`;

export const InputRadioBullet = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.magentaOpacity};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.colors.magentaOpacity};
    border-radius: 50%;
    opacity: 0;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;

  &:checked + ${InputRadioBullet}:before {
    opacity: 1;
  }

  &:focus + ${InputRadioBullet} {
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.magenta};
  }
`;

export const InputRadioLabel = styled.label`
  margin-left: 8px;
`;

export const InputContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const InputLabel = styled.label`
  display: block;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputBorder = styled.span<InputBorderType>`
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "red" : "#ccc")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-color: red;
    transition: 0.5s ease;
    transition-property: width, height, border-radius;
  }

  &:before {
    top: -1px;
    left: -1px;
  }

  &:after {
    bottom: -1px;
    right: -1px;
  }
`;

const defaultInputStyle = css`
  width: 100%;
  border: none;
  background: transparent;
  padding: 8px;
  font-size: 1.2rem;

  &:focus + ${InputBorder}::before, &:focus + ${InputBorder}::after {
    width: 100%;
    height: 100%;
  }

  &:focus + ${InputBorder}::before {
    border-left: 2px solid ${({ theme }) => theme.colors.magenta};
    border-top: 2px solid ${({ theme }) => theme.colors.magenta};
  }

  &:focus + ${InputBorder}::after {
    border-right: 2px solid ${({ theme }) => theme.colors.magenta};
    border-bottom: 2px solid ${({ theme }) => theme.colors.magenta};
  }
`;

export const Input = styled.input`
  ${defaultInputStyle}
`;

export const InputInfo = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMedium};
`;

export const InputError = styled.p`
  font-size: 0.8rem;
  color: red;
`;

export const TextareaStyled = styled.textarea`
  ${defaultInputStyle}
`;

export const InputGroupContainer = styled.div<InputBorderType>`
  border: ${({ isInvalid }) => isInvalid && "1px solid red"};

  & > *:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const InputFileDescription = styled(InputLabel)``;

export const InputFileLabel = styled.label<InputBorderType>`
  display: block;
  width: 100%;
  height: 300px;
  border: 2px dashed ${({ isInvalid }) => (isInvalid ? "red" : "#ccc")};
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FilePreviewImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
