const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data.tools[0].name);
            console.log(data.data);
            showAllData(data.data);
        });

};

const showAllData = (universeAi) => {
 universeAi.forEach((universe) => {
    console.log(universe)
 });
  
};

loadAllData();