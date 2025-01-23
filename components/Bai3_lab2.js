import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bai2_Lab2 = () => {
    
    return (
        <View>
            <Text style={styles.baseText}>
                Bai1_Lab2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },

});

//Bai 3
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 2000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error: some bug'), 2000);
});

const getList = async () => {
  try {
    const response = await fetch(
      'https://i.pinimg.com/originals/b0/0d/0c/b00d0cdbf06fab3b2d8cc6847a014495.jpg',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw error.message || 'Unknown error';
  }
};

// **Phần 1: Xử lý với Promise.all**
Promise.all([firstPromise, secondPromise, getList()])
  .then(results => {
    console.log('All promises succeeded:', results);
  })
  .catch(error => {
    console.log('A promise failed:', error);
  });

// **Phần 2: Xử lý với Promise.allSettled**
Promise.allSettled([firstPromise, secondPromise, getList()])
  .then(results => {
    console.log('All promises completed:');
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} succeeded with value:`, result.value);
      } else {
        console.log(`Promise ${index + 1} failed with reason:`, result.reason);
      }
    });
  })
  .finally(() => {
    console.log('Finished processing all promises.');
  });
export default Bai2_Lab2;
