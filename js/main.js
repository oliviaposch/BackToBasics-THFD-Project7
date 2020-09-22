/**
 * https://www.chartjs.org/
 * https://d3js.org/
 * https://ghinda.net/css-toggle-switch/
 */

const newMembersNamesHtml = document.getElementsByClassName('new-member');
const recentActivitiesHtml = document.getElementsByClassName('recent-activity');
const newMembersSection = document.getElementById('new-members-section');
const recentActivitiesSection = document.getElementById('recent-activities-section');
const alertMsgBar = document.querySelector(".alert");
const alertMsgBtn = document.querySelector(".alert .close");
const alertMsgTopHeader = document.querySelector('.alert-messages'); 
const bellNotifications = document.querySelector('.bell-notifications');
const iconBell = document.querySelector('.icon-bell');
const searchUserInput = document.getElementById('search_user');
const userListElements = document.getElementById('searchUserList');
const contactForm = document.getElementById('kontaktForm');
const contactFormMsg = document.getElementById('contactForm-msg');
/* ============================================= */
/*    RecentActivities and new members  */
/* ============================================= */

//HTML for User Activities Section
function printMembersHTML( arrImages, arrNameComments, arrTimeMail, arrDateIcon){
    return sectionMembersActivities = `
        <div>
            <div><img src="${arrImages}"></div>
            <p class="user-activity-name">${arrNameComments} <br> <span>${arrTimeMail}</span></p>
        </div>
        <div>
            <p>${arrDateIcon}</p>
        </div>
        `;
}
// create Div Element to display data from members.js
function createDivActivitiesSection(printMembersHtmlFunc, classContainer, contentSection ){
    let containerDiv = document.createElement('div');
    containerDiv.classList.add(classContainer);
    containerDiv.innerHTML = printMembersHtmlFunc;
    contentSection.appendChild(containerDiv);
}

/*
using printMembersHTML function and createDivActivitiesSection function
to display new members list and recent activities
*/
function displayNewMembers(){

    for (let i = 0; i < newMembers.length; i++) {
        //save printMembersHTML function in a variable
        const newMembersList = printMembersHTML(newMembers[i].image, newMembers[i].name, newMembers[i].mail, newMembers[i].date);
        //set attributes for new div section on createDivActivitiesSection function
        createDivActivitiesSection(newMembersList, 'new-member', newMembersSection );
    }

}

function displayRecentActivities(){
    for (let i = 0; i < newMembers.length; i++) {
        //save printMembersHTML function in a variable
        const recentActivietiesList = printMembersHTML(newMembers[i].image, newMembers[i].comments, newMembers[i].time, '<span class="link_ra">></span>');
        //set attributes for new div section on createDivActivitiesSection function
        createDivActivitiesSection(recentActivietiesList, 'recent-activity', recentActivitiesSection );
    }
}

if (typeof newMembers === 'undefined' || newMembers.length === 0) {
    newMembersSection.textContent('there is no new members to display');
    recentActivitiesSection.textContent('there is no new activities to display');
} else{
    //print new Members
    displayNewMembers();  
    //print last activities
    displayRecentActivities();
}


/* ============================================= */
/*               hide alert bar                  */
/* ============================================= */

alertMsgBtn.addEventListener("click", e => {

    alertMsgBtn.parentNode.classList.add('__hide');
    setTimeout(function() {
        if(alertMsgBar.classList.contains('__hide')){
            alertMsgBar.style.display = 'none';
        }
    }, 1000);
    
})

/* ============================================= */
/* Extra Credit - notifications dropdown Menu         */
/* ============================================= */

//current height from ul list 
const currentHeightUl = Math.floor(alertMsgTopHeader.children[1].offsetHeight * alertMsgTopHeader.children.length);
if(alertMsgTopHeader.children.length >= 1){
    // if notifications true
    bellNotifications.classList.add('notifications__green');
}else{
    //if notification false
    bellNotifications.classList.remove('notifications__green');
}
//click event to open or close notification list
for (let i = 0; i < alertMsgTopHeader.children.length; i++) {
    alertMsgTopHeader.children[i].style.display = 'none';
}
bellNotifications.addEventListener('click', e => {   
    if(e.target.tagName === 'svg' && bellNotifications.classList.contains('notifications__green') ){ 
        for (let i = 0; i < alertMsgTopHeader.children.length; i++) {
            alertMsgTopHeader.children[i].style.display = 'block';
            setTimeout(function(){
                alertMsgTopHeader.children[i].style.opacity = '1';
            }, 100);
        }
        
        alertMsgTopHeader.style.height = currentHeightUl + 'px';
        
    }
    if(e.target.textContent === 'x' && bellNotifications.classList.contains('notifications__green')){
        alertMsgTopHeader.style.height = '0px';
        for (let i = 0; i < alertMsgTopHeader.children.length; i++) {
            alertMsgTopHeader.children[i].style.opacity = '0';
            setTimeout(function(){
                alertMsgTopHeader.children[i].style.display = 'none';
            }, 800);
        }
    }
} )
/* ============================================= */
/*      Extra Credit - Search Function                */
/* ============================================= */
for (let i = 0; i < newMembers.length; i++) {  
    const userListLi = document.createElement('LI');
    userListLi.innerHTML = newMembers[i].name;
    userListElements.appendChild(userListLi);
    userListLi.setAttribute('data-caption', newMembers[i].name );
}

//keyup eventListener
searchUserInput.addEventListener("keyup", event => {
    //insert data LI Elem. in input search field
    userListElements.style.display = 'block';
    userListElements.style.opacity = '1';

    for (let index = 0; index < userListElements.children.length; index++) {
        const elemLI = userListElements.children[index];
        //get attr. data-caption from LI elem.
        if ( elemLI.getAttribute('data-caption').toLowerCase().indexOf(searchUserInput.value.toLowerCase()) < 0 ) {
            elemLI.style.display = 'none';
        } else {
            elemLI.style.display = 'block';
            //bei aauswählen Namen in Inputfeld | zeigen  Liste ausblenden! 
            elemLI.addEventListener('click', e => {
                searchUserInput.value = e.target.innerText;
                userListElements.style.display = 'none';
                userListElements.style.opacity = '0';
            })
        }
    }
 
});
/* ============================================= */
/*      Validate Contact Form               */
/* ============================================= */
function validateForm(event){
    if(document.getElementById('search_user').value && document.getElementById('message').value){
        contactFormMsg.classList.remove('error');
        contactFormMsg.classList.add('success');
        contactFormMsg.innerText = 'Your message was sendet';
        document.getElementById('search_user').value = '';
        document.getElementById('message').value = '';
    }else{
        contactFormMsg.classList.remove('success');
        contactFormMsg.classList.add('error');
        contactFormMsg.innerText = 'User Name and text message are require!';
    }
    event.preventDefault();
}

contactForm.addEventListener('submit', validateForm);

/* ============================================= */
/* Extra Credit Save/remove settings with Local storage  */
/* ============================================= */
function logSelection(){
    const selectedChild = document.getElementById('time');
    selectedChild.addEventListener('change', () => {
        const current = selectedChild.value; 
        if(current != 'null'){
            selectedChild.style.color = '#767575';
        }else{
            selectedChild.style.color = '#d1d1d1';
        }
    })
    
}
logSelection();

//event focus 

// check support local storage
function supportsLocalStorage() {
    try { 
        //testen if the Browser has access to the object LocalStorage key and make sure it is not null
        //some browsers and devices this can trought  error  that's why try and catch
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e){ //exception
        return false;
    }
}
//retrieve setting from LS , returm an array
function getSettingsValues(){
    const settingsValues = localStorage.getItem('settingValues');
    if(settingsValues){
        return JSON.parse(settingsValues);
    }else{
        return[];
    }
}
//validation - saving strings in LS
function saveSettingValue(str){
    const settingsValues = getSettingsValues();
    if(!str || settingsValues.indexOf(str) > -1){
        return false;
    }
    settingsValues.push(str);
    localStorage.setItem('settingValues', JSON.stringify(settingsValues) );
    return true;
}
function removeSettings(){
    localStorage.removeItem('settingValues');
}


if(supportsLocalStorage()){
    function save() {
        var checkbox = document.querySelector('.mailSettings input');
        var checkboxProfil = document.querySelector('.profilSettings input');
        var selectTimeCity = document.getElementById('time');
        if(checkbox.checked){
            localStorage.setItem("checkbox1", checkbox.checked);
        }else{
            localStorage.removeItem("checkbox1", checkbox.checked);
        }
        if(checkboxProfil.checked){
            localStorage.setItem("checkbox2", checkboxProfil.checked);
        }else{
            localStorage.removeItem('checkbox2', checkboxProfil.checked);   
        }
        if(selectTimeCity.value != 'null'){
            localStorage.setItem('selectOptions', selectTimeCity.value);
        }else{
            localStorage.removeItem('selectOptions', selectTimeCity.value);   
        }
    }
        //for loading.
        var checked = JSON.parse(localStorage.getItem("checkbox1"));
        var checked1 = JSON.parse(localStorage.getItem("checkbox2"));
        var saveTimeValue = localStorage.getItem("selectOptions");
        
        document.querySelector('.mailSettings input').checked = checked;
        document.querySelector('.profilSettings input').checked = checked1;
        document.querySelector('#time').value = saveTimeValue;
        
    // get checkboxes

// get select List
// Function - submit eventListener for submit Btn
// Function -click eventListener for reset Btn

}
