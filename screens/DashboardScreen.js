import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }) {
  const summaryData = {
    totalStudents: 120,
    highRisk: 15,
    interventions: 35,
  };

  const recentAlerts = [
    { id: '1', name: 'Luis Pérez', risk: 'Alto', date: '2023-12-12' },
    { id: '2', name: 'Ana García', risk: 'Medio', date: '2023-12-10' },
    { id: '3', name: 'Carlos Ramírez', risk: 'Bajo', date: '2023-12-08' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Dashboard</Text>
        <Text style={styles.subHeader}>Resumen general del estado académico</Text>
      </View>

      {/* KPI Cards */}
      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.shadow]}>
          <Ionicons name="people" size={28} color="#1E90FF" />
          <Text style={styles.cardValue}>{summaryData.totalStudents}</Text>
          <Text style={styles.cardLabel}>Total Estudiantes</Text>
        </View>
        <View style={[styles.card, styles.shadow]}>
          <Ionicons name="alert-circle" size={28} color="#FF5C5C" />
          <Text style={styles.cardValue}>{summaryData.highRisk}</Text>
          <Text style={styles.cardLabel}>En Riesgo Alto</Text>
        </View>
        <View style={[styles.card, styles.shadow]}>
          <Ionicons name="clipboard" size={28} color="#FFA500" />
          <Text style={styles.cardValue}>{summaryData.interventions}</Text>
          <Text style={styles.cardLabel}>Intervenciones</Text>
        </View>
      </View>

      {/* Alertas recientes */}
      <View style={styles.alertsContainer}>
        <Text style={styles.alertsTitle}>⚠️ Alertas Recientes</Text>
        <FlatList
          data={recentAlerts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.alertItem, styles.shadow]}>
              <View style={styles.alertDetails}>
                <View>
                  <Text style={styles.alertName}>{item.name}</Text>
                  <Text
                    style={[
                      styles.alertRisk,
                      item.risk === 'Alto'
                        ? styles.riskHigh
                        : item.risk === 'Medio'
                        ? styles.riskMedium
                        : styles.riskLow,
                    ]}
                  >
                    Riesgo {item.risk}
                  </Text>
                </View>
                <Text style={styles.alertDate}>{item.date}</Text>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('Students')}
        >
          <Text style={styles.viewAllText}>Ver lista completa de estudiantes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 16,
  },
  headerContainer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  subHeader: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  cardLabel: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  alertsContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 12,
  },
  alertItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  alertDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  alertRisk: {
    fontSize: 14,
    marginTop: 4,
  },
  alertDate: {
    fontSize: 12,
    color: '#888',
  },
  riskHigh: {
    color: '#FF5C5C',
  },
  riskMedium: {
    color: '#FFA500',
  },
  riskLow: {
    color: '#4CAF50',
  },
  viewAllButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
