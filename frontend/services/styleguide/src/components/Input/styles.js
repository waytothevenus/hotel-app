import styled from "styled-components";

export const InputContainer = styled.div`
  &.input {
    --inputFontSize: calc((16 / 16) * 1rem);
    --inputFocusColor: rgb(var(--rgbPrimary));
    --inputUnderlineColor: rgb(var(--rgbText) / 0.2);

    position: relative;
    display: flex;
    flex-direction: column;
  }

  &.input--error {
    --inputUnderlineColor: rgb(var(--rgbError));
  }

  .input__content {
    position: relative;
    display: flex;
  }

  .input__element {
    display: block;
    color: var(--colorTextBody);
    box-shadow: inset 0 -2px 0 0 var(--inputUnderlineColor);
    transition: background-color 5000s linear 0s;
    width: 100%;
    font-size: var(--inputFontSize);
    line-height: var(--lineHeightBody);
    padding: var(--spaceL) 0 var(--spaceM);
    overflow-x: hidden;

    &:-internal-autofill-selected {
      -webkit-text-fill-color: var(--colorTextBody);
      box-shadow: 0 0 0px 1000px rgb(var(--rgbText) / 0.1) inset;
    }

    /* Needs to be a single selector to work in safari */
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--colorTextBody);
      box-shadow: 0 0 0px 1000px rgb(var(--rgbText) / 0.1) inset;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-contacts-auto-fill-button:hover {
      background-color: rgb(var(--rgbPrimary));
    }

    @media (--mediaReduceMotion) {
      @nest #root & {
        transition: background-color 5000s linear 0s;
      }
    }
  }

  .input__underline {
    background: var(--inputFocusColor);
    transform: scale3d(0, 1, 1);
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;

    transform-origin: left;

    @media (--mediaUseMotion) {
      & {
        transition: transform var(--durationM) var(--bezierFastoutSlowin);
      }
    }
  }

  .input__underline--focused {
    transform: scale3d(1, 1, 1);
  }

  .input__label {
    color: rgb(var(--rgbText) / 0.8);
    position: absolute;
    top: var(--spaceL);
    left: 0;
    display: block;
    cursor: text;
    transform-origin: top left;
    transition: color var(--durationM) ease;

    @media (--mediaUseMotion) {
      & {
        transition: transform var(--durationM) var(--bezierFastoutSlowin),
          color var(--durationM) ease;
      }
    }
  }

  .input__label--has-value,
  .input__label--focused {
    color: rgb(var(--rgbText) / 0.54);
    transform: scale(0.8) translateY(calc(var(--spaceL) * -1));
  }

  .input__error {
    transition-property: opacity;
    transition-duration: var(--durationM);
    transition-timing-function: var(--bezierFastoutSlowin);
    height: var(--height);
    opacity: 0;

    @media (--mediaUseMotion) {
      & {
        transition-property: height, opacity;
      }
    }
  }

  .input__error--entering,
  .input__error--entered {
    opacity: 1;
  }

  .input__error-message {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--spaceXS);
    padding-top: var(--spaceS);
    color: rgb(var(--rgbError));
  }
`;
