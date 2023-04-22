import { TextInput, Button, Group, Box, Grid, NumberInput, Title } from '@mantine/core';

function DadosPessoaisForm() {
    return (
        <div>
            <TextInput
                withAsterisk
                label="Nome:"
                placeholder="Informe o Nome"
                required
            />
            <TextInput
                withAsterisk
                label="E-mail:"
                placeholder="email@email.com"
                required
            />

        </div>
    );
}

export default DadosPessoaisForm;