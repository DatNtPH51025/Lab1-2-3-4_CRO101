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

// bai2
//Dữ liệu đầu vào
const oldData = [
  {code: 'ab', name: 'Son môi'},
  {code: 'ac', name: 'Sữa rửa mặt'},
  {code: null, name: null},
  {code: null, name: ''},
];

// Hàm chuyển đổi từ array sang object
const parseArrayToObject = ({array = [], keyId = ''}) =>
  Object.fromEntries(
    array
      ?.filter(item => item[keyId]) // Lọc các phần tử có key hợp lệ
      .map(item => [item[keyId], item]) || [],
  );

// Hàm lọc các phần tử không hợp lệ trong object
const filterObject = obj => {
  Object.keys(obj).forEach(key => {
    const item = obj[key];
    // Xóa các phần tử không hợp lệ
    if (!item || !item.code || !item.name) {
      delete obj[key];
    }
  });
  return obj;
};

// Chuyển đổi mảng thành object
let newData = parseArrayToObject({array: oldData, keyId: 'code'});

// Lọc bỏ các phần tử không hợp lệ
newData = filterObject(newData);

// Kết quả
console.log(newData);

// Lấy thông tin sản phẩm theo mã
console.log(newData.ab); 
export default Bai2_Lab2;
