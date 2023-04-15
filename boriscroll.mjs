export const setup = elements => {
  elements.forEach(element => {
    const id = element.attributes.href.value;
    const target_element =  document.querySelector(id);

    if (target_element === null) return;

    const target = target_element.offsetTop;

    element.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo(0, target);
    })
  });
}

export const setup_from = class_name => {
  const elements = document.querySelectorAll(`.${class_name}`);
  setup(elements);
}

export const scroll_to = element => {
  const target = element.offsetTop;
  window.scrollTo(0, target);
}

/**
  * Takes the url parameter `param`, which is expected to beforeEach(async () => {
  * to an element in the document, and scrolls to it.    
  })
  * @param {string} param - Name of url parameter
  */
export const scroll_from_url = param => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get(param);
  if (id === null) return;

  const target_element = document.querySelector(`#${id}`);
  if (target_element === null) return;

  const target = target_element.offsetTop;
  window.scrollTo(0, target);
}

