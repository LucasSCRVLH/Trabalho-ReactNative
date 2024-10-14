 import { View, FlatList } from "react-native";
 import CardSentinela from "../components/CardSentinela";
 
 const sentinelas = [
    
        {id: "1", nome: " Chamber", ult: " Tour-force", vantagem:" Carregar o Yuri", fraqueza: " Ser perfeito", img: require("../../assets/img/chamber.png"), ultImg: require("../../assets/ult/chamber.png"), nacionalidade:"Francês"},
        {id: "2", nome: "Sage", ult: "Resurrection", vantagem: "Ressucitar o aliado", fraqueza: "Animação demorada", img: require("../../assets/img/sage.png"), ultImg: require("../../assets/ult/sage.webp"), nacionalidade:"China"},
        {id: "3", nome: "Cypher", ult: "Neural Theft", vantagem: "Localizar o inimigo", fraqueza: "Precisa de um cadáver", img: require("../../assets/img/cypher.png"), ultImg: require("../../assets/ult/cypher.png"), nacionalidade:"Marrocos"},
        {id: "4", nome: "Deadlock", ult: "Annihilation", vantagem: "Capturar o inimigo", fraqueza: "Pode ser quebrada", img: require("../../assets/img/deadlock.png"), ultImg: require("../../assets/ult/deadlock.jpg"), nacionalidade:"Nova Zelândia"},
        {id: "5", nome: "Killjoy", ult: "Lockdown", vantagem: "Imobilizar a área", fraqueza: "pode ser quebrada", img: require("../../assets/img/killjoy.png"), ultImg: require("../../assets/ult/killjoy.jpg"), nacionalidade:"Alemanha"},




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