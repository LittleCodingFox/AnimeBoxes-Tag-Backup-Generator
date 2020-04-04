'use strict';

/**
 * Processes input data
 */
function Process(event) {
  // Get elements
  const originalEl = document.getElementById('original');
  const tagsEl = document.getElementById('tags');
  const resultEl = document.getElementById('result');

  // Init empty object
  let backupJson = {};

  // Parse data
  try {
    // console.log(originalEl.value);

    backupJson = JSON.parse(originalEl.value);
  } catch (e) {
    console.error(e);

    originalEl.value = 'Failed to load the backup data';

    return;
  }

  // Create tags array by separating newlines
  const tags = tagsEl.value.trim().split('\n');

  // console.log(tags);

  // Empty check
  if (!tags.length || tags[0] === '') {
    tagsEl.value = 'Please input something';

    return;
  }

  // Push object with the banned tags to json backup data
  tags.forEach((tag, index) => {
    backupJson.bannedTags.push({
      bannedTagid: 0,
      tagText: tag,
      mId: index + 1,
    });
  });

  // Populate result text box
  resultEl.value = JSON.stringify(backupJson, null, 2);

  // Prevent form base functionality
  event.preventDefault();
}

// Create form event listener for submit
document.getElementById('form').addEventListener('submit', Process);
