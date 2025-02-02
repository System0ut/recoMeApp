import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from "@/context/themeContext";

const Post = () => {
  const { theme } = useContext(ThemeContext);

  // Datos de ejemplo para la publicación
  const post = {
    title: "Mi libro favorito",
    description: "Este es un libro increíble que todos deberían leer. Trata sobre...",
    image: require('@/assets/images/imagenesPrueba/libroPrueba1.jpg'),
    hashtags: ["libros", "lectura", "recomendación"],
    likes: 120,
    comments: 45,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
          {/* Header */}
          <View style={styles.header}>
            <Link href="/mainPage" replace>
              <Icon name="arrow-back" size={30} color={theme.text} />
            </Link>
            <Text style={[styles.headerTitle, { color: theme.text }]}>Publicación</Text>
          </View>

          {/* Contenido de la publicación */}
          <ScrollView contentContainerStyle={styles.content}>
            {/* Título */}
            <Text style={[styles.title, { color: theme.text }]}>{post.title}</Text>

            {/* Imagen */}
            <Image source={post.image} style={styles.image} />

            {/* Descripción */}
            <Text style={[styles.description, { color: theme.text }]}>{post.description}</Text>

            {/* Hashtags */}
            <View style={styles.hashtagsContainer}>
              {post.hashtags.map((tag, index) => (
                <Text key={index} style={[styles.hashtag, { color: theme.tint }]}>
                  #{tag}
                </Text>
              ))}
            </View>

            {/* Interacción (Likes, Comentarios, Compartir) */}
            <View style={styles.interactionContainer}>
              <TouchableOpacity style={styles.interactionButton}>
                <Icon name="favorite" size={24} color={theme.tint} />
                <Text style={[styles.interactionText, { color: theme.text }]}>{post.likes} Likes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.interactionButton}>
                <Icon name="comment" size={24} color={theme.tint} />
                <Text style={[styles.interactionText, { color: theme.text }]}>{post.comments} Comentarios</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.interactionButton}>
                <Icon name="share" size={24} color={theme.tint} />
                <Text style={[styles.interactionText, { color: theme.text }]}>Compartir</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  hashtag: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
    marginBottom: 8,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 16,
  },
  interactionButton: {
    alignItems: 'center',
  },
  interactionText: {
    fontSize: 14,
    marginTop: 4,
  },
});