var isl=[

    {team:"atk",played:17,won:11,draw:4,lose:2,pts:34},
    {team:"goa",played:16,won:12,draw:3,lose:3,pts:25},
    {team:"mumbai",played:17,won:10,draw:4,lose:3,pts:36}
]

isl.sort((t1,t2)=>t1.played>t2.played?-1:1).forEach(o=>console.log(o))