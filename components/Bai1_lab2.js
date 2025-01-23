import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bai1_Lab2 = () => {
    
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

const class1 = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
  },
];

const class2 = [
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
  },
];

const allStudents = class1.concat(class2);

// Loại bỏ sinh viên có trạng thái "failed"
const eligibleStudents = allStudents.filter(
  student => student.status === 'pass',
);

// Sắp xếp danh sách theo avgPoint từ cao xuống thấp
const sortedByAvgPoint = [...eligibleStudents].sort(
  (a, b) => b.avgPoint - a.avgPoint,
);

// Sắp xếp danh sách theo avgTraningPoint từ cao xuống thấp
const sortedByAvgTraningPoint = [...eligibleStudents].sort(
  (a, b) => b.avgTraningPoint - a.avgTraningPoint,
);

// Lấy thông tin của Ong vàng
const goldenBee = sortedByAvgPoint[0];

// Log danh sách sinh viên ra console
console.log('Danh sách sinh viên theo điểm trung bình từ cao xuống thấp:');
sortedByAvgPoint.forEach((student, index) => {
  console.log(`Rank ${index + 1}:`, JSON.stringify(student));
});

console.log('Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:');
sortedByAvgTraningPoint.forEach((student, index) => {
  console.log(`Rank ${index + 1}:`, JSON.stringify(student));
});

console.log('Thông tin Ong vàng:', JSON.stringify(goldenBee));
export default Bai1_Lab2;
