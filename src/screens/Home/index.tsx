import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Appointments } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';

export function Home() {

    const [category, setCategory] = useState('')

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '04/11 às 22:25',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '04/11 às 22:25',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            <View style={styles.content}>
                <ListHeader title='Partidas agendadas' subtitle='Total 6' />

                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointments data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}