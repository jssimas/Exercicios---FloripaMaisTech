import { TextInput, Button, Group, Box, Grid, NumberInput, Title } from '@mantine/core';

function EnderecoForm() {
    return (
        <div>
            <Grid ml={10} mr={10}>
            <Grid.Col span={6}>    
            <TextInput
                withAsterisk
                label="Logradouro:"
                placeholder="Rua/Avenida/Servidão . . ."
                required
            />
            </Grid.Col>
            <Grid.Col span={6}>
            <NumberInput
                withAsterisk
                label="Número:"
                placeholder="Informe o Número"
                required
            />
            </Grid.Col>

            <Grid.Col span={6}>  
            <TextInput
                label="Complemento:"
                placeholder="Ex: Apto 205 C"
            />
             </Grid.Col>

             <Grid.Col span={6}> 
            <TextInput
                withAsterisk
                label="Bairro:"
                placeholder="Informe o Bairro"
                required
            />
             </Grid.Col>
            <Grid.Col span={4}> 
            <TextInput
                withAsterisk
                label="Cidade:"
                placeholder="Informe a Cidade"
                required
            />
            </Grid.Col>
            <Grid.Col span={4}> 
            <TextInput
                withAsterisk
                label="CEP:"
                placeholder="Informe o CEP"
                required
            />
            </Grid.Col>
            <Grid.Col span={4}> 
            <TextInput
                withAsterisk
                label="Estado:"
                placeholder="Informe a Sigla do Estado"
                required
            />
            </Grid.Col>
          </Grid>  
        </div>
    );
}

export default EnderecoForm;