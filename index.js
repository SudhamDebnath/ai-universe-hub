const loadAllData = () => {

    document.getElementById("spinner").classList.remove("hidden");

    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data.tools[0].name);

            document.getElementById("spinner").classList.add("hidden");

            showAllData(data.data.tools);
        });

};

loadAllData();

const showAllData = (universeAi) => {
    universeAi.slice(0, 6).forEach((universe) => {
       
        // const showAll = document.getElementById('show-all');
        // if(universeAi.length > 6) {
        //     universeAi = universeAi.slice(0, 6);
        //     showAll.classList.remove('hidden');
        // }
        // else {
        //     showAll.classList.add('hidden');
        // }

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
                        <label onClick="showDetails('${universe.id}')" for="my-modal-3" class="btn btn-circle bg-red-50 border-none"><i
                                class="fa-solid fa-arrow-right text-red-600"></i></label>

                        <!-- Modal body -->

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
            showSingleData(data.data);
            
        });
};

// showDetails();

const showSingleData = (modalData) => {
    
   

    const showData = modalData;

    console.log(modalData);

    

    const container = document.getElementById('modal-info');
    const div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `
    
    
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
                                        $10/month Basic</div>
                                    <div
                                        class="bg-base-100 rounded-xl text-center text-orange-500 font-bold py-8">
                                        $50/month Pro</div>
                                    <div
                                        class="bg-base-100 rounded-xl text-center text-red-600 font-bold py-8">
                                        Contact us Enterprise</div>
                                </div>
                                <div class="grid grid-cols-2 gap-6">
                                    <div>
                                        <h1 class="card-title text-black font-bold">Features</h1>
                                        <ol class="text-gray-600 list-disc list-inside px-auto">
                                            <li>Customizable responses</li>
                                            <li>Multilingual support</li>
                                            <li>Seamless integration</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h1 class="card-title text-black font-bold">Integrations</h1>
                                        <ol class="text-gray-600 list-disc list-inside">
                                            <li>FB Messenger</li>
                                            <li>Slack</li>
                                            <li>Telegram</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="card w-96 bg-base-100 shadow mx-auto my-6">
                            <figure class="px-10 pt-10">

                                <div class="relative">
                                    <img src="${modalData.image_link[0]}">

                                    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">${modalData.accuracy.score} accuracy</h1>
                                  </div>
                                
                            </figure>

                            <div class="card-body">
                                <h2 class="card-title text-center font-bold">Hi, how are you doing today?
                                </h2>
                                <p class="text-center text-gray-600">I'm doing well, thank you for asking.
                                    How can I assist you today?</p>
                            </div>
                        </div>
                    </div>

                </div>
         

    `;
        container.appendChild(div);
        
    
};