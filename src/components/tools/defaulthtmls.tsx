export const defaultHtmls = [
  //   CHAPTER1
  `
<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
  <body>
    <!-- Your code goes here -->
    <h2>Welcome to My Webpage</h2>
    <p>My name is ____, and this is my first HTML lesson</p>
  </body>
</html>`,
  // CHAPTER2
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
  <body>
    <h1>This is a heading.</h1>
    <h2>This is a heading.</h2>
    <h3>This is a heading.</h3>
    <h4>This is a heading.</h4>
    <h5>This is a heading.</h5>
    <h6>This is a heading.</h6>
    <p>And this is a paragraph.</p>
  </body>
</html>`,
  `
<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
  <body>
    <p>Hello, below me is a link</p>
    <a href="#" target="_blank">I'm a link</a>
  </body>
</html>
`,
];

for (let i = 0; i < defaultHtmls.length; i++) {
  defaultHtmls[i] = defaultHtmls[i].trim();
}
