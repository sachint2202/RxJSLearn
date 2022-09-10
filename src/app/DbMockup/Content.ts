import { ToDoList } from "../Interfaces/ToDoApiInterface";

export class dataDisplay {
     fieldToDisplay = [
        {
            tab: "Promise",
            definition : "Promise is some sort of magical entity",
            codeContent : {
                header: "Basic Call",
                codeContent: "getValue().then(res => console.log)",
                codeResult: "Got the value from server"
            }
        }
     ]

     
}

export class ToDoMockupData {
   private ToDoMockup = [
        {
            "userId": 1,
            "id": 1,
            "title": "Do the laundry",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "Clean the room",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "Buy vegetables",
            "completed": false
          },
    ]

   public getData(){
        return this.ToDoMockup;
    }

    public addData(incomingData:ToDoList){
        let biggestId = 0;
        this.ToDoMockup.map(x => {if(x.id>biggestId)biggestId = x.id;});
        biggestId += 1;
        let dataToPush:ToDoList = {
            id:biggestId,
            userId:incomingData.userId,
            title:incomingData.title,
            completed:incomingData.completed
        }
        this.ToDoMockup.push(dataToPush);
        //console.log(this.ToDoMockup);
        return dataToPush;

    }
       
    public updateData( incomingData:ToDoList){
            let dataFound = false;
            this.ToDoMockup.map(x=>{
                if(x.id == incomingData.id){
                    x = incomingData;
                    dataFound = true;
                }
            })
            //console.log(this.ToDoMockup);
            return dataFound;
    }

    public deleteData(incomingData:ToDoList){
        let filteredData = this.ToDoMockup.filter(x => x.id !== incomingData.id );
        if(filteredData.length == this.ToDoMockup.length){
            return false;
        }
        this.ToDoMockup = filteredData;
        //console.log(this.ToDoMockup);
        return true;
    }
}