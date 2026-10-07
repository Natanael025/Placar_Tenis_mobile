# Placar Tênis de Mesa 🏓

Um aplicativo simples e intuitivo desenvolvido em **React Native** para acompanhamento de pontuação e contagem de sets em partidas de Tênis de Mesa (Ping-Pong).

---

## 🚀 Funcionalidades

- **Controle de Pontuação:** Adicione e remova pontos dos Jogadores A e B de forma independente.
- **Trava de Pontuação:** Impede que os pontos fiquem negativos.
- **Lógica de Sets:** Regra aplicada para finalizar o set a partir dos 11 pontos com a diferença necessária de 2 pontos entre os jogadores.
- **Placar Geral de Sets:** Exibição clara do placar de sets atualizado a cada vitória de set.
- **Fim de Jogo:** Notificação visual ao fechar a partida (melhor de 5 / quem fizer 3 sets primeiro) com reset automático do placar.
- **Botão Limpar:** Permite reiniciar a partida do zero a qualquer momento.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **React Hooks (`useState`)**
- **StyleSheet** para estilização dos componentes

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- Gerenciador de pacotes (`npm` ou `yarn`)
- [Expo CLI](https://docs.expo.dev/) (ou ambiente React Native CLI configurado)

---

## 🔧 Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/placar-tenis-de-mesa.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd placar-tenis-de-mesa
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

5. **Visualize o aplicativo:**
   - Use o aplicativo **Expo Go** no seu celular para ler o QR Code gerado no terminal.
   - Ou execute num emulador Android / iOS configurado.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
