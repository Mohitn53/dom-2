var arr=[
    {   team : 'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {   team : 'MI',
        primary:'blue',
        secondary:'gold'
    },
     {   team : 'KKR',
        primary:'purple',
        secondary:'gold'
    },
     {   team : 'RCB',
        primary:'red',
        secondary:'darkblue'
    },
     {   team : 'GT',
        primary:'violet',
        secondary:'beige'
    }
]     
var button = document.querySelector('.view-1 button')
var div = document.querySelector('.view-1 div')
button.addEventListener('click',()=>{
    var num = Math.floor(Math.random()*(arr.length-1))
    winner=(arr[num])
    console.log(winner);
    div.innerHTML=winner.team;
    div.style.backgroundColor=winner.primary;
    div.style.color=winner.secondary;
    
})