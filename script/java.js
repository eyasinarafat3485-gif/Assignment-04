// console.log('add java')

let interviewList = [];
let rejectList = [];
let currentStatus = 'all'

let total = document.getElementById('totalCount');
let interview = document.getElementById('interviewCount');
let reject = document.getElementById('rejectedCount');

// console.log(total)

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const allCardSection = document.getElementById('all-cards');
// console.log(allCardSection.children.length);

const mainContainer = document.querySelector('main');
// console.log(mainContainer);
const fillSection = document.getElementById('fill-section');

function calculateCount() {
    totalCount.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    reject.innerText = rejectList.length;
}

calculateCount();

function toggleStyle(id) {
    // console.log('clicked :', id)
    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')

    allBtn.classList.add('bg-white', 'text-red-500');
    interviewBtn.classList.add('bg-white', 'text-red-500');
    rejectedBtn.classList.add('bg-white', 'text-red-500');

    // console.log(id);

    const selected = document.getElementById(id);
    currentStatus = id;
    // console.log(selected);

    selected.classList.remove('bg-white', 'text-red-500');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'interview-btn') {
        allCardSection.classList.add('hidden');
        fillSection.classList.remove('hidden')
        renderInterview()
        
    }
    else if (id == 'all-btn') {
        allCardSection.classList.remove('hidden');
        fillSection.classList.add('hidden');
    }
    else if (id == 'rejected-btn') {
        allCardSection.classList.add('hidden');
        fillSection.classList.remove('hidden')
        renderRejected()
    }

}

const deleteButtons = document.querySelectorAll('.delete-btn');
const totalDisplay = document.getElementById('totalCount');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.cards');
        card.remove();

        let currentTotal = parseInt(totalDisplay.innerText);
        if (currentTotal > 0) {
            totalDisplay.innerText = currentTotal - 1;
        }
    })
})



mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.parentNode.parentNode);

    //  interview button part------------------------------------------------
    if (event.target.classList.contains('btn-interview')) {
        const parenNode = event.target.parentNode.parentNode;

        const deviceName = parenNode.querySelector('.mobile-one').innerText;
        const positionName = parenNode.querySelector('.position-Name').innerText;
        const salaryName = parenNode.querySelector('.salary').innerText;
        const statusName = parenNode.querySelector('.status').innerText;
        const notesName = parenNode.querySelector('.notes').innerText;
        parenNode.querySelector('.status').innerText = 'INTERVIEW';

        // console.log(deviceName, positionName, salaryName, statusName, notesName);

        const cardInfo = {
            deviceName,
            positionName,
            salaryName,
            statusName: 'INTERVIEW',
            notesName

        }
        // console.log(cardInfo);
        const deviceExist = interviewList.find(item => item.deviceName == cardInfo.deviceName);


        if (!deviceExist) {
            interviewList.push(cardInfo);
        }
        rejectList = rejectList.filter(item => item.deviceName != cardInfo.deviceName);
        calculateCount();

        if(currentStatus= 'rejected-btn'){
            renderRejected()
        }
        // renderInterview();
    }

    // rejected button part------------------------------------------------
    else if (event.target.classList.contains('btn-rejected')) {
        const parenNode = event.target.parentNode.parentNode;
        const deviceName = parenNode.querySelector('.mobile-one').innerText;
        const positionName = parenNode.querySelector('.position-Name').innerText;
        const salaryName = parenNode.querySelector('.salary').innerText;
        const statusName = parenNode.querySelector('.status').innerText;
        const notesName = parenNode.querySelector('.notes').innerText;
        parenNode.querySelector('.status').innerText = 'REJECTED';

        // console.log(deviceName, positionName, salaryName, statusName, notesName);

        const cardInfo = {
            deviceName,
            positionName,
            salaryName,
            statusName:'REJECTED',
            notesName

        }
        // console.log(cardInfo);
        const deviceExist = rejectList.find(item => item.deviceName == cardInfo.deviceName);


        if (!deviceExist) {
            rejectList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.deviceName != cardInfo.deviceName);

        if (currentStatus == 'interview-btn') {
            renderInterview();
        }

        calculateCount();

        // console.log(interviewList)

    }


})



function renderInterview() {
    fillSection.innerHTML = '';
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div');
        div.className = 'cards flex justify-between bg-white p-8 ';
        div.innerHTML = `
         <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <h2 class="mobile-one font-semibold text-2xl "> ${interview.deviceName}</h2>
                        <p class="position-Name text-gray-500">React Native Developer</p>
                    </div>
                    <!-- part 2 -->
                    <div>
                        <p class="salary text-gray-500">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <!-- part 3 -->
                    <p class="status bg-gray-300 w-[120px] py-2 px-2 rounded-xl text-center">${interview.statusName} </p>
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <div class="flex gap-4">
                        <button
                            class="btn-interview bg-white hover:bg-green-200 text-green-500 font-bold border-2 border-green-500 px-4 py-2 rounded-xl">INTERVIEW</button>
                        <button
                            class="btn-rejected  bg-white hover:bg-red-200 px-4 text-red-500 font-bold border-2 border-red-500 py-2 rounded-xl">REJECTED</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="border bg-gray-300"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        fillSection.appendChild(div);
    }

}

function renderRejected() {
    fillSection.innerHTML = '';
    for (let reject of rejectList) {
        console.log(reject)
        let div = document.createElement('div');
        div.className = 'card flex justify-between p-8 bg-white';
        div.innerHTML = `
         <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <h2 class="mobile-one font-semibold text-2xl "> ${reject.deviceName}</h2>
                        <p class="position-Name text-gray-500">React Native Developer</p>
                    </div>
                    <!-- part 2 -->
                    <div>
                        <p class="salary text-gray-500">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <!-- part 3 -->
                    <p class="status bg-gray-300 w-[120px] py-2 px-2 rounded-xl text-center"> ${reject.statusName}</p>
                    <p class="notes">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <div class="flex gap-4">
                        <button
                            class="btn-interview bg-white hover:bg-green-200 text-green-500 font-bold border-2 border-green-500 px-4 py-2 rounded-xl">INTERVIEW</button>
                        <button
                            class="btn-rejected  bg-white hover:bg-red-200 px-4 text-red-500 font-bold border-2 border-red-500 py-2 rounded-xl">REJECTED</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="border bg-gray-300"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        fillSection.appendChild(div);
    }

}

