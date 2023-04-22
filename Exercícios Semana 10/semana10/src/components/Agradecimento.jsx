import { Select } from '@mantine/core';

function Agradecimento() {
    return (
        <div>
            <Select
                data={['Pelo site', 'Pelo LinkedIn', 'Pelo Instagram']}
                withAsterisk
                label="Conte-nos: onde nos conheceu?"
                required
            />

        </div>
    );
}

export default Agradecimento;