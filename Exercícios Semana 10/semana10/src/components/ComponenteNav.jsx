import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import DadosPessoaisForm from './DadosPessoaisForm';
import EnderecoForm from './EnderecoForm';
import Agradecimento from './Agradecimento';
import { SCPassosContainer } from "./Passos.style";

function ComponenteNav() {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Dados pessoais" description="Dados pessoais">
          <DadosPessoaisForm/>
        </Stepper.Step>
        <Stepper.Step label="Endereco" description="Endereço">
          <EnderecoForm/>
        </Stepper.Step>
        <Stepper.Step label="Agradecimento" description="Agradecimento">
         <Agradecimento/>
        </Stepper.Step>
        <Stepper.Completed>
          Obrigado por preencher o Formulário
        </Stepper.Completed>
      </Stepper>
    

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>voltar</Button>
        <Button onClick={nextStep}>Avançar</Button>
      </Group>
    </>
  );
}

export default ComponenteNav;