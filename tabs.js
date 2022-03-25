/*
  This file contains the code for controlling the tabs
*/

// The array of tabs control elements
tabControls = [
  document.getElementById('tab1control'), 
  document.getElementById('tab2control'), 
  document.getElementById('tab3control')
]

// The array of tabs elements
tabs = [
  document.getElementById('tab1content'), 
  document.getElementById('tab2content'), 
  document.getElementById('tab3content')
]

// handles the switching of tabs
function tabSwitcher(tabnum=0) {

  // check user for permission to visit tab
  if ((tabnum == 1) && (!employees.is_authorized(user, 'edit'))) {
    return
  }

  // reseting all controls
  tabControls.forEach( tab => {
    tab.style.borderColor = 'darkgrey';
    tab.style.background = 'lightgrey';
  })

  // hiding all tab content
  tabs.forEach( tab => {
    tab.style.display = 'none';
  })

  // activating the select tab
  tabControls[tabnum].style.borderColor = 'blue';
  tabControls[tabnum].style.background = 'lightblue';
  tabs[tabnum].style.display = 'inline-block';
}

for (let i = 0; i < tabControls.length; i += 1) { 
  tabControls[i].addEventListener('click', (e) => tabSwitcher(i));
}

// First code to run
(function() {
  tabSwitcher(0)
})()

// limit tab contol visiblity if they have permission
// if (!employees.is_authorized(user, 'edit')) {
//  document.getElementById('box1').style.display = "none";
// }