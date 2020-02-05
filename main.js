const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.value);

  const suffix = this.dataset.sizing || '';
  // console.log(this.dataset);
  // => DOMStringMap {sizing: "px"}
  // console.log(suffix);
  // => px

  // Document.documentElement は、その document のルート要素である Element を返します。
  // https://developer.mozilla.org/ja/docs/Web/API/Document/documentElement

  // The CSSStyleDeclaration.setProperty() method interface sets a new value for a property on a CSS style declaration object.
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
  // style.setProperty(propertyName, value, priority);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // => <html lang="ja" style="--spacing:10px; --blur:0px;">

};

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate, false);
});

// this.value を取得する
inputs.forEach((input) => {
  input.addEventListener('mousemove', handleUpdate, false);
});
