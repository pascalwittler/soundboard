(() => {
  const uploadDialogOpener = document.querySelector('.upload-dialog-opener');
  const uploadDialog = document.querySelector('.upload-dialog');

  uploadDialogOpener.addEventListener('click', () => {
    uploadDialog.showModal();
  });

  document.addEventListener('click', (event) => {
    if (event.target === uploadDialog) {
      uploadDialog.close();
    }
  });
})();
