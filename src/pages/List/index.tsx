import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {

    const options = [
        { value: 'Rodrigo', label: 'Rodrigo' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ];

    return (
        <div>
            <Container>

                <ContentHeader title="Saídas" lineColor="#E44C4E">
                    <SelectInput options={options} />
                </ContentHeader>

                <Content>
                    <HistoryFinanceCard
                        tagColor="#E44C4E"
                        title="Conta de Luz"
                        subtitle="23/04/2026"
                        amount="R$ 130,00"
                    />

                </Content>

            </Container>
        </div>
    );
}

export default List;