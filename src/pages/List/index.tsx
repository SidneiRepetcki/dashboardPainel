import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const List: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'},
    ];

    return ( 
        <div>
            <Container>
                <ContentHeader title="Saídas" lineColor="#E44C4E">
                    <SelectInput options={options}/>
                </ContentHeader>
            </Container>
        </div>
    );
}

export default List;