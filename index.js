const loadAllData = () => {

    // Adding Spinner
    document.getElementById("spinner").classList.remove("hidden");

    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data.tools[0].name);

            document.getElementById("spinner").classList.add("hidden");

            showAllData(data.data.tools.slice(0, 6));
        });

};

loadAllData();

// For Main Card Section
const showAllData = (universeAi) => {

    // showAllData.innerHTML = "";

    universeAi.map((universe) => {

        const cardContainer = document.getElementById('show-card');
        const div = document.createElement("div");
        div.innerHTML = `
     <div class="card w-96 bg-base-100 shadow mx-auto my-6">
                <figure class="px-10 pt-10">
                <img class="rounded-lg" src="${universe.image}" alt="">
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black">Features</h2>
                    <ol class="text-gray-600 list-decimal list-inside">
                        <li>${universe.features[0]}</li>
                        <li>${universe.features[1]}</li>
                        <li>${universe.features[2]}</li>
                        
                    </ol>
                </div>

                <hr class="w-80 mx-auto">

                <div class="flex justify-between px-8 py-3">
                    <div>
                        <h2 class="card-title text-black">${universe.name}</h2>
                        <p class="text-gray-600"> <i class="fa-regular fa-calendar-days"></i> ${universe.published_in}</p>
                    </div>

                    <div>

                        <!-- Modal Section -->

                        <!-- The button to open modal -->
                        <label onclick="showDetails('${universe.id}')" for="my-modal-3" class="btn btn-circle bg-red-50 border-none"><i
                                class="fa-solid fa-arrow-right text-red-600"></i></label>


                    </div>

                </div>
            </div>
        
     `;
        cardContainer.appendChild(div);

    });


};


// Making ID Dynamic
const showDetails = (id) => {

    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            
            if (data !== null) {
                const propertyValue = data.property?.nestedProperty ?? "default value";
                console.log(propertyValue);
            } else {
                console.log("Data is null");
            }
            
            showSingleData(data.data);
            
        })
        .catch(error => console.error(error));
    };

// showDetails();


// Showing Modal Data Section
const showSingleData = (modalData) => {
    
    const showData = modalData;

    // console.log(showData.input_output_examples[0].input);

    const container = document.getElementById('modal-info');
    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
    
                <!-- Modal body -->
    
                <div class="modal-box relative max-w-5xl max-h-5xl">

                    <label for="my-modal-3"
                        class="btn btn-sm btn-circle absolute right-4 top-4 bg-red-500 border-none">✕</label>

                    <!-- Modal Card Inside -->
                    
                    <div class="flex justify-between px-8 grid grid-cols-1  lg:grid-cols-2">

                        <div class="card w-96 bg-red-50 shadow mx-auto my-6 border-red-300 border-2">
                          <h1 class="card-title text-center font-bold text-black pt-4"> ${showData.description}</h1>

                            <div class="card-body">
                                <div class="grid grid-cols-3 gap-2">
                                    <div
                                        class="bg-base-100 rounded-xl text-center text-green-600 font-bold py-8">
                                        ${showData?.pricing[0]?.plan} ${showData?.pricing[0]?.price}</div>
                                    <div
                                        class="bg-base-100 rounded-xl text-center text-orange-500 font-bold py-8">
                                        ${showData?.pricing[1]?.plan} ${showData?.pricing[1]?.price}</div>
                                    <div
                                        class="bg-base-100 rounded-xl text-center text-red-600 font-bold py-8">
                                        ${showData?.pricing[2]?.plan} ${showData?.pricing[2]?.price}</div>
                                </div>
                                <div class="grid grid-cols-2 gap-6">
                                    <div>
                                        <h1 class="card-title text-black font-bold">Features</h1>
                                        <ol class="text-gray-600 list-disc list-inside px-auto">
                                            <li>${showData.features[1].feature_name}</li>
                                            <li>${showData.features[2].feature_name}</li>
                                            <li>${showData.features[3].feature_name}</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h1 class="card-title text-black font-bold">Integrations</h1>
                                        <ol class="text-gray-600 list-disc list-inside">
                                            <li>${showData?.integrations[0]}</li>
                                            <li>${showData?.integrations[1]}</li>
                                            <li>${showData?.integrations[2]}</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="card w-96 bg-base-100 shadow mx-auto my-6">
                            <figure class="px-10 pt-10">

                                <div class="relative">
                                    <img class="rounded-xl" src="${showData.image_link[0]}">

                                    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">${showData?.accuracy?.score} accuracy</h1>
                                </div>
                                
                            </figure>

                            <div class="card-body">
                                <h2 class="card-title text-center font-bold">${showData?.input_output_examples[0]?.input}</h2>
                                <p>${showData?.input_output_examples[0]?.output}</p>

                                <h2 class="card-title text-center font-bold">${showData?.input_output_examples[1]?.input}</h2>
                                <p>${showData?.input_output_examples[1].output}</p>
                            </div>
                        </div>
                    </div>

                </div>
         
    `;
        container.appendChild(div);
        
};


// See More Data
const showAllDataTogether = () => {

    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            showAllData(data.data.tools.slice(6, 12));
        });
    
       const showAll = document.getElementById('show-all');
        if(showAllData.length > 6) {
            showAll.classList.remove('hidden');
        }
        else {
            showAll.classList.add('hidden');
        }

};


// Sort Cards By Date

const sortDataByDate= (data) => {
    data.sort((a, b) => new Date(b.published_in) - new Date(a.published_in));
};
    
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', () => {
        
        toggleProgress(true);
        
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => {
        sortDataByDate(data.data.tools)
        displayData(data.data.tools);
    })
        
    .catch(err => console.error(err))
    .finally(() => {
        toggleProgress (false);
    });
});