$(document).ready(function() {
  return App.room = App.cable.subscriptions.create({
    channel: "RoomChannel",
    room_id: $('#main-grid').data('room-id')
  }, {
    collection: function() {
      return $("[data-channel='rooms']");
    },
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      console.log("latency: " + (Date.now() - data.beat.date));
      data.beat.keyCode;
      return playKeypress(data.beat.keyCode, randomColor(), data.beat.soundswitch);
    },
    speak: function(beat) {
      return this.perform('speak', {
        beat: beat,
        room_id: this.collection().data('room-id')
      });
    }
  });
});

$(document).on('keydown', 'body', function(event) {
  var keyCode = event.keyCode;
  var soundswitch = soundSwitch();
  return App.room.speak({
    keyCode: keyCode,
    date: Date.now(),
    soundswitch: soundswitch
  });
});

$(document).on('click', 'body', function(event) {
  event.preventDefault;
  var keyCode;
  var soundswitch = soundSwitch();

  $("#key-1").on('click', function() {
    var keyCode = 49;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-2").on('click', function() {
    var keyCode = 50;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-3").on('click', function() {
    var keyCode = 51;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-4").on('click', function() {
    var keyCode = 52;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-5").on('click', function() {
    var keyCode = 53;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-6").on('click', function() {
    var keyCode = 54;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-7").on('click', function() {
    var keyCode = 55;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-8").on('click', function() {
    var keyCode = 56;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
  $("#key-9").on('click', function() {
    var keyCode = 57;
    return App.room.speak({
      keyCode: keyCode,
      date: Date.now(),
      soundswitch: soundswitch
    });
  });
});

// # $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
// #   if (event.keyCode === 13) {
// #     App.room.speak(event.target.value);
// #     event.target.value = '';
// #     return event.preventDefault();
// #   }
// # });
// #
