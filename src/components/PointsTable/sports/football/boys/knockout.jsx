// src/components/PointsTable/sports/basketball/boys/knockout.js

// knockout.jsx example
const footballBoysKnockout = {
    rounds: [
        {
            name: "Semi-finals",
            matches: [
                { id: 'SF1', date: '13 December', venue: 'Lusail', team1: 'Argentina', score1: '3', team2: 'Croatia', score2: '0', winner: 'Argentina' },
                { id: 'SF2', date: '14 December', venue: 'Al Khor', team1: 'France', score1: '2', team2: 'Morocco', score2: '0', winner: 'France' },
            ]
        },
        {
            name: "Final",
            matches: [
                { id: 'F1', date: '18 December', venue: 'Lusail', team1: 'Argentina', score1: '3', score1_pen: '4', team2: 'France', score2: '3', score2_pen: '2', winner: 'Argentina (p)' }
            ]
        }
    ],
    // 💡 NEW: Dedicated thirdPlace object
    thirdPlace: {
        name: "Third place play-off",
        match: {
            id: 'TP1', date: '17 December', venue: 'Al Rayyan (KIS)', team1: 'Croatia', score1: '2', team2: 'Morocco', score2: '1', winner: 'Croatia'
        }
    }
};

export default footballBoysKnockout;

// export const footballBoysKnockout = {
//     rounds: [
//         {
//             name: "Semi-finals",
//             matches: [
//                 { id: "SF1", team1: "A1", team2: "B2", winner: "", score1: "", score2: "" },
//                 { id: "SF2", team1: "A2", team2: "B1", winner: "", score1: "", score2: "" },
//             ]
//         },
//         {
//             name: "Final",
//             matches: [
//                 { id: "F1", team1: "Winner SF1", team2: "Winner SF2", winner: "", score1: "", score2: "" },
//             ]
//         },
//         {
//             name: "Winner",
//             matches: [
//                 { id: "W1", team1: "Winner", team2: null, winner: "", score1: null, score2: null },
//             ]
//         }
//     ]
// };