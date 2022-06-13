import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';

export default ({ setContract ,value}) => {
    const [Contrato, setContrato] = useState([
        { label: 'CLT', value: 'CLT', color: '#C8563A' },
        { label: 'PJ', value: 'PJ', color: '#C8563A' },
        { label: 'Freelancer', value: 'Freelancer', color: '#C8563A' },

    ])
    return (
        <RNPickerSelect
            onValueChange={(value) => setContract(value)}
            items={Contrato}
            placeholder={{ label: 'Escolha Contratação desejada' }}
            IconColor={{ color: '#FFF', backgroundColor: 'blue' }}
            value={value}
            useNativeAndroidPickerStyle={true}
            fixAndroidTouchableBug={true}
        />
    )
}