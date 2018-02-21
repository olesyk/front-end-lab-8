function debounce(callback, wait) {
  let timeout; 
  const later = () => callback.apply(iterator = 1);
    return function() {
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}