import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';



export default function SentinelaDetalhes(){
const routes= useRoute()
const {sentinela}= routes.params

return(

    <View style={styles.caixa}>

        <Text style={styles.nome}>Detalhes da ult do Sentinela</Text>
        <Text style={styles.ult}></Text>
            <Text>Nome do Sentinela: {sentinela.nome}  </Text>
            <Text>Ult: {sentinela.ult}</Text>
            <Text>Vantagem:{sentinela.vantagem} </Text>
            <Text>fraqueza:{sentinela.fraqueza} </Text>
    
    </View>
);
    

 }
 const styles = StyleSheet.create({
   nome:{



    },

    ult:{

    },

    caixa:{},

});