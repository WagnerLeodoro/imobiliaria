import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Listagem from '../screens/Listagem';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Group>
                <Screen name="home" component={Home} />
                <Screen name="cadastro" component={Cadastro} />
                <Screen name="listagem" component={Listagem} />
            </Group>
        </Navigator>
    )
}