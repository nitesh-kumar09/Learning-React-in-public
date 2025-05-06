const container = React.createElement(
  'div',
  { key: 1, className: 'container' },
  [
    React.createElement(
      'h1',
      { key: 1 },
      [React.createElement('span', { key: 2 }, 'Welcome')],
      ' to React Tutorial'
    ),
    React.createElement('img', {
      key: 3,
    style:{width:'200px'},
      src: 'https://imgs.search.brave.com/voRxaoQsNb5lgOljgV3xwl6OhsoCufsjwYnuZSNKhVw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/OTYwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw',
    }),
    ],
    React.createElement('form', { id: 'ourForm' }, [
      React.createElement('input',{type:'text',placeHolder:'Enter your name '},)
  ])
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);

// const h2 = React.createElement('h2', { className: 'title' }, 'Welcome to ApnaAlgo')

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: "div",
//   ref: null,
//   props: {
//     children: [
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "h1",
//         ref: null,
//         props: {
//           children: ["Hello from React"],
//         },
//       },
//       {
//         $$typeof: Symbol.for("react.element"),
//         type: "h1",
//         ref: null,
//         props: {
//           children: ["Hello from React"],
//         },
//       },
//     ],
//   },
// });
