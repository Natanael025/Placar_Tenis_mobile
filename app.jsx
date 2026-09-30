import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  let [pntA, atualizarA] = useState(0);
  let [setA, atualizarSetA] = useState(0);
  // Precisei fazer outras variaveis para atualizar o placar principal
  let [pntB, atualizarB] = useState(0);
  let [setB, atualizarSetB] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Placar Tênis de Mesa</Text>
      <View style={styles.card}>
        <View>
          <Text>Jogador A</Text>
          <Text>Pontos: {pntA}</Text>
          <Pressable 
          style={styles.button}
          onPress={() => {
            {/* Não permite pontos negativos */}
            if(pntA > 0){
              atualizarA(pntA-1)
            }
          }}
          >-</Pressable>

          <Pressable
          style={styles.button}
          onPress={() => {
            {/* Se os pontos forem 11 e a diferença dos pontos serem > 2 ele ganha o set ou o jogo */}
            {/* Se não apenas soma mais pontos, vale ressaltar que a regra do tenis de mesa é que um jogador só fatura um set se ele tiver mais de 2 pontos de diferença */}
            if(pntA >= 10 && pntA-pntB >= 1){
              if(setA >= 2){
                setA = setA+1
                alert('Jogador A ganhou o jogo!! '+setA+' - '+setB);
                {/* reseta quando ganha o jogo */}
                atualizarSetA(0);
                atualizarSetB(0);
                atualizarA(0);
                atualizarB(0);
              }
              else{
                pntA = pntA + 1;
                alert('Você ganhou esse set de Tênis de Mesa!! '+pntA+' - '+pntB);
                {/* reseta quando ganha o set e soma um ponto no placar principal */}
                atualizarSetA(setA+1);
                atualizarA(0);
                atualizarB(0);
              }
            }
            else{
              atualizarA(pntA+1)
            }
          }}
          >+</Pressable>
        </View>

        <View>
          {/* PLACAR PRINCIPAL */}
          <Text style={{fontSize:18, fontWeight:'600'}}>{setA} - {setB}</Text>
        </View>

        <View>
          <Text>Jogador B</Text>
          <Text>Pontos: {pntB}</Text>
          <Pressable 
          style={styles.button}
          onPress={() => {
            if(pntB > 0){atualizarB(pntB-1)}
            }}
            >-</Pressable>

          <Pressable
          style={styles.button}
          onPress={() => {
            
            if(pntB >= 10 && pntB-pntA >= 1){
              if(setB >= 2){
                setB = setB+1
                alert('Jogador B ganhou o jogo!! '+setA+' - '+setB);
                atualizarSetA(0);
                atualizarSetB(0);
                atualizarA(0);
                atualizarB(0);
              }
              else{
                pntB = pntB + 1;
                alert('Você ganhou esse set de Tênis de Mesa!! '+pntA+' - '+pntB);
                atualizarSetB(setB+1);
                atualizarA(0);
                atualizarB(0);
              }
            }
            else{
              atualizarB(pntB+1)
            }
          }}
          >+</Pressable>
        </View>
      </View>
      <Pressable
        style={styles.buttonClear}
        onPress={() => {
          atualizarSetA(0);
          atualizarSetB(0);
          atualizarA(0);
          atualizarB(0);
        }}
      >Limpar</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: "#a0a0a0",
    justifyContent: "space-between",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    minWidth: 300
  },
  button: {
    padding: 5,
    margin: 5,
    maxWidth: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonClear: {
    width: 70,
    backgroundColor: 'red',
    color: '#fff',
    padding: 10,
    margin: 5,
    borderWidth: 2,
    borderColor: '#a0a0a0',
    borderRadius: 5,
  }
});
