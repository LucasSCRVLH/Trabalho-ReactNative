
import { StyleSheet, Text, View, Button, TouchableOpacity, requireNativeComponent, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Inicio(){
 const navigation = useNavigation();
   
   return(

  <View style={styles.container}>

    <Text style={styles.sentinelas}>Sentinelas Valorant</Text>
    <Image 
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/217d5ea0-623d-40b1-9b31-027b904a5f15/de9c52a-19ec990d-41b6-4279-a12e-b2dd9927c3a1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxN2Q1ZWEwLTYyM2QtNDBiMS05YjMxLTAyN2I5MDRhNWYxNVwvZGU5YzUyYS0xOWVjOTkwZC00MWI2LTQyNzktYTEyZS1iMmRkOTkyN2MzYTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXe_xHM9mdzyX_MqWpIcvo9_62-Vmc-xp7n8ygxwYw0' }}
        style={styles.image}
      />
     
     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lista de Sentinelas')}
      >
        <Text style={styles.buttonText}>Ir para lista de Sentinelas</Text>
      </TouchableOpacity>



    </View>

   );
 

}

const styles = StyleSheet.create({
  
  image: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },
  
  
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentinelas: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },

  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    
  },
buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
});