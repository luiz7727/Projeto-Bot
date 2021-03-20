window.watsonAssistantChatOptions = {
    integrationID: "2ea536a0-ef34-44f8-a73c-272599055bfe", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "e47150fd-16ed-4cdb-a864-2584ececd3bf", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});