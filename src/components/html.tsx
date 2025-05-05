export const Document = `<html lang="en">
  <head>
    <title>Document</title>
    <!-- This is the styling of your document -->
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
      body, html{
        color: black;
        font-family: "Geist";
        height: 100%;
        width: 100%;
        overflow: hidden;
        padding: 0;
        margin: 0;
      }
      .container{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    </style>
  </head>

  <body>
    <!-- This is where your code goes -->
    <div class="container">
      <p>Hello World!</p>
    </div>
  </body>
</html>
`.trim();
