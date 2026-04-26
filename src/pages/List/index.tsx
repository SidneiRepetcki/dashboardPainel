import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';

const List: React.FC = () => {

    const months = [
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
    ];

    const years = [
        { value: 2023, label: 2023 },
        { value: 2024, label: 2024 },
        { value: 2025, label: 2025 },
    ];

    return (
        <div>
            <Container>

                <ContentHeader title="Saídas" lineColor="#E44C4E">
                    <SelectInput options={months} />
                    <SelectInput options={years} />
                </ContentHeader>

                <Filters>
                    <button 
                            type="button"
                            className="tag-filter tag-filter-recurrent"
                        >
                        Recorrentes
                    </button>
                
                    <button 
                            type="button"
                            className="tag-filter tag-filter-eventual"
                        >
                        Eventuais
                    </button>
                </Filters>

                <Content>
                    <HistoryFinanceCard
                        tagColor="#E44C4E"
                        title="Conta de Luz"
                        subtitle="23/04/2023"
                        amount="R$ 130,00"
                    />

                </Content>

            </Container>
        </div>
    );
}

export default List;