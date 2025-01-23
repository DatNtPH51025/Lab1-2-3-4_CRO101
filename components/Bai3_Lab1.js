import React from 'react'
import { View, Text } from 'react-native'

const Bai3_Lab1 = () => {
    return (
        <View>
            <Text>Bai3lab1</Text>
        </View>
    )

}
const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
];

// Hàm kiểm tra cầu thủ có hợp lệ hay không
const validRule = ({ name, goals } = {}) => {
    return !!name && typeof goals === 'number' && goals > 0;
};

// Biến để lưu danh sách cầu thủ hợp lệ
const validPlayers = players.filter(player => validRule(player));

// Biến để lưu cầu thủ ghi nhiều bàn thắng nhất
const topPlayer = validPlayers.reduce((max, player) => {
    return player.goals > (max?.goals || 0) ? player : max;
}, null);

console.log("Danh sách cầu thủ hợp lệ:", validPlayers);
console.log("Cầu thủ ghi nhiều bàn thắng nhất:", topPlayer);

export default Bai3_Lab1;

