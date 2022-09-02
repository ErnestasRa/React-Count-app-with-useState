import React from 'react';
import Button from './button-element';
import InputElement from './input-element';
import classes from './button.module.scss';
import counterClasses from './counter-example.module.scss';

const CounterExample = () => {
  //       ↙ - kitamasis naudojimui: atvaizdavimui, arba perdavimui į kitus komponenetus
  const [count, setCount] = React.useState<number>(0);
  //                 ↖               ↖      ↖  - pradinė reikšmė, sukuriama komponento kūrimo metu
  //                   ↖               ↖  - speciali funkcija, naudojama funkciniuose komponentuose,
  //                     ↖               ↖  išlaikyti reikšmei tarp komponento persikrovimų.
  //                       ↖
  //                         ↖ - funkcija, skirta keisti reikšmei ir perkrauti komponentui.
  const [step, setStep] = React.useState<number>(3);

  return (
    <div className={counterClasses.counterContainer}>
      <h2>{`Count: ${count}`}</h2>

      <InputElement
        step={step}
        onChange={(e) => setStep(e.target.valueAsNumber)}
        className={counterClasses.counterContainer}
      />

      <div className={counterClasses.buttonContainer}>
        <Button type="button" className={classes.buttonSecondary} onClick={() => setCount(count - step)}>
          Mazinti
        </Button>

        <Button type="button" className={classes.buttonPrimary} onClick={() => setCount(count + step)}>
          Didinti
        </Button>
      </div>
    </div>
  );
};

export default CounterExample;
