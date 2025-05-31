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
  // CHAPTER3
  `
<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
  <body>
    <!-- your code goes here -->
    <p>Hello, below me is a link</p>
    <a href="#" target="_blank">I'm a link</a><br>

    <!-- add the image below this  -->
  </body>
</html>
`,
  // CHAPTER4
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML - Lists</title>
  </head>
  <body>
    <h2>My Favorite Foods</h2>
    <!-- Try creating an unordered list here -->
    
    <h2>Steps to Make Coffee</h2>
    <!-- Try creating an ordered list here -->
    
    <h2>Navigation Menu</h2>
    <!-- Try creating a navigation list with links -->
    
  </body>
</html>`,
  // CHAPTER5
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML - Tables</title>
    <style>
      table, th, td {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h2>Student Grades</h2>
    <!-- Try creating a table with student names, subjects, and grades -->
    
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>95</td>
          <td>88</td>
          <td>92</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>87</td>
          <td>94</td>
          <td>89</td>
        </tr>
        <!-- Add more table rows here -->
      </tbody>
    </table>
  </body>
</html>`,
  // CHAPTER6
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML - Forms</title>
  </head>
  <body>
    <h2>Contact Form</h2>
    <form>
      <!-- Try creating form elements here -->
      
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <!-- Add more form fields -->
      
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`,
  // CHAPTER7
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML - Divs and Spans</title>
  </head>
  <body>
    <div class="header">
      <h1>My Website</h1>
      <p>Welcome to <span class="highlight">my awesome website</span>!</p>
    </div>
    
    <div class="content">
      <!-- Try creating nested divs and spans here -->
      
    </div>
    
    <div class="footer">
      <p>Copyright 2024</p>
    </div>
  </body>
</html>`,
  // CHAPTER8
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning HTML - Semantic Elements</title>
  </head>
  <body>
    <header>
      <h1>My Blog</h1>
      <nav>
        <!-- Add navigation here -->
      </nav>
    </header>
    
    <main>
      <section>
        <h2>About Me</h2>
        <!-- Try using semantic elements here -->
      </section>
      
      <article>
        <h2>My First Blog Post</h2>
        <p>This is my first blog post...</p>
      </article>
    </main>
    
    <aside>
      <h3>Recent Posts</h3>
      <!-- Sidebar content -->
    </aside>
    
    <footer>
      <p>&copy; 2024 My Blog</p>
    </footer>
  </body>
</html>`,
  // CHAPTER9
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My professional portfolio website">
    <title>My Portfolio - Best Practices</title>
  </head>
  <body>
    <header>
      <nav role="navigation" aria-label="Main menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a web developer passionate about creating amazing experiences.</p>
      </section>
      
      <!-- Add more sections using best practices -->
      
    </main>
    
    <footer>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  </body>
</html>`,
];

for (let i = 0; i < defaultHtmls.length; i++) {
  defaultHtmls[i] = defaultHtmls[i].trim();
}
