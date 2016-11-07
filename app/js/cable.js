ActionCable = require('actioncable');

var cable = ActionCable.createConsumer('ws://localhost:3000/cable');

cable.subscriptions.create({ channel: "ChatChannel", room: "Best Room" }, {
//
//   received: (data) ->
//   @appendLine(data)
//
// appendLine: (data) ->
//   html = @createLine(data)
//   $("[data-chat-room='Best Room']").append(html)
//
// createLine: (data) ->
//   """
//   <article class="chat-line">
//     <span class="speaker">#{data["sent_by"]}</span>
//     <span class="body">#{data["body"]}</span>
//   </article>
//   """

  //  Called when the subscription is ready for use on the server
// connected: ->
//   @install()
//   @appear()
//
// // Called when the WebSocket connection is closed
// disconnected: ->
//   @uninstall()
//
// // Called when the subscription is rejected by the server
// rejected: ->
//   @uninstall()
//
// appear: ->
//   //  Calls `AppearanceChannel#appear(data)` on the server
//   @perform("appear", appearing_on: $("main").data("appearing-on"))
//
// away: ->
//   // Calls `AppearanceChannel#away` on the server
//   @perform("away")


// buttonSelector = "[data-behavior~=appear_away]"

// install: ->
//   $(document).on "turbolinks:load.appearance", =>
//     @appear()
//
//   $(document).on "click.appearance", buttonSelector, =>
//     @away()
//     false
//
//   $(buttonSelector).show()
//
// uninstall: ->
//   $(document).off(".appearance")
//   $(buttonSelector).hide()
//
});

// cable.subscriptions.create('WebNotificationsChannel', {
//   // normal channel code goes here...
//   received: (data) ->
//    new Notification data["title"], body: data["body"]
// });
