import { useState } from 'react';
import { Text, View, Button, Modal } from 'react-native';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "lightgray", padding: 60 }}>
      <Button title='Click here' onPress={() => setIsOpen(true)} color={'darkgray'} />
      <Modal visible={isOpen}>
        <View>
          <Text>This is modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
