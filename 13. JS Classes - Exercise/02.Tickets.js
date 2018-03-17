function sortTickets(input,sortingCriteria) {

    class Ticket{
        constructor(destination,price, status){
            this.destination=destination;
            this.price=Number(price);
            this.status=status;
        }
    }
    let tickets=[];
    for(let line of input){
        let data= line.split("|");
        let obj=new Ticket(data[0],data[1],data[2]);
        tickets.push(obj);
    }
    let sortedTickets;
    if(sortingCriteria ==='destination'){
        sortedTickets=tickets.sort((a,b)=>a.destination.localeCompare(b.destination));
    }else if(sortingCriteria==="status"){
        sortedTickets=tickets.sort((a,b)=>a.status.localeCompare(b.status));
    }else if(sortingCriteria==='price'){
        sortedTickets=tickets.sort((a,b)=>a.price - b.price);
    }
   return sortedTickets;
}
// sortTickets(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// );
sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
);