//
// https://developer.mozilla.org/en/docs/Online_and_offline_events
//
window.addEventListener('load', function() {
  var status = document.getElementById("status");

  function updateOnlineStatus(event){
    var condition = navigator.onLine ? "online" : "offline";
    status.className = condition;
    status.innerHTML = condition.toUpperCase();
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  updateOnlineStatus();
});

//
// add to home screen
//
var savedPrompt;
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  savedPrompt = e;
  return false;
});
document.getElementById('a2hs').addEventListener('click', function(){
  if(savedPrompt){
    savedPrompt.prompt();
    savedPrompt = null;
  }
});
