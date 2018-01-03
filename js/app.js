// Hide alert message
$('#flashMessage').hide();

$('#previewButton').click(function() {
  // Captures form title and content
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  // Display form content in post preview
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(content);

  $('#flashMessage').fadeIn(1000).delay(3000).slideUp();

});
