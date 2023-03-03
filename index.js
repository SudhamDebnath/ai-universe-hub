const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data.tools[0].name);
            console.log(data.data);
            showAllData(data.data.tools);
        });

};

const showAllData = (universeAi) => {
 universeAi.slice(0, 6).forEach((universe) => {
     console.log(universe)
     
     const cardContainer = document.getElementById('show-card');

     const div = document.createElement("div");
     div.innerHTML = `

     <div class="card w-96 bg-base-100 shadow mx-auto my-6">
                <figure class="px-10 pt-10">
                    <img src="https://source.unsplash.com/random/300x200?sig=incrementingIdentifier" alt="image"
                        class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black">Features</h2>
                    <ol class="text-gray-600 list-decimal list-inside">
                        <li>Natural language processing</li>
                        <li>Contextual understanding</li>
                        <li>Text generation</li>
                    </ol>
                </div>

                <hr class="w-80 mx-auto">

                <div class="flex justify-between px-8 py-3">
                    <div>
                        <h2 class="card-title text-black">ChatGPT</h2>
                        <p class="text-gray-600"> <i class="fa-regular fa-calendar-days"></i> 11/01/2022</p>
                    </div>

                    <div>

                        <!-- Modal Section -->

                        <!-- The button to open modal -->
                        <label for="my-modal-3" class="btn btn-circle bg-red-50 border-none"><i
                                class="fa-solid fa-arrow-right text-red-600"></i></label>

                        <!-- Modal body -->
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative max-w-5xl max-h-5xl">

                                <label for="my-modal-3"
                                    class="btn btn-sm btn-circle absolute right-4 top-4 bg-red-500 border-none">✕</label>

                                <!-- Modal Card Inside -->
                                <div class="flex justify-between px-8">

                                    <div class="card w-96 bg-red-50 shadow mx-auto my-6 border-red-300 border-2">
                                        <h1 class="card-title text-center font-bold text-black pt-4">ChatGPT is an
                                            AI-powered chatbot platform that uses OpenAI's GPT technology to simulate
                                            human conversation.</h1>

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
                                                <img src="https://source.unsplash.com/random/300x200?sig=incrementingIdentifier" alt="Example Image" class="w-full rounded-xl">

                                                <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">94% accuracy</h1>
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
                        </div>

                    </div>

                </div>
            </div>
     
     `;
     cardContainer.appendChild(div);

 });
  
};

loadAllData();