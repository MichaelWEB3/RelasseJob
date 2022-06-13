import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';

export default ({ setModalidadee ,value}) => {


    const [Modalidade, setModalidade] = useState([
        { label: 'Presencial', value: 'Presencial', color: '#C8563A' },
        { label: 'Remoto', value: 'Remoto', color: '#C8563A' },
        { label: 'Flex', value: 'Flex', color: '#C8563A' },

    ])


    return (
        <RNPickerSelect
            onValueChange={(value) => setModalidadee(value)}
            items={Modalidade}
            placeholder={{ label: 'Escolha Modalidade desejada' }}
            IconColor={{ color: '#FFF', backgroundColor: 'blue' }}
            value={value}
            useNativeAndroidPickerStyle={true}
            fixAndroidTouchableBug={true}
        />
    )
}