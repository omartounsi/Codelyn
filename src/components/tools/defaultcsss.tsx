export const defaultCSSs = [
  // CSS CHAPTER 1 - Introduction to CSS
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Introduction</title>
    <style>
      /* Add your CSS here */
      h1 {
        color: blue;
        font-size: 36px;
      }
      
      p {
        color: green;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to CSS!</h1>
    <p>This is my first CSS lesson. Try changing the colors above!</p>
    <p>CSS stands for Cascading Style Sheets.</p>
  </body>
</html>`,

  // CSS CHAPTER 2 - CSS Selectors
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Selectors</title>
    <style>
      /* Element selector */
      h1 {
        color: navy;
      }
      
      /* Class selector */
      .highlight {
        background-color: yellow;
        padding: 5px;
      }
      
      /* ID selector */
      #special {
        color: red;
        font-weight: bold;
      }
      
      /* Try adding more selectors */
    </style>
  </head>
  <body>
    <h1>CSS Selectors</h1>
    <p class="highlight">This paragraph has a class.</p>
    <p id="special">This paragraph has an ID.</p>
    <p>This is a normal paragraph.</p>
    
    <div class="highlight">
      <p>This paragraph is inside a div with a class.</p>
    </div>
  </body>
</html>`,

  // CSS CHAPTER 3 - Text and Fonts
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Text and Fonts</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      
      .large-text {
        font-size: 24px;
        font-weight: bold;
      }
      
      .styled-text {
        color: #333;
        text-decoration: underline;
        text-align: center;
      }
      
      .italic-text {
        font-style: italic;
        color: darkblue;
      }
      
      /* Try experimenting with different font properties */
    </style>
  </head>
  <body>
    <h1 class="large-text">Text Styling with CSS</h1>
    <p class="styled-text">This text is centered and underlined.</p>
    <p class="italic-text">This text is italic and dark blue.</p>
    <p>Try changing the font-family, font-size, and colors above!</p>
  </body>
</html>`,

  // CSS CHAPTER 4 - Colors and Backgrounds
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Colors and Backgrounds</title>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      
      .color-examples {
        padding: 20px;
        margin: 10px 0;
      }
      
      .hex-color {
        background-color: #ff6b6b;
        color: white;
      }
      
      .rgb-color {
        background-color: rgb(52, 152, 219);
        color: white;
      }
      
      .rgba-color {
        background-color: rgba(46, 204, 113, 0.7);
        color: white;
      }
      
      .gradient-bg {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Colors and Backgrounds</h1>
    
    <div class="color-examples hex-color">
      This uses a hex color: #ff6b6b
    </div>
    
    <div class="color-examples rgb-color">
      This uses RGB: rgb(52, 152, 219)
    </div>
    
    <div class="color-examples rgba-color">
      This uses RGBA with transparency: rgba(46, 204, 113, 0.7)
    </div>
    
    <div class="color-examples gradient-bg">
      This uses a gradient background
    </div>
  </body>
</html>`,

  // CSS CHAPTER 5 - The Box Model
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Box Model</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
      }
      
      .box-example {
        background-color: lightblue;
        padding: 20px;
        margin: 20px;
        border: 3px solid darkblue;
        width: 200px;
      }
      
      .different-padding {
        background-color: lightgreen;
        padding: 10px 30px;
        margin: 15px;
        border: 2px solid green;
        width: 250px;
      }
      
      .border-box {
        background-color: lightcoral;
        padding: 20px;
        margin: 20px;
        border: 5px solid red;
        width: 200px;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <h1>Understanding the Box Model</h1>
    
    <div class="box-example">
      This box has 20px padding, 20px margin, and 3px border.
    </div>
    
    <div class="different-padding">
      This box has different horizontal (30px) and vertical (10px) padding.
    </div>
    
    <div class="border-box">
      This box uses box-sizing: border-box, so the width includes padding and border.
    </div>
    
    <p>Try changing the padding, margin, and border values above!</p>
  </body>
</html>`,

  // CSS CHAPTER 6 - Layout Basics
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Layout Basics</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      
      .container {
        background-color: #f0f0f0;
        padding: 20px;
        margin-bottom: 20px;
      }
      
      .inline-example {
        display: inline;
        background-color: lightblue;
        padding: 10px;
        margin: 5px;
      }
      
      .block-example {
        display: block;
        background-color: lightgreen;
        padding: 10px;
        margin: 5px 0;
        width: 200px;
      }
      
      .inline-block-example {
        display: inline-block;
        background-color: lightcoral;
        padding: 10px;
        margin: 5px;
        width: 150px;
      }
      
      .positioned-box {
        position: relative;
        top: 20px;
        left: 50px;
        background-color: yellow;
        padding: 10px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <h1>CSS Layout Basics</h1>
    
    <div class="container">
      <h3>Display: inline</h3>
      <span class="inline-example">Inline 1</span>
      <span class="inline-example">Inline 2</span>
      <span class="inline-example">Inline 3</span>
    </div>
    
    <div class="container">
      <h3>Display: block</h3>
      <div class="block-example">Block 1</div>
      <div class="block-example">Block 2</div>
    </div>
    
    <div class="container">
      <h3>Display: inline-block</h3>
      <div class="inline-block-example">Inline-block 1</div>
      <div class="inline-block-example">Inline-block 2</div>
    </div>
    
    <div class="container">
      <h3>Positioned Element</h3>
      <div class="positioned-box">
        This box is positioned relative to its normal position.
      </div>
    </div>
  </body>
</html>`,

  // CSS CHAPTER 7 - Flexbox Layout
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Flexbox</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      
      .flex-container {
        display: flex;
        background-color: #f0f0f0;
        padding: 20px;
        margin-bottom: 20px;
        min-height: 100px;
      }
      
      .flex-item {
        background-color: lightblue;
        padding: 20px;
        margin: 5px;
        border: 2px solid darkblue;
      }
      
      .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgreen;
        height: 200px;
      }
      
      .space-between {
        display: flex;
        justify-content: space-between;
        background-color: lightcoral;
      }
      
      .column-container {
        display: flex;
        flex-direction: column;
        background-color: lightyellow;
        height: 200px;
      }
    </style>
  </head>
  <body>
    <h1>Flexbox Layout</h1>
    
    <h3>Basic Flex Container</h3>
    <div class="flex-container">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
    </div>
    
    <h3>Centered Content</h3>
    <div class="center-container">
      <div class="flex-item">Perfectly Centered!</div>
    </div>
    
    <h3>Space Between Items</h3>
    <div class="space-between">
      <div class="flex-item">Left</div>
      <div class="flex-item">Center</div>
      <div class="flex-item">Right</div>
    </div>
    
    <h3>Column Direction</h3>
    <div class="column-container">
      <div class="flex-item">Top</div>
      <div class="flex-item">Middle</div>
      <div class="flex-item">Bottom</div>
    </div>
  </body>
</html>`,

  // CSS CHAPTER 8 - CSS Grid Layout
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning CSS - Grid Layout</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 100px 100px;
        gap: 10px;
        background-color: #f0f0f0;
        padding: 20px;
        margin-bottom: 20px;
      }
      
      .grid-item {
        background-color: lightblue;
        border: 2px solid darkblue;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .layout-grid {
        display: grid;
        grid-template-columns: 200px 1fr 150px;
        grid-template-rows: 60px 1fr 40px;
        grid-template-areas:
          "header header header"
          "sidebar main aside"
          "footer footer footer";
        min-height: 400px;
        gap: 10px;
        background-color: #e0e0e0;
        padding: 10px;
      }
      
      .header { grid-area: header; background-color: #333; color: white; }
      .sidebar { grid-area: sidebar; background-color: #f4f4f4; }
      .main { grid-area: main; background-color: white; }
      .aside { grid-area: aside; background-color: #e8e8e8; }
      .footer { grid-area: footer; background-color: #333; color: white; }
      
      .area-item {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <h1>CSS Grid Layout</h1>
    
    <h3>Basic Grid</h3>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
    </div>
    
    <h3>Layout with Grid Areas</h3>
    <div class="layout-grid">
      <div class="header area-item">Header</div>
      <div class="sidebar area-item">Sidebar</div>
      <div class="main area-item">Main Content</div>
      <div class="aside area-item">Aside</div>
      <div class="footer area-item">Footer</div>
    </div>
  </body>
</html>`,

  // CSS CHAPTER 9 - Responsive Design
  `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning CSS - Responsive Design</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
      
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      header {
        background: #333;
        color: white;
        padding: 1rem 0;
      }
      
      .nav-list {
        display: flex;
        list-style: none;
        justify-content: center;
      }
      
      .nav-list li {
        margin: 0 1rem;
      }
      
      .content-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
      }
      
      .main-content {
        background: #f4f4f4;
        padding: 2rem;
        border-radius: 8px;
      }
      
      .sidebar {
        background: #e8e8e8;
        padding: 1.5rem;
        border-radius: 8px;
      }
      
      /* Tablet styles */
      @media (max-width: 768px) {
        .content-grid {
          grid-template-columns: 1fr;
        }
        
        .nav-list {
          flex-direction: column;
          text-align: center;
        }
        
        .nav-list li {
          margin: 0.5rem 0;
        }
      }
      
      /* Mobile styles */
      @media (max-width: 480px) {
        .container {
          padding: 0 10px;
        }
        
        .main-content,
        .sidebar {
          padding: 1rem;
        }
        
        h1 {
          font-size: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <div class="container">
        <nav>
          <ul class="nav-list">
            <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">Services</a></li>
            <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <div class="container">
      <div class="content-grid">
        <main class="main-content">
          <h1>Responsive Website</h1>
          <p>This website adapts to different screen sizes. Try resizing your browser window to see the layout change!</p>
          <p>On tablets, the sidebar moves below the main content. On mobile, the navigation becomes vertical.</p>
        </main>
        
        <aside class="sidebar">
          <h2>Sidebar</h2>
          <p>This sidebar adjusts based on screen size using CSS media queries.</p>
        </aside>
      </div>
    </div>
  </body>
</html>`,
];

for (let i = 0; i < defaultCSSs.length; i++) {
  defaultCSSs[i] = defaultCSSs[i].trim();
}
