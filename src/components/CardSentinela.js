import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function CardSentinela({sentinela}){

const navigation = useNavigation();

return(

<TouchableOpacity onPress={()=> navigation.navigate("Detalhes dos Sentinelas", {sentinela})}
style={styles.sentinela}>

    <Text style={styles.ult}>{sentinela.ult}</Text>
            <Text style={styles.nome}>{sentinela.nome}</Text>
    


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
         marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'black',

    },
    ult: {
        fontSize: 40,
        marginRight: 15,
        color: "#fff",
    }
   
  
});
    