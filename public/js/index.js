/*jshint esversion: 6 */
var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});
// Socket.emit('createEmail', {
//   to: 'jen@example.com',
//   text: 'Hey. This is Andrew.',
// });

//   socket.emit('createMessage', {
//     from: 'luis@luis.com',
//     text: 'cenas bacanas',
//   });
// });

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// Socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});



jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val(),
  }, function() {

  });
});
