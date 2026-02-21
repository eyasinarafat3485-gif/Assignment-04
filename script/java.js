// console.log('add java')

let interviewList= [];
let rejectList= [];

let total= document.getElementById('totalCount');
let interview= document.getElementById('interviewCount');
let reject= document.getElementById('rejectedCount');

// console.log(total)

const allBtn= document.getElementById('all-btn');
const interviewBtn= document.getElementById('interview-btn');
const rejectedBtn= document.getElementById('rejected-btn');

const allCardSection= document.getElementById('all-cards');
// console.log(allCardSection.children.length);

const mainContainer= document.querySelector('main');
// console.log(mainContainer);

function calculateCount(){
    totalCount.innerText= allCardSection.children.length;
    interview.innerText= interviewList.length;
    reject.innerText= rejectList.length;
}

calculateCount();

function toggleStyle(id){
    // console.log('clicked :', id)
    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')

    allBtn.classList.add('bg-white', 'text-red-500');
    interviewBtn.classList.add('bg-white', 'text-red-500');
    rejectedBtn.classList.add('bg-white', 'text-red-500');

   console.log(id);

    const selected= document.getElementById(id);
    console.log(selected);

    selected.classList.remove('bg-white', 'text-red-500');
    selected.classList.add('bg-blue-500', 'text-white')

    
}
