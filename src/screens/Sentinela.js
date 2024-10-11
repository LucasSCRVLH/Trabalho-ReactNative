 import { View, FlatList } from "react-native";
 import CardSentinela from "../components/CardSentinela";
 
 const sentinelas = [
    
        {id: "1", nome: "Chamber", ult: "Tour-force", vantagem:"Carregar o Yuri pro Ouro", fraqueza: "Ser perfeito"},
        {id: "2", nome: "Sage", ult: "Ressurreição", vantagem: "Ressucitar o aliado", fraqueza: "Animação demorada"},
        {id: "3", nome: "Chyper", ult: "Neural Theft", vantagem: "Localizar oinimigo", fraqueza: "Precisa de um cadáver"},
        {id: "4", nome: "Deadlock", ult: "Annihilation", vantagem: "Capturar o inimigo", fraqueza: "A rede pode ser quebrada"},
        {id: "5", nome: "Killjoy", ult: "Lockdown", vantagem: "Imobiliza toda área", fraqueza: "pode ser quebrada"},




    ];




export default function Sentinela(){

return (
        <View>
            <FlatList
                data={sentinelas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardSentinela sentinela={item}/>
                )}
            />
        </View>
    );


}