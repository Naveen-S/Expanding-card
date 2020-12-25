console.log('Linked');

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    console.log(e);
    removeActiveClasses();
    panel.classList.add('active');
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
