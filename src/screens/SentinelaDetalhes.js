import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';



export default function SentinelaDetalhes(){
const routes= useRoute()
const {sentinela}= routes.params

return(

    <View style={styles.caixa}>

        <Text style={styles.nome}>Detalhes:</Text>
           
              <Image source={sentinela.ultImg} style={styles.img}/>
           
           
            <Text style={styles.sentinela}>Nome do Sentinela: {sentinela.nome}  </Text>

             
            
            <Text style={styles.ult}>Ult: {sentinela.ult}</Text>
           
            
            <Text style={styles.vantagem}>Vantagem: {sentinela.vantagem} </Text>
           
            
            <Text style={styles.fraqueza}>Fraqueza: {sentinela.fraqueza} </Text>

    

    </View>
);
    

 }
 const styles = StyleSheet.create({
  
    img:{
        alignSelf: 'center',
        height:300,
        width: "100%",

        padding: 10,
    },



    nome:{

        fontSize: 30,
          color:"#fff",
         padding: 10,
            alignSelf: 'center'

    },

    ult:{
        fontSize: 25,
        color:"#fff",
        alignSelf: 'center',
  padding: 10,
    },

    caixa:{
    
    backgroundColor: "black",
  
       

    },
  
   fraqueza:{
    color:"#fff",
    fontSize: 25,
     alignSelf: 'center',
  padding: 10,
    },

    vantagem:{
        color:"#fff",
        fontSize: 25,
      alignSelf: 'center',
  padding: 10,
    },
 sentinela:{
        color:"#fff",
        fontSize: 25,
        alignSelf: 'center',
  padding: 10,
    },
   

});