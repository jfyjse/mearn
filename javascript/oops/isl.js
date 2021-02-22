
isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]
console.log("convert to uppercase");
isl.map(tea=>tea.team.toUpperCase()).forEach(team=>console.log(team))//
console.log("sort most played");
isl.sort((o1,o2)=>o2.played-o1.played).forEach(o=>console.log(o.team,o.played))//
console.log("highest pts");
var high_pts=isl.reduce((o1,o2)=>o1.pts>o2.pts?o1:o2)// 
console.log(high_pts);

console.log("\n\nhigest lost matches\n");
var low_pts=isl.reduce((o1,o2)=>o1.los>o2.los?o1:o2)
console.log(low_pts);


console.log("\n\nstatus update qualifed/not qualified\n");
