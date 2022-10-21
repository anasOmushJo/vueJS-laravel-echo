export const addClass = (to, from, next) => {
  let elements = to.meta.addClass;
  if (elements) {
    if (typeof elements === "string") {
      elements = elements.split(",");
    }
    elements.forEach(function(element) {
      document.body.classList.add(element);
    });
  }
};

export const commonBeforeEnter = (to, from, next) => {
  addClass(to, from, next);
};
