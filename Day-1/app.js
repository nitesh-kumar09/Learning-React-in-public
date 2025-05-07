const conatiner = React.createElement(
  'div',
  { class: 'title', style: { color: 'red', backgroundColor: 'black' } },

  [
    React.createElement('h1', {}, 'Radhe Radhe jii', [
      React.createElement('span', { class: 'span' }, ' Span tag'),
    ]),
  ],
  React.createElement('h1', {}, 'Hey!', [
    React.createElement('span', { class: 'span' }, ' Span tag'),
  ])
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(conatiner);
