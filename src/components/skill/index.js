import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select';

export default ({ setSkilll,value }) => {
    const [SKill, setSkill] = useState([
        { label: 'Front-End', value: 'Front-End', color: '#C8563A' },
        { label: 'Web developer', value: 'Web developer', color: '#C8563A' },
        { label: 'FullStack developer', value: 'FullStack developer', color: '#C8563A' },
        { label: 'React Native', value: 'React Native', color: '#C8563A' },
        { label: 'React', value: 'React', color: '#C8563A' },
        { label: 'UI/UX', value: 'UI/UX', color: '#C8563A' },
    ])

    return (
        <RNPickerSelect
            onValueChange={(value) => setSkilll(value)}
            items={SKill}
            placeholder={{ label: 'Escolha Skill desejada' }}
            IconColor={{ color: '#FFF', backgroundColor: 'blue' }}
            value={value}
            useNativeAndroidPickerStyle={true}
            fixAndroidTouchableBug={true}
        />

    )
}