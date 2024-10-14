import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function CardSentinela({sentinela}){

const navigation = useNavigation();

return(

<TouchableOpacity onPress={()=> navigation.navigate("Detalhes dos Sentinelas", {sentinela})}
style={styles.sentinela}>

    <Text style={styles.ult}>{sentinela.ult}</Text>
            <Text style={styles.nome}>{sentinela.nome}</Text>
            <Image source={sentinela.img} style={styles.img}/>


</TouchableOpacity>
);



}

const styles = StyleSheet.create({
   
   nome: {
    color: "#fff",
    fontSize: 25,
  
   },
   
   
    sentinela: {
        flexDirection: 'column',
         marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        padding: 16,
        margin: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    ult: {
        fontSize: 40,
      
        color: "#fff",
    },
    img:{
        width: 250,
        height: 450,
        alignSelf:"center",
    },
  
});
    