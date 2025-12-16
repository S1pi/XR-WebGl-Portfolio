const modelViewer = document.querySelector('model-viewer');
const variantSelect = document.querySelector('#variant-select');

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

// Load and bind available variants once the model finishes loading
const populateVariants = () => {
  if (!variantSelect) return;
  const variants = modelViewer?.availableVariants || [];

  if (variants.length === 0) {
    variantSelect.innerHTML = '<option>No variants available</option>';
    variantSelect.disabled = true;
    return;
  }

  variantSelect.innerHTML = '<option value="default">Default</option>';
  variants.forEach((name) => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    variantSelect.appendChild(option);
  });

  variantSelect.disabled = false;
  variantSelect.value = modelViewer.variantName || 'default';
};

if (modelViewer) {
  modelViewer.addEventListener('progress', onProgress);
  modelViewer.addEventListener('load', populateVariants);
}

if (variantSelect) {
  variantSelect.addEventListener('change', (event) => {
    const selected = event.target.value;
    modelViewer.variantName = selected === 'default' ? null : selected;
  });
}
