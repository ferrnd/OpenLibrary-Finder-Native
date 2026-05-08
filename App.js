import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Keyboard
} from 'react-native';

export default function App() {
  
  const [nomeLivro, setNomeLivro] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarLivro() {
    if (nomeLivro.trim() === '') {
      Alert.alert('Aviso', 'Por favor, digite o título de um livro.');
      return;
    }

    Keyboard.dismiss(); 
    setResultado(null);
    setLoading(true); 

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(nomeLivro)}&limit=1`);
      const data = await response.json();

      if (data.numFound === 0) {
        Alert.alert('Não encontrado', 'Nenhum livro foi encontrado com este título.');
      } else {
        const livroInfo = data.docs[0];
        
        setResultado({
          titulo: livroInfo.title,
          autor: livroInfo.author_name ? livroInfo.author_name[0] : 'Autor não informado',
          ano: livroInfo.first_publish_year || 'N/A'
        });
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar à biblioteca. Verifique sua internet.');
    } finally {
      setLoading(false); 
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.tituloApp}>Book Search API</Text>

      <TextInput
        style={styles.input}
        placeholder="O Pequeno Príncipe"
        value={nomeLivro}
        onChangeText={setNomeLivro}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botao} onPress={buscarLivro}>
        <Text style={styles.botaoTexto}>BUSCAR LIVRO</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.areaLoading}>
          <ActivityIndicator size="large" color="#000000" />
          <Text style={styles.textoLoading}>Buscando na biblioteca...</Text>
        </View>
      )}

      {resultado && !loading && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.label}>Título:</Text>
          <Text style={styles.valor}>{resultado.titulo}</Text>

          <Text style={styles.label}>Autor:</Text>
          <Text style={styles.valor}>{resultado.autor}</Text>

          <Text style={styles.label}>Ano de Publicação:</Text>
          <Text style={styles.valor}>{resultado.ano}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 60,
  },
  tituloApp: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    elevation: 2, 
  },
  botao: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  botaoTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  areaLoading: {
    marginTop: 30,
    alignItems: 'center',
  },
  textoLoading: {
    marginTop: 10,
    color: '#666',
    fontStyle: 'italic',
  },
  resultadoContainer: {
    marginTop: 40,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#000000',
    elevation: 4,
  },
  label: {
    fontSize: 14,
    color: '#999',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  valor: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
});